var Singleton = /** @class */ (function () {
    function Singleton() {
        this.logger = [];
    }
    Singleton.getSingleton = function () {
        if (!Singleton.singleton) {
            Singleton.singleton = new Singleton();
        }
        return Singleton.singleton;
    };
    Singleton.prototype.pushLogger = function (data) {
        this.logger.push(data);
    };
    Singleton.prototype.getLogger = function () {
        return this.logger;
    };
    return Singleton;
}());
var singleOne = Singleton.getSingleton();
var singleTwo = Singleton.getSingleton();
if (singleOne === singleTwo) {
    console.log("Our singleton is working");
}
singleOne.pushLogger("First entry of logger");
singleTwo.pushLogger("Second entry of logger");
console.log('Logger info : ' + singleOne.getLogger());
