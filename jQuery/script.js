
// if we write or use the file of javascript or cdn of jquery then the script file will read only when the document is ready , that's why we not need to write document.ready ;

$('h1').css('color','red');
jQuery('button').css('color','blue');


// but when we attach the file of javascript or cdn of jquery then the script file will read without waiting the document to be ready , that's why we need to write the document.ready function.

$(document).ready(()=>{
    $('h1').css('color','red');
})


//like that

