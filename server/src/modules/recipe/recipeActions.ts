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

// Action GET for the search Bar
const search: RequestHandler = async (req, res, next) => {
  const { query } = req.query;

  if (!query || typeof query !== "string") {
    res
      .status(400)
      .json({ error: 'Le paramètre de recherche "query" est requis.' });
    return;
  }
  try {
    const recipes = await recipeRepository.searchRecipes(query);
    res.status(200).json({ recipes });
  } catch (err) {
    next(err);
  }
};

// Action POST for add a new recipe
const add: RequestHandler = async (req, res, next) => {
  try {
    const recipeData = await recipeRepository.createRecipe(req.body);

    // For add all the ingredients to this recipe
    const ingredients = req.body.ingredients_list;

    for (const element of ingredients) {
      const ingredientsData = {
        recipe_id: recipeData,
        ingredient_id: element.id,
        measure: element.measure,
        quantity: element.quantity,
      };

      await recipeRepository.addIngredients(ingredientsData);
    }

    // For add our own recipe steps
    const steps = req.body.recipe_steps;

    for (const step of steps) {
      const stepsData = {
        recipe_id: recipeData,
        nb_step: step.nb_step,
        content: step.content,
      };

      await recipeRepository.addSteps(stepsData);
    }

    // For add recipe steps
    const tags = req.body.recipe_tag_list;

    for (const tag of tags) {
      const tagsData = {
        recipe_id: recipeData,
        tag_id: tag.tag_id,
      };

      await recipeRepository.addTag(tagsData);
    }

    if (recipeData && ingredients && steps && tags) {
      res.status(201).send(`New recipe ${req.body.title} added!`);
    } else {
      res.status(422).send("Your recipe doesn't work! Sorry!");
    }
  } catch (err) {
    next(err);
  }
};

export default { browse, read, add, latest, search };
