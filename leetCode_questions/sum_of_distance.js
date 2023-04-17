

var distance = function(nums) {
    let numbers = [] ; 
    for(let i=0 ; i<nums.length ; i++){
        let sum = 0 ; 
        for(let j=0 ; j< nums.length ; j++){
            if((nums[i] === nums[j]) && (nums[i] != nums[j])){
                numbers[i].push(Math.abs(nums[i] - nums[j])) ;
            }
        }
        // numbers.push(sum);
    }
    return numbers;
};

console.log(distance([1,3,1,1,2]));