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
var Book = /** @class */ (function () {
    function Book(bookname) {
        this.bookname = bookname;
    }
    Book.prototype.getBookname = function () {
        return "".concat(this.bookname);
    };
    return Book;
}());
var TextBook = /** @class */ (function (_super) {
    __extends(TextBook, _super);
    function TextBook(bookname, releaseDate) {
        var _this = _super.call(this, bookname) || this;
        _this.releaseDate = releaseDate;
        return _this;
    }
    TextBook.prototype.getReleaseDate = function () {
        return "TextBook " + this.bookname + " released on " + this.releaseDate;
    };
    return TextBook;
}(Book));
var AudioBook = /** @class */ (function (_super) {
    __extends(AudioBook, _super);
    function AudioBook(bookname, releaseDate) {
        var _this = _super.call(this, bookname) || this;
        _this.releaseDate = releaseDate;
        return _this;
    }
    AudioBook.prototype.getReleaseDate = function () {
        return "AudioBook " + this.bookname + " released on " + this.releaseDate;
    };
    return AudioBook;
}(Book));
var EBook = /** @class */ (function (_super) {
    __extends(EBook, _super);
    function EBook(bookname, releaseDate) {
        var _this = _super.call(this, bookname) || this;
        _this.releaseDate = releaseDate;
        return _this;
    }
    EBook.prototype.getReleaseDate = function () {
        return "EBook " + this.bookname + " released on " + this.releaseDate;
    };
    return EBook;
}(Book));
var tbook = new TextBook('Alchemist', '10-July-1998');
console.log(tbook.getReleaseDate());
var Abook = new AudioBook('Alchemist', '19-April-2001');
console.log(Abook.getReleaseDate());
var Ebook = new EBook('Alchemist', '18-Dec-2010');
console.log(Ebook.getReleaseDate());
