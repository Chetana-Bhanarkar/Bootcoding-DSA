nums = [1,2], k = 1
// output  : [2,1]

// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]


var rotate = function (nums, k) {
    let n = nums.length - k;
    if(k >= nums.length || k == 0 ){
        return nums ; 
    }
    // if(k == nums.length || k == 1){
    //     return nums.reverse()
    // }
    let array = [];
    if (k < nums.length) {
        for (let i = n - 1; i <= nums.length; i++) {
            let m = nums.pop();
            array.push(m);
        }
        for (let i = 0; i < array.length; i++) {
            nums.unshift(array[i]);
        }
        return nums;
    }
};


console.log(rotate(nums, k));


