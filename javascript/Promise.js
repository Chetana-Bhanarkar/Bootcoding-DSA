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
    return new Promise((res,rej)=>{
        if(complete){
            res("Promise resolved")
        }else{
            rej("Promise rejected")
        }
    })
}

console.log(prom(false));