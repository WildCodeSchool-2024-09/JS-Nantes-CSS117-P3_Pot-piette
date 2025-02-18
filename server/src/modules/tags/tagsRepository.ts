import databaseClient from "../../../database/client";
import type { Rows } from "../../../database/client";
class TagsRepository {
  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      `SELECT recipe.title, recipe.picture, recipe.id
      FROM recipe
      JOIN recipe_tag ON recipe.id = recipe_tag.recipe_id
      WHERE recipe_tag.tag_id=?`,
      [id],
    );
    return rows;
  }
}
export default new TagsRepository();
