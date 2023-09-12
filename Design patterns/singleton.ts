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