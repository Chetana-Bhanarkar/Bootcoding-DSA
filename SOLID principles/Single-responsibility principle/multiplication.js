var multiplication = /** @class */ (function () {
    function multiplication(a, b) {
        this.a = a;
        this.b = b;
    }
    multiplication.prototype.multiply = function () {
        return this.a * this.b;
    };
    return multiplication;
}());
var m = new multiplication(10, 20);
var mul = m.multiply();
console.log(mul);
