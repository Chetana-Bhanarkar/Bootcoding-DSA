var add = function (a, b) {
    console.log(typeof a, typeof b);
    return a + b;
};
console.log(add(2, 4));
function test(a) {
    if (a === undefined)
        return undefined;
    return true;
}
console.log(test("test"));
