"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
var Customer = /** @class */ (function () {
    function Customer(id, name) {
        this._name = '';
        this._active = false;
        this._id = id;
        this._name = name;
        this.validate();
    }
    Customer.prototype.validate = function () {
        if (this._name.length === 0) {
            throw new Error('Name is required');
        }
        if (this._id.length === 0) {
            throw new Error('Id is required');
        }
    };
    Customer.prototype.activate = function () {
        if (this._address === undefined) {
            throw new Error('Address is mandatory to activate a customer');
        }
    };
    Object.defineProperty(Customer.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "Address", {
        set: function (address) {
            this._address = address;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
exports.default = Customer;
