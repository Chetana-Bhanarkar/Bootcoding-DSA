let nums = [1,3,-1,-3,5,3,6,7]

var maxSlidingWindow = function(nums, k) {
    let start = 0 ; 
    let Elements = [] ; 
    let maxSumArray = 0 ;

    for(let end = 0 ; end < nums.length ; end++){
        let MaxElements =  0 ;
        if(end < k-1){
            // maxSumArray  = Math.max(sum, maxSumArray) ; 
            // sum -= nums[start] ; 
            // start++ 
            if(nums[end] > MaxElements){
                MaxElements = nums[end];
            }
        }
        else{
            
        }
    }
    return maxSumArray ; 
};

console.log(maxSlidingWindow(nums , 3));