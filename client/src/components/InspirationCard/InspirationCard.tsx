import { Link } from "react-router-dom";
import type { RecipeI } from "../../types/detail-recipe";
import "./InspirationCard.css";

function InspirationCard({ picture, title, id }: RecipeI) {
  return (
    <section className="inspiration-result">
      <figure className="inspiration-card">
        <Link to={`/recipe/${id}`}>
          <img
            src={`${import.meta.env.VITE_API_URL}${picture}`}
            alt={`Representation of ${title} card`}
          />
          <figcaption>{title}</figcaption>
        </Link>
      </figure>
    </section>
  );
}
export default InspirationCard;
