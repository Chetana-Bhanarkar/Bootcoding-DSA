export interface IBankAccount{
    deposit(amount:number):void; 
    withdrawl(amount:number):void;
    calculateInterest():number ; 
}