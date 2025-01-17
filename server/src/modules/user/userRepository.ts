import type { Rows } from "../../../database/client";
import databaseClient from "../../../database/client";

class UserRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM user");

    return rows;
  }
}

export default new UserRepository();
