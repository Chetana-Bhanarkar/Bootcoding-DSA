abstract class persons{
    name : string ; 
    constuctor(name : string){
        this.name = name ; 
    }

    display():any{
        return `Abstraction !!` ; 
    }
}


class person extends persons{
    age : number ; 
    constructor(name : string , age : number ){
        super();
        this.age = age ; 
        this.name = name; 
    }

    findname(name : string):any{
        return `Your name is ${name}`
    }
}


let prsn = new person('ARK',12);

console.log(prsn);









