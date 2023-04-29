var isPerfectSquare = function(num) {
    let root = Math.sqrt(num) ; 
    let res = Math.floor( root) ; 
    let result = res * res == num ? true : false ; 
    return result ; 
 };