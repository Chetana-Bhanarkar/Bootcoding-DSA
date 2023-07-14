const starPattern = (n : number):any => {
    let string = "" ; 
    for(let i= 1 ; i<=n ; i++){
        for(let j=1 ; j<=i ; j++){
            string += "*";
        }
        string += "" ; 
    }
    console.log(string)
}

starPattern(7);
