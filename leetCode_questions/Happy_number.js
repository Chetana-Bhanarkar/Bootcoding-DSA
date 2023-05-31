var isHappy = function(n) {
    let num = Array.from(String(n) , Number) ; 
    let sum = 0 ; 
    if(num.length >= 1){
        while(sum === 1){
            for(let i=0 ; i<num.length ; i++){
                sum += num[i]*num[i] ; 
            }
            num = sum ; 
        }
    }
    
    let bool = sum === 1 ? true : false ; 

    return bool ;
    
};


console.log(isHappy(19));
