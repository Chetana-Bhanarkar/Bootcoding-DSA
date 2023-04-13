

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
    };
    let result1 =  nums[nums.length-1] * nums[nums.length-2] * nums[nums.length-3];  
    let result2 =  nums[0] * nums[1] * nums[nums.length-1];  

    return Math.max(result1,result2)
}  
console.log(maximumProduct([-100,-98,-1,2,3,4 ]));