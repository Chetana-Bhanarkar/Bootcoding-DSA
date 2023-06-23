class animal{
    constructor(){
       console.log('animal constructor call.. ');
       
    }

}

class dog extends animal{
    food: string;
    breed: string;

    constructor(food:string , breed:string){
        super() ; 
        this.food = food ; 
        this.breed = breed ; 
    }

    getDog(){
        console.log(this.food , this.breed);
        
    };
    
}


let d = new dog("abc","xyz") ; 

// d.getDog();

