import { loan } from "./loan";

export class HomeLoan extends loan{
    duration : number ; 
    constructor(amount:number , rateOfInterest:number,duration : number) {
        super(amount,rateOfInterest);
        this.duration = duration ; 
    }
    calculateInterest(): number {
        return (this.amount * this.rateOfInterest * this.duration)/100;
    }
}