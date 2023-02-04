// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].

var sortedSquares = function(nums) {
    let sorted = nums.sort();
    let sqrs = [];
    for(let i=0; i<sorted.length; i++){
          sqrs.push(sorted[i]*sorted[i]);
    }

    return sqrs;
};

console.log(sortedSquares([-4,-1,0,3,10]));