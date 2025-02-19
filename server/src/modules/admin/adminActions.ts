import type { RequestHandler } from "express";
import adminRepository from "./adminRepository";

const browseRecipes: RequestHandler = async (req, res) => {
  try {
    const recipesPending = await adminRepository.readPending();

    if (recipesPending) {
      res.json(recipesPending);
    } else {
      res.sendStatus(500);
    }
  } catch (err) {
    console.error(err);
  }
};

const countRecipes: RequestHandler = async (req, res) => {
  try {
    const recipes = await adminRepository.countAll("recipe");

    if (recipes) {
      res.json(recipes.recipes_nb);
    } else {
      res.sendStatus(500);
    }
  } catch (err) {
    console.error(err);
  }
};

const countPending: RequestHandler = async (req, res) => {
  try {
    const countPr = await adminRepository.count("recipe", 0);

    if (countPr) {
      res.json(countPr.unpublished_nb);
    } else {
      res.sendStatus(500);
    }
  } catch (err) {
    console.error(err);
  }
};

export default { browseRecipes, countPending, countRecipes };
