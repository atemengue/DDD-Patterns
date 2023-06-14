"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
var Address = /** @class */ (function () {
    function Address(id, street, number, zip, city, country) {
        this._street = '';
        this._number = 0;
        this._zip = '';
        this._city = '';
        this._country = '';
        this._active = false;
        this._id = id;
        this._street = street;
        this._number = number;
        this._zip = zip;
        this._country = country;
        this._city = city;
        this.validate();
    }
    Address.prototype.validate = function () {
        if (this._street.length === 0) {
            throw new Error('Street is required');
        }
        if (this._number) {
            throw new Error('Number is required');
        }
        if (this._city.length === 0) {
            throw new Error('City is required');
        }
        if (this._country.length === 0) {
            throw new Error('Country is required');
        }
    };
    return Address;
}());
exports.default = Address;
