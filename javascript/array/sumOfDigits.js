
const sumofdigits = (n) => {
     let sum = 0 , rem ;
     while(n != 0 ){
        rem = n%10 ; 
        sum += rem ; 
        n = Math.floor(n/10) ; 
     }

     return sum ; 
}




console.log(sumofdigits([1234]));