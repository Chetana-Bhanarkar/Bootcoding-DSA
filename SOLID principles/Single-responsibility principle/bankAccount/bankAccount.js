"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
var calculate_Interest_1 = require("./calculate_Interest");
var BankAccount = /** @class */ (function () {
    function BankAccount() {
        this.amount = 10000;
        this.interestCalculate = new calculate_Interest_1.InterestCalculator();
    }
    BankAccount.prototype.deposit = function (amount) {
        return this.amount += amount;
    };
    BankAccount.prototype.withdrawl = function (amount) {
        return this.amount -= amount;
    };
    BankAccount.prototype.calculateInterest = function () {
        return this.interestCalculate.calculateInterest(5, this.amount);
    };
    return BankAccount;
}());
exports.BankAccount = BankAccount;
