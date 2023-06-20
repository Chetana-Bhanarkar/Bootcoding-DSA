import { loan } from "./loan";

export class EducationLoan extends loan{
    courseFee : number ; 
    constructor(amount : number , rateOfInterest : number , courseFee : number){
        super(amount , rateOfInterest);
         this.courseFee = courseFee ; 
    }
    calculateInterest(): number {
        return (this.courseFee * this.rateOfInterest) / 100;
    }
    


}