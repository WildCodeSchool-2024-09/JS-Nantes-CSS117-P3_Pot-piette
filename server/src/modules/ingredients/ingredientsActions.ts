import type { RequestHandler } from "express";
import ingredientsRepository from "./ingredientsRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const ingredients = await ingredientsRepository.readAll();

    res.json(ingredients);
  } catch (err) {
    next(err);
  }
};

const add: RequestHandler = async (req, res, next) => {
  try {
    const addIngredient = await ingredientsRepository.create(req.body);

    if (addIngredient) {
      res
        .status(201)
        .send(
          `The ingredient ${req.body.name_ingredient} has been added succesfully`,
        );
    } else {
      res.status(404).send("An error has occured");
    }
  } catch (err) {
    console.error(err);
  }
};

export default { browse, add };
