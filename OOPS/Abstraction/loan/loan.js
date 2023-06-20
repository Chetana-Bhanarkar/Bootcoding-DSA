"use strict";
// Demonstrate Abstraction on Loan as parent with HomeLoan, CarLoan, EducationLoan
Object.defineProperty(exports, "__esModule", { value: true });
exports.loan = void 0;
var loan = /** @class */ (function () {
    function loan(amount, rateOfInterest) {
        this.amount = amount;
        this.rateOfInterest = rateOfInterest;
    }
    return loan;
}());
exports.loan = loan;
;
