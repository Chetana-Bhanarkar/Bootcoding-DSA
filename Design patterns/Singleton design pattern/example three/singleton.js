var Singleton = (function(){
    var instance;

    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }
})();

