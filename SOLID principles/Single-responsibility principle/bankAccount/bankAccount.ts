import { InterestCalculator } from "./calculate_Interest";
import { IBankAccount } from "./iBankAccount";

export class BankAccount implements IBankAccount{
    amount = 10000 ; 
    interestCalculate : InterestCalculator = new InterestCalculator() ; 
    deposit(amount: number): number {
       return this.amount += amount ; 
    }
    withdrawl(amount: number): number {
       return this.amount -= amount ; 
    }
    calculateInterest(): number {
       return this.interestCalculate.calculateInterest(5 , this.amount) ; 
    }

}