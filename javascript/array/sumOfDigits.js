
const sumofdigits = (n) => {
     let sum = 0 , rem ;
     while(n != 0 ){
        rem = n%10 ; 
        sum += rem ; 
        n = n/10 ; 
     }
}


console.log(sumOfDigits([23,45,67]));