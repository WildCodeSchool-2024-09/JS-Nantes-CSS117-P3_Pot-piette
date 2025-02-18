import databaseClient from "../../../database/client";
import type { Result, Rows } from "../../../database/client";
import type { RecipeI } from "../../types/recipe/recipe";

class AdminRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT title, picture FROM recipe ORDER BY DESC",
    );

    return rows;
  }

  async countAll(param: string) {
    if (param === "recipe" || param === "user") {
      const [result] = await databaseClient.query<Result>(
        `SELECT COUNT(*) FROM ${param}`,
      );

      return result;
    }

    return null;
  }

  async count(param: string, cond: number) {
    if (param === "recipe" && (cond === 0 || cond === 1)) {
      const [result] = await databaseClient.query<Result>(
        `SELECT COUNT(id) FROM ${param} WHERE is_published = ${cond}`,
        [param, cond],
      );

      return result;
    }
    return null;
  }

  async readPending() {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT title, picture FROM recipe WHERE is_published = 0",
    );

    return rows as RecipeI[];
  }
}

export default new AdminRepository();
