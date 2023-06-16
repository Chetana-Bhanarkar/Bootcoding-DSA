class multiplication{
    constructor(private a: number , private b: number){}
    multiply():number{
        return this.a * this.b ; 
    }
}



let m = new multiplication(10,20) ; 
let mul = m.multiply();
console.log(mul);
