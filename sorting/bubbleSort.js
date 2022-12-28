let array = [7,3,4,8,5,9] //output : [3,4,5,7,8,9]

const bubbleSort = (a) => {
    for(let i=0;i<a.length;i++){
        lowest = i;
        for(let j=i+1;j<a.length;j++){
            if(a[j]<a[lowest]){
                lowest = j;
            }
        }   
        if(lowest != i){
            [a[i],a[lowest]] = [a[lowest],a[i]]
        }
    }
    return a;
}

console.log(bubbleSort(array));