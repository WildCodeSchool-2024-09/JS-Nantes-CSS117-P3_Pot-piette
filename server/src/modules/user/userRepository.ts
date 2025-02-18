import type { Result, Rows } from "../../../database/client";
import databaseClient from "../../../database/client";
import type { RecipeI } from "../../types/recipe/recipe";
import type { User, UserUpdateI } from "./user";

class UserRepository {
  async getUsersByEmail(email: string) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM user WHERE email = ?",
      [email],
    );
    return rows[0] as UserUpdateI;
  }

  async readAll() {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT name, email FROM user",
    );

    return rows as User[];
  }

  async searchPublished(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT title, picture FROM recipe WHERE user_id = ? AND is_published = 1",
      [id],
    );

    return rows as RecipeI[];
  }

  async searchUnpublished(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT title, picture FROM recipe WHERE user_id = ? AND is_published = 0",
      [id],
    );

    return rows as RecipeI[];
  }

  async create(user: User) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO user (name, email, password, inscription_date) VALUES (?, ?, ?, ?)",
      [user.name, user.email, user.password, user.inscription_date],
    );

    return result.insertId;
  }

  async update(user: UserUpdateI) {
    const [result] = await databaseClient.query<Result>(
      "UPDATE user SET name = ?, age = ?, genre = ?, picture = ?, inscription_date = ?, email = ?, password = ? WHERE id = ?",
      [
        user.name,
        user.age,
        user.genre,
        user.picture,
        user.inscription_date,
        user.email,
        user.password,
        user.id,
      ],
    );

    return result.affectedRows;
  }

  async delete(id: number) {
    const [result] = await databaseClient.query<Result>(
      "DELETE FROM user WHERE id = ?",
      [id],
    );

    return result.affectedRows;
  }

  async getUserById(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT id, name, email, is_admin, is_modo FROM user WHERE id = ?",
      [id],
    );
    return rows[0];
  }
}

export default new UserRepository();
