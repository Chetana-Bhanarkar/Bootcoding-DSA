import { Person } from "./person";

export class Teacher extends Person{
    payment : number ;
    constructor(name : string , payment : number){
        super(name) ; 
        this.payment = payment
    }


    display() : void{
        console.log("Teacher Name is "+this.name);
        console.log("Teacher Payment is "+this.payment);      
    }
}