// Demonstrate Abstraction on Loan as parent with HomeLoan, CarLoan, EducationLoan

export abstract class loan{
    amount : number ; 
    rateOfInterest : number ; 

    constructor(amount:number , rateOfInterest : number) {
        this.amount = amount ; 
        this.rateOfInterest = rateOfInterest ; 
    }

    abstract calculateInterest() : number ; 
};