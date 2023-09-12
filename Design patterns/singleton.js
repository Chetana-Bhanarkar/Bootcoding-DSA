var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.prototype.createInstance = function () {
        return { name: 'John', age: 18, score: Math.floor(Math.random() * 100) };
    };
    Singleton.prototype.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = this.createInstance();
        }
        return Singleton.instance;
    };
    return Singleton;
}());
var instance1 = new Singleton();
var instance2 = new Singleton();
console.log(instance1.getInstance(), instance2.getInstance());
