var differenceOfSum = function(nums) {
    let elementSum = 0;
    let digitSum = 0;

    for(let i=0 ; i<nums.length; i++){
        elementSum += nums[i];
    }
    let rem ;  
    for(let i=0;i<nums.length ;i++){
        let num =  nums[i]  ; 
        while(num != 0){
            rem = num% 10 ; 
            digitSum += rem ; 
            num = Math.floor(num/10) ; 
        }num++
    }

    return Math.abs(elementSum - digitSum) ; 

};

console.log(differenceOfSum([1,15,6,3]));