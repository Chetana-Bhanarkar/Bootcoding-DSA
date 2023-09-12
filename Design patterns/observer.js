// class Youtube{
//     subscription = [] ;
//     subscriber: never;
var Youtube = /** @class */ (function () {
    function Youtube() {
        this.observers = [];
    }
    Youtube.prototype.subscribe = function (observer) {
        this.observers.push(observer);
    };
    Youtube.prototype.unsubscribe = function (observer) {
        this.observers = this.observers.filter(function (obs) { return obs !== observer; });
    };
    Youtube.prototype.notify = function (msg) {
        this.observers.forEach(function (observer) {
            observer.update(msg);
        });
    };
    return Youtube;
}());
var SubscriberA = /** @class */ (function () {
    function SubscriberA() {
    }
    SubscriberA.prototype.update = function (msg) {
        console.log('SubscriberA ', msg);
    };
    return SubscriberA;
}());
var SubscriberB = /** @class */ (function () {
    function SubscriberB() {
    }
    SubscriberB.prototype.update = function (msg) {
        console.log('SubscriberB received update with msg:', msg);
    };
    return SubscriberB;
}());
var youtube = new Youtube();
var subA = new SubscriberA();
var subB = new SubscriberB();
youtube.subscribe(subA);
youtube.subscribe(subB);
youtube.notify('Video has been uploaded');
youtube.unsubscribe(subA);
youtube.notify('list of upcoming videos');
