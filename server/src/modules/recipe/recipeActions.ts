import type { RequestHandler } from "express";
import recipeRepository from "./recipeRepository";

// Action GET for get all recipes
const browse: RequestHandler = async (req, res, next) => {
  try {
    const recipes = await recipeRepository.readAll();

    res.json(recipes);
  } catch (err) {
    next(err);
  }
};

//Action GET for get just one recipe with dynamic id
const read: RequestHandler = async (req, res, next) => {
  try {
    const recipeId = Number(req.params.id);
    const recipe = await recipeRepository.read(recipeId);

    if (recipe === null) {
      res.sendStatus(404);
    } else {
      res.send(recipe);
    }
  } catch (err) {
    next(err);
  }
};

// Action POST for add a new recipe
const add: RequestHandler = async (req, res, next) => {
  try {
    const recipeData = await recipeRepository.createRecipe(req.body);

    const ingredients = req.body.ingredients_list;

    for (const element of ingredients) {
      const ingredientsData = {
        recipe_id: recipeData,
        ingredient_id: element.id,
        measure: element.measure,
        quantity: element.quantity,
      };

      console.warn(ingredientsData);

      await recipeRepository.addIngredients(ingredientsData);
    }

    if (recipeData && ingredients) {
      res.status(201).send(`New recipe ${req.body.title} added!`);
    } else {
      res.status(422).send("Your recipe doesn't work! Sorry!");
    }
  } catch (err) {
    next(err);
  }
};

export default { browse, read, add };
