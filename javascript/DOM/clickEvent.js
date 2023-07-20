console.log("I am working");

let p = document.querySelector('.para');
let btn = document.querySelector('.btn');

btn.addEventListener("click",()=>{
    p.style.color = "red"
})