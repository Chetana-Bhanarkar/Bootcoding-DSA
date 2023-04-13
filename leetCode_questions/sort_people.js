let names = ["IEO","Sgizfdfrims","QTASHKQ","Vk","RPJOFYZUBFSIYp","EPCFFt","VOYGWWNCf","WSpmqvb"]
let heights = [17233,32521,14087,42738,46669,65662,43204,8224]


var sortPeople = function(names, heights) {
    let temp ; 
    for(let i=0; i< heights.length ; i++){
        for(let j=i+1;j< heights.length ; j++){
            if(heights[i] < heights[j]){
                temp = heights[i];
                heights[i] = heights[j];
                heights[j] = temp;

                temp = names[i];
                names[i] = names[j];
                names[j] = temp;
            }
        }
    }

    return names ; 
};

console.log(sortPeople(names,heights));