

var maximumProduct = function(nums) {
    let temp ; 
    let sort = [] ; 
    for(let i=0 ; i<nums.length;i++){
        for(let j=i+1 ; j< nums.length ; j++){
            if(nums[i]>nums[j]){
                temp = nums[i];
                nums[i] = nums[j]
                nums[j] = temp;
            }
        }
    }

    return nums[nums.length-1] * nums[nums.length-2] * nums[nums.length-3];    
};
console.log(maximumProduct([ 10, 3, 5, 6, 20 ]));