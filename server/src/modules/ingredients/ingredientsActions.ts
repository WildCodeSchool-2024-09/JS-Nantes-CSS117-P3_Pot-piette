import type { RequestHandler } from "express";
import ingredientsRepository from "./ingredientsRepository";

const browse: RequestHandler = async (req, res, next) => {
  try {
    const recipes = await ingredientsRepository.readAll();

    res.json(recipes);
  } catch (err) {
    next(err);
  }
};

export default { browse };
