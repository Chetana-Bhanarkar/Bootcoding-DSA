// O -> Open Closed Principle

// Def :- Open for extension Closed for modification. 

class Shape{
    area(){
        throw new Error("This method should be overridden by subclasses");
    }
}

class Circle extends Shape{
     radius ; 
     constructor(radius){
        super() ; 
        this.radius = radius ; 
     }

     area(){
        return `Area of circle is ${Math.PI * this.radius * this.radius}` ; 
     }
}

class Rectangle extends Shape{
    width;
    height;
    constructor(height , width){
        super()
       this.width = width;
       this.height = height;
    }

    area(){
        return `Area of Rectangle is ${this.height*this.width}`
    }
}

let c = new Circle(5);
console.log(c.area());

let r = new Rectangle(3,6);
console.log(r.area());