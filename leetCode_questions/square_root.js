function sqrRoot(n){
    for(let i=1 ; i*i<=n ; i++){
        if(i*i == n){
            return i ; 
        }
    }
}

console.log(sqrRoot(81));