

const bubbleSort = (a) => {
    for (let i = a.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
            }
        }
    }
    return a;
}
console.log(bubbleSort([100, 80, 90, 70, 60, 50, 40, 20, 30, 10]))