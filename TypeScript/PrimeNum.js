var primeNum = function (n) {
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            return n + " Its not a prime number";
        }
        return n + " Its a prime number";
    }
};
console.log(primeNum(20));
