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
exports.Mother = void 0;
var Women_1 = require("./Women");
var Mother = /** @class */ (function (_super) {
    __extends(Mother, _super);
    function Mother(girl, boy) {
        var _this = _super.call(this) || this;
        _this.girl = girl;
        _this.boy = boy;
        return _this;
    }
    Mother.prototype.about = function () {
        return ("she is the mother of ".concat(this.girl, " & ").concat(this.boy));
    };
    return Mother;
}(Women_1.Women));
exports.Mother = Mother;
