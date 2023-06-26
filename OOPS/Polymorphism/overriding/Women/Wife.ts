import { Women } from "./Women";

export class Wife extends Women{
    husband : string ; 
    constructor(husband : string){
         super() ; 
         this.husband  = husband
    }

    about(){
        return (`she is wife of ${this.husband}`);
        
    }
}