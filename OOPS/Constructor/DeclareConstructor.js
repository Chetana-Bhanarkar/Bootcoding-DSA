var person = /** @class */ (function () {
    function person(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    person.prototype.getfullname = function () {
        console.log("my fullname is " + this.firstname + " " + this.lastname + "and my age is" + this.age);
    };
    return person;
}());
var p = new person("chetana", "bhanarkar", 22);
p.getfullname();
