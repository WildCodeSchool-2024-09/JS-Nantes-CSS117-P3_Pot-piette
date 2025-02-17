// import { Link } from "react-router-dom";
import type { RecipeByTag } from "../../types/detail-recipe";
import "./InspirationCard.css";

function InspirationCard({ picture, title }: RecipeByTag) {
  return (
    <section className="inspiration-result">
      <figure className="inspiration-card">
        <img
          src={`${import.meta.env.VITE_API_URL}${picture}`}
          alt={`Representation of ${title} card`}
        />
        <figcaption>{title}</figcaption>
      </figure>
    </section>
  );
}
export default InspirationCard;
