export class Vehicle{
    vehicle : string ; 
    constructor(vehicle : string){
        this.vehicle = vehicle ; 
    }

    getVehicleName(){
        return "vehicle : "+this.vehicle ; 
    }
}