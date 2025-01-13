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

export default { browse };