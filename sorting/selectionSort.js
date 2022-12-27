let array = [8,9,6,3,2];

const selectionSort = (array) => {
    let min = array[0];
    let temp ; 
    for(let i=0 ; i<array.length-1; i++){
        temp = array[i]
        for(let j=i+1 ; j<array.length;j++){

            if(min > array[i]){
                min = array[i];
                
                temp = min;
                min = array[j] ;
                array[j] = temp;
            }
        }
    }
    return min;
};

console.log(selectionSort(array));