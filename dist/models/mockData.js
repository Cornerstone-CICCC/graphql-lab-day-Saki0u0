"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orders = exports.products = exports.customers = void 0;
exports.customers = [
    { id: "1", name: "John Smith", email: "john@mail.com" },
    { id: "2", name: "Jane Done", email: "jane@mail.com" },
    { id: "3", name: "Joe Moe", email: "joe@mail.com" },
];
exports.products = [
    { id: "1", productName: "iPhone 30 Max", price: 199.0 },
    { id: "2", productName: "MacBook M15 Air", price: 249.0 },
];
exports.orders = [
    { id: "1", customerId: "1", productIds: ["2"] },
    { id: "2", customerId: "2", productIds: ["1", "2"] },
    { id: "3", customerId: "3", productIds: ["1"] },
];
