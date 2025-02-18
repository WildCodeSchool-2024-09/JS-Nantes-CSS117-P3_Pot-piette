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
    const recipeId = await recipeRepository.createRecipe(req.body);
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

const deleteRecipe: RequestHandler = async (req, res, next) => {
  const id = Number(req.params.id);
  try {
    const deleteRecipe = await recipeRepository.destroy(id);
    if (deleteRecipe) {
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  } catch (err) {
    next(err);
  }
};

const update: RequestHandler = async (req, res, next) => {
  const id = Number(req.params.id);
  const recipe = req.body;
  recipe.id = id;
  try {
    const updateRecipe = await recipeRepository.update(recipe);
    if (updateRecipe) {
      res.sendStatus(201);
    } else {
      res.sendStatus(400);
    }
  } catch (err) {
    next(err);
  }
};

const imageUpload: RequestHandler = (req, res) => {
  if (req?.file) {
    res.status(200).json({ filename: req.file.filename });
    return;
  }

  res.status(400).send("Problème lors de l'insertion de l'image");
};

export default {
  browse,
  read,
  add,
  latest,
  addTitle,
  search,
  deleteRecipe,
  imageUpload,
  update,
};
