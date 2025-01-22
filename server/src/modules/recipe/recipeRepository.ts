import type { Result, Rows } from "../../../database/client";
import databaseClient from "../../../database/client";
import type { IngredientsRecipeI, RecipeI } from "../../types/recipe/recipe";

class RecipeRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM recipe");

    return rows;
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT recipe.title, recipe.picture, recipe.nb_parts, recipe.time_to_cook, recipe.preparation_time,
        (SELECT JSON_ARRAYAGG(
          JSON_OBJECT(
            'id', ingredient.id,
            'picture', ingredient.picture_ingredient,
            'name', ingredient.name_ingredient,
            'quantity', ingredient_recipe.quantity,
            'measure', ingredient_recipe.measure
          )
        )
          FROM ingredient_recipe
          JOIN ingredient
          ON ingredient.id = ingredient_recipe.ingredient_id
          WHERE ingredient_recipe.recipe_id = recipe.id) AS ingredients_list,
        (SELECT JSON_ARRAYAGG(
          JSON_OBJECT(
            'id', step.id,
            'nb_step', step.nb_step,
            'content', step.content
          )
        )
          FROM step
          WHERE step.recipe_id = recipe.id) AS recipe_steps,
        (SELECT JSON_ARRAYAGG(
          JSON_OBJECT(
            'id', tag.id,
            'tag_name', tag.tag_name
            )
          )
            FROM tag
            JOIN recipe_tag
            ON recipe_tag.tag_id = tag.id
            WHERE recipe_tag.recipe_id = recipe.id
        ) AS recipe_tag_list
      FROM recipe
      WHERE recipe.id = ?
      `,
      [id],
    );

    return rows;
  }

  async createRecipe(recipe: RecipeI) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO recipe (title, picture, is_published, time_to_cook, nb_parts, preparation_time) VALUES (? , ? ,? , ?, ?, ?)",
      [
        recipe.title,
        recipe.picture,
        recipe.is_published,
        recipe.time_to_cook,
        recipe.nb_parts,
        recipe.preparation_time,
      ],
    );

    return result.insertId;
  }

  async addIngredients(recipeIngredients: IngredientsRecipeI) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO ingredient_recipe (recipe_id, ingredient_id, quantity, measure) VALUES (?, ? ,?,? )",
      [
        recipeIngredients.recipe_id,
        recipeIngredients.ingredient_id,
        recipeIngredients.quantity,
        recipeIngredients.measure,
      ],
    );

    return result.insertId;
  }
}

export default new RecipeRepository();
