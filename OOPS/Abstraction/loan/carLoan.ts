import { loan } from "./loan";

export class CarLoan extends loan{

    downpayment : number ; 

    constructor(amount : number , rateOfInterest : number , downpayment : number){
        super(amount , rateOfInterest);
        this.downpayment = downpayment ; 
    }
    calculateInterest(): number {
        return (this.amount - this.downpayment) * (this.rateOfInterest/100); 
    }
    
}