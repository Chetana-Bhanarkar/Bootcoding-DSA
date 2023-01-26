let a = [2,3,4,5,6,7];
let target = 7;

const search = (n , x , left , right) => {
    let add = (left + right)/2;
    let mid = Math.floor(add);
    if(x == n[mid]){
        return mid;
    }

    if(left == right){
        return -1;
    }

    if(x > n[mid]){
        return search(n , x , mid+1 , right)
    }else{
        return search(n , x , left , mid-1 )
    }
};

console.log(search( a , target , a[0] , a.length-1  ));