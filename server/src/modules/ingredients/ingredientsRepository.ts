import type { Result, Rows } from "../../../database/client";
import databaseClient from "../../../database/client";
import type { IngredientUnique } from "../../types/recipe/recipe";

class IngredientsRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM ingredient");

    return rows;
  }

  async create(ingredient: IngredientUnique) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO ingredient (name_ingredient, picture_ingredient) VALUES (?, ?)",
      [ingredient.name_ingredient, ingredient.picture_ingredient],
    );

    return result.insertId;
  }
}

export default new IngredientsRepository();
