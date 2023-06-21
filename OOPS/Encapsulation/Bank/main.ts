import { BankMember } from "./BankMember";


let bank = new BankMember(35000);
bank.deposit(9000)
console.log(bank.SavingBalance);

bank.withdrawl(1000)
console.log(bank.SavingBalance);


