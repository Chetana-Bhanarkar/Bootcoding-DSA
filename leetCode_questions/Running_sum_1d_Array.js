var runningSum = function(nums) {
    for(let i=1;i<nums.length;i++){
        nums[i] = nums[i] + nums[i-1]
    }
    return nums
};

console.log(runningSum([3,2,4,1]));