import { useContext } from "react";
import "./RecipeOfTheDay.css";
import { MdOutlineAccessTime } from "react-icons/md";
import { PiChefHatThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function RecipeOfTheDay({ title, picture, time_to_cook, type }: RecipeProps) {
  const context = useContext(AuthContext);
  return (
    <section className="recipe-container">
      <h1>Recette du jour {context?.isAdmin.toString()}</h1>

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
          <p>{type}</p>
        </div>

        <div className="chef-hat-container">
          <PiChefHatThin className="icon" />
          <span>Type</span>
          <p>{type}</p>
        </div>
      </div>
    </section>
  );
}

export default RecipeOfTheDay;
