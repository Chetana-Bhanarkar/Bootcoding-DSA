let array = [1,0,3];
var missingNumber = function(nums) {
    let sum = 0, total = 0
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i]
        total += i + 1
    }
    return total - sum
};

console.log(missingNumber(array));