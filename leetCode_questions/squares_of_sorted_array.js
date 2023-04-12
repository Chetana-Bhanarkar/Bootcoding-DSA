

var sortedSquares = function(nums) {
    let squares = []
   for(let i=0; i<nums.length;i++){
        squares.push(nums[i] * nums[i]);
   }
   let temp ; 
   for(let i=0 ; i<squares.length ; i++){
       for(let j=i+1 ; j<squares.length ; j++){
           if(squares[j] < squares[i]){
               temp = squares[j];
               squares[j] = squares[i];
               squares[i] = temp
           }
       }
   }
   return squares;
};

console.log(sortedSquares([-4,-1,0,3,10]));