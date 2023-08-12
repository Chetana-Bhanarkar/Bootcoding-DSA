// S -> Solid principle


class Car{
    
    drive(){
        return "The person can operate the car by driving.";
    }

    engine(){
        return "engine is the main part of car."
    }
}

let a = new Car();
console.log(a.drive());
console.log(a.engine());


class Bottle{

    materialType(){
        return "a bottle has many types like glass, Plastic, brass, etc."
    }

}


let b = new Bottle();
console.log(b.materialType());