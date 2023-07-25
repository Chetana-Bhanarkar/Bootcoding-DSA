console.log("I am working");

let par = document.querySelectorAll('.para');
let btnnn = document.querySelector('.btn');

btnnn.addEventListener("click",()=>{
    par.style.backgroundColor = "red";
})