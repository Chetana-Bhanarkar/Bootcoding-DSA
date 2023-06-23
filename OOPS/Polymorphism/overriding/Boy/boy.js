"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boy = void 0;
var Boy = /** @class */ (function () {
    function Boy(name) {
        this.name = name;
    }
    Boy.prototype.about = function () {
        console.log(this.name + " is an intelligent boy");
    };
    return Boy;
}());
exports.Boy = Boy;
