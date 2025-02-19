import "./RecipeOfTheDay.css";
import { MdOutlineAccessTime } from "react-icons/md";
import { Link } from "react-router-dom";

function RecipeOfTheDay({ title, picture, time_to_cook }: RecipeProps) {
  const context = useContext(AuthContext);
  return (
    <section className="recipe-container">
      <h1>Recette du jour</h1>

      <div className="photo-recipe">
        <Link to={`/recipe/${title}`} className="recipe-link">
          <img src={picture} alt={`Recette - ${title}`} />
        </Link>
        <h3 className="recipe-title">{title}</h3>
      </div>

      <div className="clock-and-chef">
        <div className="clock-container">
          <MdOutlineAccessTime className="icon" />
          <span>{time_to_cook} min</span>
        </div>
      </div>
    </section>
  );
}

export default RecipeOfTheDay;
