abstract class persons{
    name : string ; 
    constuctor(name : string){
        this.name = name ; 
    }
}


class person extends persons{
    age : number ; 
    constructor(name : string , age : number ){
        super();
        this.age = age ; 
        this.name = name; 
    }
}


