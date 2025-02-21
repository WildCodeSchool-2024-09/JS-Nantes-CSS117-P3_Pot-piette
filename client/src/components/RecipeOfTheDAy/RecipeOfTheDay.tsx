import "./RecipeOfTheDay.css";
import { MdOutlineAccessTime } from "react-icons/md";
import { Link } from "react-router-dom";

function RecipeOfTheDay({ title, picture, time_to_cook, id }: RecipeProps) {
  return (
    <section className="recipe-container">
      <h1>Recette du jour</h1>

      <div className="photo-recipe">
        <Link to={`/recipe/${id}`} className="recipe-link">
          <img
            src={`${import.meta.env.VITE_API_URL}${picture}`}
            alt={`Recette du jour - ${title}`}
          />
        </Link>
        <h3 className="recipe-title">{title}</h3>
      </div>

      <div className="clock-and-chef">
        <div className="clock-container">
          <MdOutlineAccessTime className="icon" />
          <p>{time_to_cook} min</p>
        </div>
      </div>
    </section>
  );
}

export default RecipeOfTheDay;
