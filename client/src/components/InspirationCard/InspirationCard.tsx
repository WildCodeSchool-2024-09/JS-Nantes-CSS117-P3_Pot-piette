import { Link } from "react-router-dom";
import type { RecipeI } from "../../types/detail-recipe";
import "./InspirationCard.css";

function InspirationCard({ picture, title, id }: RecipeI) {
  return (
    <figure className="inspiration-card">
      <Link to={`/recipe/${id}`}>
        <img
          src={`${import.meta.env.VITE_API_URL}${picture}`}
          alt={`Recette de ${title} sur le site Pot'Piette`}
        />
        <figcaption>{title}</figcaption>
      </Link>
    </figure>
  );
}
export default InspirationCard;
