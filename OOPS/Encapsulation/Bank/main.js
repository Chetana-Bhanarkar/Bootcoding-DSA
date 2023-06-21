"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BankMember_1 = require("./BankMember");
var bank = new BankMember_1.BankMember(35000);
bank.deposit(9000);
console.log(bank.SavingBalance);
bank.withdrawl(1000);
console.log(bank.SavingBalance);
