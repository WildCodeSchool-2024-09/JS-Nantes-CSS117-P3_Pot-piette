import databaseClient from "../../../database/client";
import type { Rows } from "../../../database/client";
import type { RecipePending } from "../../types/recipe/recipe";

class AdminRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT title, picture FROM recipe ORDER BY DESC",
    );

    return rows;
  }

  async countAll(param: string) {
    if (param === "recipe" || param === "user") {
      const [result] = await databaseClient.query<Rows>(
        `SELECT COUNT(*) as ${param}_nb FROM ${param}`,
      );

      return result[0];
    }

    return null;
  }

  async count(param: string, cond: number) {
    if (param === "recipe" && (cond === 0 || cond === 1)) {
      const [result] = await databaseClient.query<Rows>(
        `SELECT COUNT(id) as unpublished_nb FROM ${param} WHERE is_published = ${cond}`,
        [param, cond],
      );

      return result[0];
    }
    return null;
  }

  async readPending() {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT id, title, picture FROM recipe WHERE is_published = 0",
    );

    return rows as RecipePending[];
  }
}

export default new AdminRepository();
