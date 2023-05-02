var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var persons = /** @class */ (function () {
    function persons() {
    }
    persons.prototype.constuctor = function (name) {
        this.name = name;
    };
    persons.prototype.display = function () {
        return "Abstraction !!";
    };
    return persons;
}());
var person = /** @class */ (function (_super) {
    __extends(person, _super);
    function person(name, age) {
        var _this = _super.call(this) || this;
        _this.age = age;
        _this.name = name;
        return _this;
    }
    person.prototype.findname = function (name) {
        return "Your name is ".concat(name);
    };
    return person;
}(persons));
var prsn = new person('ARK', 12);
prsn.display()
console.log(prsn.display());
// abstract class Employee {
//     name: string;
//     paymentPerHour: number;
//     constructor(name: string, paymentPerHour: number) {
//         this.name = name;
//         this.paymentPerHour = paymentPerHour;
//     }
//     public abstract calculateSalary(): number;
// }
// class Contractor extends Employee {
//     workingHours: number;
//     constructor(name: string, paymentPerHour: number, workingHours: number) {
//         super(name, paymentPerHour);
//         this.workingHours = workingHours;
//     }
//     calculateSalary(): number {
//         return this.paymentPerHour * this.workingHours;
//     }
// }
// class FullTimeEmployee extends Employee {
//     constructor(name: string, paymentPerHour: number) {
//         super(name, paymentPerHour);
//     }
//     calculateSalary(): number {
//         return this.paymentPerHour * 8;
//     }
// }
// let contractor: Employee;
// let fullTimeEmployee: Employee;
// contractor = new Contractor('Ramesh contractor', 10, 5);
// fullTimeEmployee = new FullTimeEmployee('Ramesh full time employee', 8);
// console.log(contractor.calculateSalary());
// console.log(fullTimeEmployee.calculateSalary());
