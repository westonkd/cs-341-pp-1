"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.index = exports.create = void 0;
const meal_1 = __importDefault(require("../models/meal"));
const create = async (req, res, next) => {
    /*
      #swagger.parameters["meal"] = {
          in: "body",
          description: "The meal to create",
          required: true,
          schema: {
            $name: "cookies",
            ingredients: [{name: "Milk", quantity: "1 Cup"}]
          }
      }
     */
    const { name, ingredients } = req.body;
    try {
        const response = await meal_1.default.create({ name, ingredients });
        res.json(response);
    }
    catch (error) {
        next(error);
    }
};
exports.create = create;
const index = async (req, res, next) => {
    const { ingredient } = req.query;
    try {
        const meals = await meal_1.default.find({ "ingredients.name": ingredient });
        res.json(meals);
    }
    catch (error) {
        next(error);
    }
};
exports.index = index;
