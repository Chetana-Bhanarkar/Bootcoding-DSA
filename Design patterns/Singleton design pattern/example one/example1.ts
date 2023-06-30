class Singleton{
    private static singleton: Singleton;
    private logger : string[] = []; 
    constructor(){}

    public static getSingleton(): Singleton{
        if(!Singleton.singleton){
            Singleton.singleton = new Singleton()
        }
        return Singleton.singleton;
    }


    public pushLogger(data:string): void{
        this.logger.push(data);
    }

    public getLogger() : string[]{
        return this.logger
    }
}

let singleOne = Singleton.getSingleton() ;
let singleTwo = Singleton.getSingleton() ;


if(singleOne === singleTwo){
    console.log("Our singleton is working");    
}

singleOne.pushLogger("First entry of logger");
singleTwo.pushLogger("Second entry of logger");
 


console.log('Logger info : ' + singleOne.getLogger());

