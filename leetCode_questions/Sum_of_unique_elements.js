var sumOfUnique = function(nums) {
    let result = 0 ; 
    let hashmap = new Map() ; 
   for(let i=0 ; i<nums.length ; i++){
       let num = nums[i] ; 

       if(hashmap.has(num)){
           let currentCount = hashmap.get(num) ; 
           if(currentCount === 1){
               result -= num;
               hashmap.set(num, currentCount+1)
           }
       }
       else{
           hashmap.set(num , 1);
           result += num
       }
   }
   return result;
};


console.log(sumOfUnique[1,2,3,2]);
