import { Daughter } from "./Daughter";
import { Mother } from "./Mother";
import { Wife } from "./Wife";

let daughter = new Daughter("Stephen" , "Paloma");
console.log(daughter.about());
;

let wife = new Wife("Devin");
console.log(wife.about());


let mother = new Mother('Carmen','Steffan') ; 
console.log(mother.about());
