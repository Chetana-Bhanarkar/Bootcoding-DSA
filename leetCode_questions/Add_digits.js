var addDigits = function(n) {
    if(n == 0){
        return 0 ;
    }
    else if(n == 9){
        return n ; 
    }
    else{
        n = n%9 ; 
        return n
    }
    

};

console.log(addDigits(18));