import type { IngredientII } from "../../types/detail-recipe";
import "./IngredientCard.css";

function IngredientCard({ name_ingredient, picture_ingredient }: IngredientII) {
  return (
    <figure className="ingredient-card">
      <img src={picture_ingredient} alt="" />
      <figcaption>{name_ingredient}</figcaption>
    </figure>
  );
}
export default IngredientCard;
