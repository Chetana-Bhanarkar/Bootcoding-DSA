// Insertion sort



let array = [2, 4, 1, 8, 3, 0, 6, 9];

const insertionSort = (a) => {
    for (let i = 1; i < a.length; i++) {
        let currentValue = a[i];
        let j;
        for (j = i - 1; j >= 0 && a[j] > currentValue; j--) {
            a[j + 1] = a[j]
        }
        a[j + 1] = currentValue;
    }
    return a;
}

console.log(insertionSort(array));