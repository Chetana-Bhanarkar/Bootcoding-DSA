// let array = [7,3,4,8,5,9] //output : [3,4,5,7,8,9]


let array = [4,3,2,5,6,7,1] //output : [1,2,3,4,5,6,7]

const bubbleSort = (a) => {
    for(let i=a.length;i>0;i--){
        for(let j=0 ; j<i-1 ; j++){
            if(a[j] > a[j+1]){
                [a[j],a[j+1]] = [a[j+1],a[j]];
            }
        }
    }
    return a;
}

console.log(bubbleSort(array));