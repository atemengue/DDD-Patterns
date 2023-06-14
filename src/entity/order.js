"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
var Order = /** @class */ (function () {
    function Order(id, customerId, items) {
        this._id = id;
        this._customerId = customerId;
        this._items = items;
    }
    return Order;
}());
exports.default = Order;
