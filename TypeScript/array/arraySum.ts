// Write a program to find the sum of all elements in an array.


const arraySum = (arr : number[]):number => {
    let sum = 0 ; 
    arr.forEach(i => {
        sum += i ; 
    })

    return sum ; 
}

const numbers = [10, 5, 7, 20, 15];
let sum = arraySum(numbers) ; 
console.log("sum of elements of array :",sum);



