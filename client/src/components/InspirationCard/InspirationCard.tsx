import type { RecipeI } from "../../types/detail-recipe";
import "./InspirationCard.css";

function InspirationCard({ picture, title }: RecipeI) {
  return (
    <figure className="inspiration-card">
      <img src={picture} alt={`Representation of ${title} card`} />
      <figcaption>{title}</figcaption>
    </figure>
  );
}
export default InspirationCard;
