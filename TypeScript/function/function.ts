type sum = number;

const add = (a:sum , b:sum):sum=> {
    console.log(typeof a , typeof b);
    return a+b;
}

console.log(add(2,4));

