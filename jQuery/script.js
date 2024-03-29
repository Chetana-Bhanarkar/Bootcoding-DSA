
// // if we write or use the file of javascript or cdn of jquery at the bottom then the script file will read only when the document is ready , that's why we not need to write document.ready ;

// $('h1').css('color','red');
// jQuery('button').css('color','blue');


// // but when we attach the file of javascript or cdn of jquery in the head tag then the script file will read without waiting the document to be ready , that's why we need to write the document.ready function.

// //like this ->

// $(document).ready(()=>{
//     $('h1').css('color','red');
// })

// console.log($("h1").css("font-family")); //output : 32px
// console.log($("h1").css("color")); // output : 225,0,0
// console.log($("h1").css("background-color")); // output : 0,0,0


// // here we can add the class and remove the class



// // by using addClass we can add the custom class on element;
// $('h1').addClass('big-title');

// // we can add multiple classes on same element ; 
// $('h1').addClass('big-title margin-around')


// // by using removeClass we can remove the applying class from element;
// $('h1').removeClass('big-title')






// // ----------------------- Manipulate the text-----------------------


// // by using 'text' we can change the content;
// $('h1').text('BYE');

// // by using 'html' we can change the content using tags ; 
// $('h1').html('<em>BYE</em>')

// // using text and tag to change the content ; 
// // it will consider tag as a text ; 

// $('h1').text('<em>BYE</em>') // output :- <em>BYE</em>

// // it will not applying the tag on text 


// ----------------------------------------Event listeners----------------------------------------------


$('input').keypress((event)=>{
    console.log(event);
})


$('input').keypress((event)=>{
    $('h1').text(event.key);
 })


 // another way to use event listener

 $('button').on('click',()=>{
    $('h1').css('color', 'red');
 })

 // add elements 

 $('h1').before("<button>new</button>")
 $('h1').after("<button>new </button>")
 $('h1').append("<button>append </button>")
 $('h1').prepend("<button>prepend  </button>")


 //      
