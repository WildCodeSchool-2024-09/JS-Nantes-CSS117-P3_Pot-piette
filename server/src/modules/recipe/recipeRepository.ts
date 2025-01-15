import type { Rows } from "../../../database/client";
import databaseClient from "../../../database/client";

class RecipeRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM recipe");

    return rows;
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT recipe.title, recipe.picture, recipe.nb_parts,
        (SELECT JSON_ARRAYAGG(
          JSON_OBJECT(
            'name', ingredient.name_ingredient,
            'quantity', ingredient_recipe.quantity,
            'measure', ingredient_recipe.measure
          )
        )
          FROM ingredient_recipe
          JOIN ingredient
          ON ingredient.id = ingredient_recipe.ingredient_id) AS ingredients_list,
        (SELECT JSON_ARRAYAGG(
          JSON_OBJECT(
            'nb_step', step.nb_step,
            'content', step.content
          )
        )
          FROM step
          WHERE step.recipe_id = recipe.id) AS recipe_steps,
        (SELECT JSON_ARRAYAGG(
          JSON_OBJECT(
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
}

export default new RecipeRepository();
