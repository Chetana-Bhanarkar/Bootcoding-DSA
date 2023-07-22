// syntax Of promise  => 

// let prom = new Promise(function(resolve,reject){
//     if(true){
//         resolve()
//     }
//     else{
//         reject()
//     }
// })


// console.log(prom);

// One Way---------------


let complete = true
let promise = new Promise((resolve,reject)=>{
    if(complete){
        resolve("Fullfiled")
    }
    else{
        reject("reject")
    }
})

console.log(promise);


// Second Way----------------


const prom = (complete) => {
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
        if(complete){
            resolve("Promise resolved")
        }else{
            reject("Promise rejected")
        }
       },3000)
    })
}

prom(true).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error)
});