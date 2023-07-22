
let p = document.querySelector('.mouse')

let btn = document.querySelector('.btnn');

console.log('print');
btn.addEventListener("mouseenter",()=>{
    p.innerHTML = "bye"
})

btn.addEventListener("mouseout",()=>{
    p.innerHTML = "hello"
})

