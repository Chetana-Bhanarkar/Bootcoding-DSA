// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.

let nums = [1, 2, 3, 2]
// var sumOfUnique = function(nums) {
//     let sum = 0;
//     for(let i=0 ; i<nums.length;i++){
//         for(let j=1;j<=nums.length;j++){
//             if(nums[i] == nums[j]){
//                 break;
//             }
//         }
//         sum += nums[i];

//         }
//         return sum;
// };


let value = [];
var sumOfUnique = function (nums) {
    let sum = 0;
    for (let i = 0; i <= nums; i++){
        for (let j = 1; j<= nums.length; j++) {
            if (nums[i] == nums[j]){
                break;
            }
        }
    }
    return sum
}


console.log(sumOfUnique(nums));