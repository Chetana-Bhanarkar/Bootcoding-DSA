// Write a program to calculate the average of elements in an array

const avgOfElements = (arr:number[]):number => {
    let sum = 0 ;
    arr.forEach(i => {
        sum += i ; 
    })

    return sum/arr.length ; 
 }

 console.log(avgOfElements([10,6,4.2,2,8]));