var reverseArray = function (arr) {
    var reverseNums = [];
    arr.reverse().forEach(function (num) {
        reverseNums.push(num);
    });
    return reverseNums;
};
console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));
