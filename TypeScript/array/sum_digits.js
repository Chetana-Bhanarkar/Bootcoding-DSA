var sum_digit = function (n) {
    var sum = 0;
    var rem;
    while (n != 0) {
        rem = n % 10;
        sum += rem;
        n = Math.floor(n / 10);
    }
    return sum;
};
console.log(sum_digit(1234));
