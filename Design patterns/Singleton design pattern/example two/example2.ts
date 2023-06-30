class Singleton{
    public static instance : Singleton ; 

    constructor(){} ; 

    public static getSingleton(): Singleton{
        if(!Singleton.instance){
            Singleton.instance = new Singleton() ; 
        }
        return Singleton.instance ; 
    }

    public print(){
        console.log('print singleton');
        
    }
}


let s1 = Singleton.getSingleton();
let s2 = Singleton.getSingleton();

if(s1 === s2){
    console.log("Singleton works");   
}

s1.print();