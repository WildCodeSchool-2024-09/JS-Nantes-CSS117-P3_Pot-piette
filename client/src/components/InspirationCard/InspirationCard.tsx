import type { RecipeI } from "../../types/detail-recipe";
import "./InspirationCard.css";

function InspirationCard({ picture, title }: RecipeI) {
  return (
    <section className="inspiration-container">
      <div className="inspiration-result">
        <figure className="inspiration-card">
          <img src={picture} alt={`Representation of ${title} card`} />
          <figcaption>{title}</figcaption>
        </figure>
      </div>
    </section>
  );
}
export default InspirationCard;
