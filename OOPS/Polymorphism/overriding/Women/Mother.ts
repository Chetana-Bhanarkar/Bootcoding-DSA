import { Women } from "./Women";

export class Mother extends Women{
    girl : string ; 
    boy : string ; 
    constructor( girl : string , boy : string){
        super() ; 
        this.girl = girl ; 
        this.boy = boy ; 
    }

    about(){
      return (`she is the mother of ${this.girl} & ${this.boy}`);    
    }
}