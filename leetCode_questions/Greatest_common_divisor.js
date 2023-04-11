// 1979. Find Greatest Common Divisor of Array


var findGCD = function(nums){
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            let temp;
            if(nums[i]>nums[j]){
                temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp; 
            }
        }    
    }
    let gcd;
    let smallest_num = nums[0];
    let largest_num = nums[nums.length-1];
    for(let i=0;i<=smallest_num && i<=largest_num;i++){
        if(smallest_num % i == 0 && largest_num % i == 0){
         gcd = i;
        }
    }
    return gcd ;
}


console.log(findGCD([3,3]));