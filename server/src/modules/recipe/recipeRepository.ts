import type { Rows } from "../../../database/client";
import databaseClient from "../../../database/client";

class RecipeRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM recipe");

    return rows;
  }
}

export default new RecipeRepository();
