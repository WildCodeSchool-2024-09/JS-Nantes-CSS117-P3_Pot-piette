import type { RequestHandler } from "express";
import recipeRepository from "./recipeRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const recipes = await recipeRepository.readAll();

    res.json(recipes);
  } catch (err) {
    next(err);
  }
};

const read: RequestHandler = async (req, res, next) => {
  try {
    const recipeId = Number(req.params.id);
    // const recipe = await recipeRepository.read(recipeId);
  } catch (err) {
    next(err);
  }
};

export default { browse, read };
