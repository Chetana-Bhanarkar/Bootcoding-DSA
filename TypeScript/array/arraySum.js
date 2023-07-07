// Write a program to find the sum of all elements in an array.
var arraySum = function (arr) {
    var sum = 0;
    arr.forEach(function (i) {
        sum += i;
    });
    return sum;
};
var numbers = [10, 5, 7, 20, 15];
var sum = arraySum(numbers);
console.log("sum of elements of array :", sum);
