"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeLoan = void 0;
var loan_1 = require("./loan");
var HomeLoan = /** @class */ (function (_super) {
    __extends(HomeLoan, _super);
    function HomeLoan(amount, rateOfInterest, duration) {
        var _this = _super.call(this, amount, rateOfInterest) || this;
        _this.duration = duration;
        return _this;
    }
    HomeLoan.prototype.calculateInterest = function () {
        return (this.amount * this.rateOfInterest * this.duration) / 100;
    };
    return HomeLoan;
}(loan_1.loan));
exports.HomeLoan = HomeLoan;
