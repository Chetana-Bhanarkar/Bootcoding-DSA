"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(bookname) {
        this.bookname = bookname;
    }
    Book.prototype.getBookname = function () {
        return "".concat(this.bookname);
    };
    return Book;
}());
exports.Book = Book;
