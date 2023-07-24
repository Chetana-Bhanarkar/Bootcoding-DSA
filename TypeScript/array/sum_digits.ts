

const sum_digit = (n):number => {
    let sum = 0 ;
    let rem: number ; 
    while(n!=0){
        rem = n%10 ; 
        sum += rem 
        n = Math.floor(n/10) ; 
    }
    return sum
}


console.log(sum_digit(1234));
