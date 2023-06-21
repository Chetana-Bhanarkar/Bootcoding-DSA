"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankMember = void 0;
var BankMember = /** @class */ (function () {
    function BankMember(savingBalance) {
        this._savingBalance = savingBalance;
    }
    Object.defineProperty(BankMember.prototype, "SavingBalance", {
        get: function () {
            return this._savingBalance;
        },
        set: function (v) {
            this._savingBalance = v;
        },
        enumerable: false,
        configurable: true
    });
    BankMember.prototype.deposit = function (amount) {
        this._savingBalance += amount;
    };
    BankMember.prototype.withdrawl = function (amount) {
        if (this.SavingBalance < amount) {
            console.log('insufficient balance');
            return;
        }
        this._savingBalance -= amount;
    };
    return BankMember;
}());
exports.BankMember = BankMember;
