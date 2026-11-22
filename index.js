function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    const primes = [2];
    for (let i = 3; i <= num; i++) {
        if (primes.every(prime => i % prime)) {
            primes.push(i);
        };
    };
    if (primes.pop() == num) {
        return true;
    } else {
        return false;
    };
};

module.exports = {
    isPrime
};
