"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InterestCalculator = void 0;
var InterestCalculator = /** @class */ (function () {
    function InterestCalculator() {
    }
    InterestCalculator.prototype.calculateInterest = function (rate, amount) {
        return (rate * amount) / 100;
    };
    return InterestCalculator;
}());
exports.InterestCalculator = InterestCalculator;
