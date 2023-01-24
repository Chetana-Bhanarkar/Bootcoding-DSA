// Input: nums = [1,15,6,3]
// Output: 9
// Explanation: 
// The element sum of nums is 1 + 15 + 6 + 3 = 25.
// The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
// The absolute difference between the element sum and digit sum is |25 - 16| = 9.

var differenceOfSum = function (nums) {
    let elementSum = 0;
    let digitSum = 0;

    nums.forEach(num => {
        elementSum += num
        let digits = Array.from(String(num))
        if (digits.length > 1) {
            digits.forEach(digit => digitSum += Number(digit))
        } else {
            digitSum += Number(digits)
        }
    })

    return Math.abs(elementSum - digitSum);
};


console.log(differenceOfSum([ 1, 15, 6, 3 ]));
