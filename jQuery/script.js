
// if we write or use the file of javascript or cdn of jquery at the bottom then the script file will read only when the document is ready , that's why we not need to write document.ready ;

$('h1').css('color','red');
jQuery('button').css('color','blue');


// but when we attach the file of javascript or cdn of jquery in the head tag then the script file will read without waiting the document to be ready , that's why we need to write the document.ready function.

//like this ->

// $(document).ready(()=>{
//     $('h1').css('color','red');
// })


console.log($("h1").css("font-size")); //output : 32px
console.log($("h1").css("color")); // output : 225,0,0
console.log($("h1").css("background-color")); // output : 0,0,0
 


