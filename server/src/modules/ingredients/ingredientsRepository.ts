import type { Rows } from "../../../database/client";
import databaseClient from "../../../database/client";

class IngredientsRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM ingredient");

    return rows;
  }
}

export default new IngredientsRepository();
