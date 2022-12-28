let array = [100,80,90,70,60,50,40,20,30,10];

const bubbleSort = (a) =>{
    for(let i=0;i<a.length;i++){
        lowest = i; //100
        for(let j=i+1;j<a.length;j++){
            if(a[j]<a[lowest]){
                lowest = j;
            }
        }
        if(lowest != i){
            [a[i],a[lowest]] = [a[lowest],a[i]];
        }
    }
    return a;
}

console.log(bubbleSort(array));