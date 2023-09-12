class Suscriber{
    id:number ;
    name:string ;
    constructor(id:number , name : string){
        this.id = id ; 
        this.name = name ; 
    }

    notify(msg : any){
        console.log(`hey subscribers ${msg}`);
    }
}