// Write a program to find the maximum element in an array.


const findMax = (arr : number[]):number =>{
    let max = arr[0] ; 
    for(let i = 1 ; i <= arr.length ; i++){
        if(max < arr[i]){
            max = arr[i]
        }
    }

    return max ; 
}



const array = [10, 5, 7, 20, 15];
const maximum = findMax(array);
console.log("Maximum element:", maximum);
