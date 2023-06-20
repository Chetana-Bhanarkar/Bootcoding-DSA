import { HomeLoan } from "./homeLoan";  
import { CarLoan } from "./carLoan";  
import { EducationLoan } from "./educationLoan";  

let hl = new HomeLoan(3500000 , 9.5 , 10);
console.log("Interest on Homeloan" , hl.calculateInterest());

let cl = new CarLoan(2000000 , 10 , 5);
console.log("Interest on Carloan" , cl.calculateInterest());

let el = new EducationLoan(500000 , 7.5 , 250000);
console.log("Interest on Educationloan" , el.calculateInterest());


