// Write a program to calculate the average of elements in an array
var avgOfElements = function (arr) {
    var sum = 0;
    arr.forEach(function (i) {
        sum += i;
    });
    return sum / arr.length;
};
console.log(avgOfElements([10, 6, 4.2, 2, 8]));
