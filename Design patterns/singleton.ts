class Singleton {

    private static instance: Singleton | null = null

    public constructor() { }

    

    public static getInstance():Singleton{
        if(Singleton.instance === null){
           Singleton.instance = new Singleton()
        }
        return Singleton.instance;
    }

    createInstance() {
        return { name: 'John', age: 18, score: Math.floor(Math.random() * 100) }
    }
}

const instance1 = new Singleton() ;
const instance2 = new Singleton() ;


console.log(instance1, instance2);


console.log(instance1.createInstance());
console.log(instance2.createInstance());

