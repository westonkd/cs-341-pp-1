"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ingredientSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    quantity: { type: String, required: true },
});
const mealSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    ingredients: [ingredientSchema],
});
const meal = (0, mongoose_1.model)("Meal", mealSchema);
exports.default = meal;
// Query by value in array: https://kb.objectrocket.com/mongo-db/use-mongoose-to-find-in-an-array-of-objects-1206
