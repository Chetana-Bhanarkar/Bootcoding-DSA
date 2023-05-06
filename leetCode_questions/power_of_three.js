var isPowerOfThree = function(n) {
    for(let i=2 ; i<n.length/2 ; i++){
        if(Math.pow(3,i) == n){
            return true ; 
        }
        // return false ; 
    }
};


console.log(isPowerOfThree(27));