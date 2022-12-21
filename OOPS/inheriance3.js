class Animal{
    constructor(Color){
        this.color = Color;
    };
    getColor(){
        return this.color;
    }
}

class Dog extends Animal{
    constructor(Color,food){
        super();
        this.food = food;
    }

    eating(food){
        console.log(`Eating : ${this.food}`)
    }

    display(){
        this.getColor("black");
        this.eating('bread')
    }
}

let dog = new Dog();
dog.display();




