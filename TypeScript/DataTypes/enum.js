var pens;
(function (pens) {
    pens[pens["dot"] = 0] = "dot";
    pens[pens["gel"] = 1] = "gel";
    pens[pens["luxor"] = 2] = "luxor";
})(pens || (pens = {}));
console.log(pens);
