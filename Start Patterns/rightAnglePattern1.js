var starPattern = function (n) {
    var string = "";
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= i; j++) {
            string += "*";
        }
        string += "";
    }
    console.log(string);
};
starPattern(7);
