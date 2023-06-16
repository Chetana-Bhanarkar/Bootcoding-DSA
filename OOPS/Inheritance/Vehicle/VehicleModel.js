"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehicleModel = void 0;
var VehicleBrand_1 = require("./VehicleBrand");
var VehicleModel = /** @class */ (function (_super) {
    __extends(VehicleModel, _super);
    function VehicleModel(vehicle, brandname, modelName) {
        var _this = _super.call(this, vehicle, brandname) || this;
        _this.modelName = modelName;
        return _this;
    }
    VehicleModel.prototype.getModelName = function () {
        return this.vehicle + " brandname is " + this.brandName + " and modelname is " + this.modelName;
    };
    return VehicleModel;
}(VehicleBrand_1.VehicleBrand));
exports.VehicleModel = VehicleModel;
