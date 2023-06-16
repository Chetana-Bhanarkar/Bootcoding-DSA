"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
var Vehicle = /** @class */ (function () {
    function Vehicle(vehicle) {
        this.vehicle = vehicle;
    }
    Vehicle.prototype.getVehicleName = function () {
        return "vehicle : " + this.vehicle;
    };
    return Vehicle;
}());
exports.Vehicle = Vehicle;
