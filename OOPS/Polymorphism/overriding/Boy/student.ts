import { Boy } from "./boy";

export class Student extends Boy{
    marks : number  ;
    rollnumber : number ; 
    constructor(marks : number , rollnumber : number , name : string){
        super(name) ; 
        this.marks = marks ; 
        this.rollnumber = rollnumber ; 
        this.name = name

    }  

    getInfo(){
        console.log("Name : "+ this.name +", Roll Number : " + 
        this.rollnumber +" "+" scores " + this.marks + " out of 100"); 
    }
    
    about(){
         console.log(this.name + " scores well");      
    }
    
}