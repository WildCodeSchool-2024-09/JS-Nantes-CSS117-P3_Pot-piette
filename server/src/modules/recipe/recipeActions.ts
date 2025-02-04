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

const addTitle: RequestHandler = async (req, res, next) => {
  try {
    const insertTitle = await recipeRepository.createTitle(req.body);
    res.status(201).json({ insertTitle });
  } catch (err) {
    next(err);
  }
};

const latest: RequestHandler = async (req, res, next) => {
  try {
    const recipes = await recipeRepository.lastRecipe();

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
    req.body.picture = "/assets/images/omelette.jpg";

    console.warn(req.body);

    const recipeId = await recipeRepository.createRecipe(req.body);

    // For add all the ingredients to this recipe
    const ingredients = req.body.ingredients_list;

    for (const element of ingredients) {
      const ingredientsData = {
        recipe_id: recipeId,
        ingredient_id: element.id,
        measure: element.measure,
        quantity: Number(element.quantity),
      };

      await recipeRepository.addIngredients(ingredientsData);
    }

    // For add our own recipe steps
    const steps = req.body.recipe_steps;

    for (const step of steps) {
      const stepsData = {
        recipe_id: recipeId,
        nb_step: step.nb_step,
        content: step.content,
      };

      await recipeRepository.addSteps(stepsData);
    }

    // For add recipe steps
    const tags = req.body.recipe_tag_list;

    for (const tag of tags) {
      const tagsData = {
        recipe_id: recipeId,
        tag_id: Number(tag.tag_id),
      };

      await recipeRepository.addTag(tagsData);
    }

    if (recipeId && ingredients && steps && tags) {
      res.sendStatus(201);
    } else {
      res.status(422).send("Your recipe doesn't work! Sorry!");
    }
  } catch (err) {
    next(err);
  }
};

export default { browse, read, add, latest, addTitle };
