var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    ;
    Singleton.getSingleton = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    Singleton.prototype.print = function () {
        console.log('print singleton');
    };
    return Singleton;
}());
var s1 = Singleton.getSingleton();
var s2 = Singleton.getSingleton();
if (s1 === s2) {
    console.log("Singleton works");
}
s1.print();
