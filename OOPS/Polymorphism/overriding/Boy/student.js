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
exports.Student = void 0;
var boy_1 = require("./boy");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(marks, rollnumber, name) {
        var _this = _super.call(this, name) || this;
        _this.marks = marks;
        _this.rollnumber = rollnumber;
        _this.name = name;
        return _this;
    }
    Student.prototype.getInfo = function () {
        console.log("Name : " + this.name + ", Roll Number : " +
            this.rollnumber + " " + " scores " + this.marks + " out of 100");
    };
    Student.prototype.about = function () {
        console.log(this.name + " scores well");
    };
    return Student;
}(boy_1.Boy));
exports.Student = Student;
