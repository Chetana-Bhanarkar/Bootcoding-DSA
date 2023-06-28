const primeNum = (n:number):any => {
    for(let i = 2 ; i< n ; i++){
        if(n%i == 0){
            return n+ " its not a prime number";   
        }
        return n+ " its a prime number";       
    }
}

console.log(primeNum(20));
