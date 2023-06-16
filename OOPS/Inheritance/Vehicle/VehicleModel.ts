import { VehicleBrand } from "./VehicleBrand";

export class VehicleModel extends VehicleBrand{
    modelName : string ; 
    constructor(vehicle : string , brandname : string , modelName : string){
        super(vehicle,brandname) ; 
        this.modelName = modelName ; 
    }

    getModelName(){
        return this.vehicle+" brandname is "+this.brandName+" and modelname is "+this.modelName ; 
    }
}

