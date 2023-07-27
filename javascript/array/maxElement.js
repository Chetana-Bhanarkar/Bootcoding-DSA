

const maxElement = (n) => {
    let maxElem = n[0] ; 
    for(let i=1 ; i<n.length ; i++){
        if(n[i] > maxElem){
            maxElem = n[i] ; 
        }
    }
    return maxElem ; 
}

console.log(maxElement([4,5,2,3,7,6]));