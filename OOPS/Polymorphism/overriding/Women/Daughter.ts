import { Women } from "./Women";

export class Daughter extends Women{
    father_name : string;
    mother_name  :string;
    constructor( father_name : string , mother_name : string ){
        super()
        this.father_name = father_name ; 
        this.mother_name = mother_name ; 
    }

    about(){
        return (`${this.name} is a daughter of ${this.father_name} & ${this.mother_name}`);    
    }
}