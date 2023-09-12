class Singleton {

    private static instance: { name: string; age: number; score: number; };

    public constructor() { }

    createInstance() {
        return { name: 'John', age: 18, score: Math.floor(Math.random() * 100) }
    }

    getInstance(){
        if(!Singleton.instance){
           Singleton.instance = this.createInstance()
        }
        return Singleton.instance;
    }
}

const instance1 = new Singleton() ;
const instance2 = new Singleton() ;


console.log(instance1, instance2);
