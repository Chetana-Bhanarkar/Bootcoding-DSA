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
var Book_1 = require("./Book");
var AudioBook = /** @class */ (function (_super) {
    __extends(AudioBook, _super);
    function AudioBook(bookname, releaseDate, narrator) {
        var _this = _super.call(this, bookname) || this;
        _this.releaseDate = releaseDate;
        _this.narrator = narrator;
        return _this;
    }
    AudioBook.prototype.getReleaseDate = function () {
        return "AudioBook " + this.bookname + " released on " + this.releaseDate + "and narrator is " + this.narrator;
    };
    return AudioBook;
}(Book_1.Book));
exports.default = AudioBook;
