// var getSum = function(a, b) {
//     while (b !== 0) {
//         const carry = a & b;
//         a ^= b;
//         b = carry << 1;
//         if (b === 0 && carry === 0) break;
//     }
//     return a;
// };



var getSum = function(a, b) {
    let carry;
    
    while(b) {
        carry = a & b;
        a ^= b;
        b = carry << 1;
    }
    
    return a;
};
    console.log(getSum(9,4));