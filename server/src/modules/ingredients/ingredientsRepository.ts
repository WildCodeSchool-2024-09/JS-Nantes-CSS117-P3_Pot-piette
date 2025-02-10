import type { Result, Rows } from "../../../database/client";
import databaseClient from "../../../database/client";
import type { IngredientUnique } from "../../types/recipe/recipe";
import type { Ingredient } from "./ingredient";

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

  async update(ingredient: Ingredient) {
    const [result] = await databaseClient.query<Result>(
      "UPDATE ingredient SET name_ingredient = ?, picture_ingredient = ? WHERE id = ?",
      [
        ingredient.name_ingredient,
        ingredient.picture_ingredient,
        ingredient.id,
      ],
    );

    return result.affectedRows;
  }
}

export default new IngredientsRepository();
