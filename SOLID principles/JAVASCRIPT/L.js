// L -> Liskov Substitution Principle

// Def :- If class B is a subtype of A, then we should be able to replace the object of A with B , without breaking the behaviour of program. 

    // SubClass should extends the capability of parent class without narrow it down. 



class Bird{
    fly(){
        console.log("Bird is flying");
    }
}

class Parrot extends Bird{
    fly(){
        console.log("Parrot is flying");
    }
}

class Penguine extends Bird{
    fly(){
        throw new Error("penguine cannot fly...");
    }
}

const parrot = new Parrot();
const penguine = new Penguine()

parrot.fly()
penguine.fly()