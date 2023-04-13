var smallerNumbersThanCurrent = function(nums) {
    let n = [];
    for(let i=0;i<nums.length;i++){
        let count = 0;
        for(let j=0;j<nums.length;j++){
            if(nums[i] > nums[j]){
                count++
            }
        }
        n.push(count);
    }

    return n ; 
};

console.log(smallerNumbersThanCurrent([8,1,2,2,3]));