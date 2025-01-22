import type { Result, Rows } from "../../../database/client";
import databaseClient from "../../../database/client";
import type { User } from "./user";

class UserRepository {
  async readAll() {
    const [rows] = await databaseClient.query<Rows>("SELECT * FROM user");

    return rows as User[];
  }

  async create(user: User) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO user (name, age, genre, picture, inscription_date, email, password, is_admin, is_modo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        user.name,
        user.age,
        user.genre,
        user.picture,
        user.inscription_date,
        user.email,
        user.password,
        user.is_admin,
        user.is_modo,
      ],
    );

    return result.insertId;
  }
}

export default new UserRepository();
