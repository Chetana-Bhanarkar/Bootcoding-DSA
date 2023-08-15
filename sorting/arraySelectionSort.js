//Selection sort

const array = [8,9,6,3,2];

const selectionSort = (a) => {
    for(let i=0; i<a.length; i++){
        let lowest = i;
        for(let j=i+1 ; j<a.length ; j++){
            if(a[j]<a[i]){
                lowest = j;
            }
            if(lowest != i){
                [a[j],a[i]] = [a[i],a[j]]
            }
        }
    }
    return a;
}

console.log(selectionSort(array));