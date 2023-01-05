let m = new Map();

m.set(10,100);
m.set("a",true);
m.set('apple',80);

// console.log(m);
// console.log(m.size);
// console.log(m.get("a"));

// for(a of m){
//     console.log(a);
// }

// for(a of m.values()){
//     console.log(a);
// }

// m.delete("a");
// console.log(m);

// m.clear();
// console.log(m);

let secondHashmap = new Map([[1,"first"],[2,"second"],[3,"third"]]);
// secondHashmap.has(10);
console.log(secondHashmap.has(10));
console.log(secondHashmap.get(10));

