const max_sum_of_subArray = (array , k) => {
        let start = 0 ;
        let maxSum = 0 ; 
        let sum = 0 ; 
        
        for(let end = 0; end < array.length ; end++){
            sum += array[end];

            if(end >= k-1){
                maxSum = Math.max(sum , maxSum);
                sum  -= array[start];
                start++
            }
        }
        return maxSum ; 

}


console.log(max_sum_of_subArray([2,1,5,1,3,2] , 3));