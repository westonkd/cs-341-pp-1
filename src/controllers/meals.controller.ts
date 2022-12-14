import { Request, Response, NextFunction } from "express";
import Meal from "../models/meal";

const create = async (req: Request, res: Response, next: NextFunction) => {
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
    const response = await Meal.create({ name, ingredients });
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const index = async (req: Request, res: Response, next: NextFunction) => {
  const { ingredient } = req.query;

  try {
    const meals = await Meal.find({ "ingredients.name": ingredient });
    res.json(meals);
  } catch (error) {
    next(error);
  }
};

export { create, index };
