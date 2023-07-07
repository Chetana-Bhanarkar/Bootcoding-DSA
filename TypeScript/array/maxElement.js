// Write a program to find the maximum element in an array.
var findMax = function (arr) {
    var max = arr[0];
    for (var i = 1; i <= arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
};
var array = [10, 5, 7, 20, 15];
var maximum = findMax(array);
console.log("Maximum element:", maximum);
