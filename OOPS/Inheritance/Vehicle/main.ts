import { Vehicle } from "./Vehicle";
import { VehicleBrand } from "./VehicleBrand";
import { VehicleModel } from "./VehicleModel";

let v = new Vehicle('car')
let b = new VehicleBrand('car' , 'BMW')
let m = new VehicleModel("car" , "BMW" , "X3");


console.log(v.getVehicleName());
console.log(b.getBrandName());
console.log(m.getModelName());


