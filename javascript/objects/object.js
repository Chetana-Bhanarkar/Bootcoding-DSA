let person = {
    name : "john",
    age : 22,
    hobbies : ["sleeping","eating","travelling"]
}



for(let hob in person.hobbies){
    console.log(person.hobbies[hob]);
}


person.gender = "male" ; 
console.log(person);
console.log(person.name);
console.log(person["name"]);


// how to iterate objects




person["gender"] = "male"



for(let key in person){
    console.log(person.key);
}
let key = "email" ; 
person[key]  = "e@gmail.com"

console.log(person);

for(let key in person){
        console.log(`${key} : ${person[key]}`);
}






