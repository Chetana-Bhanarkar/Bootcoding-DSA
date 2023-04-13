var sortPeople = function(names, heights) {
    let temp ; 
    for(let i=0; i<names.length && i< heights.length ; i++){
        for(let j=i+1; j<names.length && j< heights.length ; j++){
            if(heights[i] < heights[j]){
                
                temp = names[i];
                names[i] = names[j];
                names[j] = temp;
            }
        }
    }

    return names ; 
};

console.log(sortPeople(["Alice","Bob","Bob"],[155,185,150]));