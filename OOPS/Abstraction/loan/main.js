"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var homeLoan_1 = require("./homeLoan");
var carLoan_1 = require("./carLoan");
var educationLoan_1 = require("./educationLoan");
var hl = new homeLoan_1.HomeLoan(3500000, 9.5, 10);
console.log("Interest on Homeloan", hl.calculateInterest());
var cl = new carLoan_1.CarLoan(2000000, 10, 5);
console.log("Interest on Carloan", cl.calculateInterest());
var el = new educationLoan_1.EducationLoan(500000, 7.5, 250000);
console.log("Interest on Educationloan", el.calculateInterest());
