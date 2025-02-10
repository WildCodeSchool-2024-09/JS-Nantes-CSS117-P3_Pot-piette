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

const edit: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const ingredient = req.body;

    ingredient.id = id;

    const editIngredient = await ingredientsRepository.update(ingredient);

    if (editIngredient) {
      res.sendStatus(204);
    } else {
      res.status(403).send("An error has occurred");
    }
  } catch (err) {
    next(err);
  }
};

export default { browse, add, edit };
