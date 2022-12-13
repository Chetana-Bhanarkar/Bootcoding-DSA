
class Animal {
    constructor(name) {
        this.name = name;
    }
    eats() {
        console.log((this.name + " eat food"));
    }
}

class Aligator extends Animal {
    eats() {
        super.eats();
        console.log(this.name + " eat fishes");
    }
}

let animal = new Animal('Dog');
animal.eats();
