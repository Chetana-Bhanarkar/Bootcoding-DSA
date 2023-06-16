import { Vehicle } from "./Vehicle";

export class VehicleBrand extends Vehicle{
    brandName : string ;
    constructor(vehicle : string ,brandname : string){
        super(vehicle);
        this.brandName = brandname ; 
    }

    getBrandName(){
        return this.vehicle+ " Brandname : "+ this.brandName ; 
    }
}