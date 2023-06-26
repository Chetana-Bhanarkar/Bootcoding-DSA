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
exports.Daughter = void 0;
var Women_1 = require("./Women");
var Daughter = /** @class */ (function (_super) {
    __extends(Daughter, _super);
    function Daughter(father_name, mother_name) {
        var _this = _super.call(this) || this;
        _this.father_name = father_name;
        _this.mother_name = mother_name;
        return _this;
    }
    Daughter.prototype.about = function () {
        return ("".concat(this.name, " is a daughter of ").concat(this.father_name, " & ").concat(this.mother_name));
    };
    return Daughter;
}(Women_1.Women));
exports.Daughter = Daughter;
