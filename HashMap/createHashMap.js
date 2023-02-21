let a = new Map();
let b = new Map([["apple",80],[2,"second"],[60,5]]);

// for(let element of b){
//     console.log(element);
// }
a.set(10,100);
a.set(20,200);
a.set(30,300);
a.set("apple",1);
a.set("chetana","bhanarkar")

// for(let m of a){
//     console.log(m);
// }

// console.log(a.get(10));
// console.log(a.has(20));
// console.log(a.size);

console.log(b.keys());
console.log(b.values());