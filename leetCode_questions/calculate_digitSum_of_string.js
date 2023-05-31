let  s = "11111222223", k = 3

let numbers = Array.from(s);
// console.log(array);

var digitSum = function(s, k) {
    let sum = 0 ; 
    let i = 0 ; 
    let nums = [] ; 

    for(let j=0 ; j<numbers.length ; j++){
        sum += parseInt(numbers[j]);
        if(j >= k-1){
            nums[i] = sum ; 
            sum-= numbers[i] ; 
            i+3 ; 
        }
    }
    console.log(nums);
};


digitSum(s,k)