import "./RecipeOfTheDay.css";
import { MdOutlineAccessTime } from "react-icons/md";
import { PiChefHatThin } from "react-icons/pi";
import { Link } from "react-router-dom";

interface RecipeProps {
  title: string;
  picture: string;
  time_to_cook: string | number;
  type: string;
}

function RecipeOfTheDay({ title, picture, time_to_cook, type }: RecipeProps) {
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
