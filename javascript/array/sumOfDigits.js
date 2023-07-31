
const sumofdigits = (n) => {
     let sum = 0 , rem ;
     while(n != 0 ){
        rem = n%10 ; 
        sum += rem ; 
        n = Math.floor(n/10) ; 
     }

     return sum ; 
}

const getElement = (array) => {
    let resultArray = [] , result ; 
    for(let i=0; i<array.length ; i++){
        result = sumofdigits(array[i]);
        resultArray.push(result)
    }
    return resultArray ; 
}


console.log(getElement([123,456,345]));

// console.log(sumofdigits(123));