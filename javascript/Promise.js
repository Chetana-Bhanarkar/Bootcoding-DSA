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


let complete = true
let prom = new Promise((resolve,reject)=>{
    if(complete){
        resolve("Fullfiled")
    }
    else{
        reject("reject")
    }
})

console.log(prom);



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