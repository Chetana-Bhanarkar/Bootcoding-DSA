var sortedArray = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            return "not a sorted array";
        }
    }
    return "sorted array in ascending order";
};
console.log(sortedArray([1, 2, 4, 5]));
