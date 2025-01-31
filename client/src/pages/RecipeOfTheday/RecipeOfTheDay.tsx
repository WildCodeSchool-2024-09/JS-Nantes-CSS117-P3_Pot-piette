import "./RecipeOfTheDay.css";
import { MdOutlineAccessTime } from "react-icons/md";
import { PiChefHatThin } from "react-icons/pi";

function RecipeOfTheDay() {
  return (
    <section className="recipe-container">
      <h1>Recette du jour</h1>

      <div className="photo-recip">
        <img
          src="https://cache.marieclaire.fr/data/photo/w1000_ci/61/recette-tonkotsu-ramen.webp"
          alt="photo-recipe"
        />
        <div className="recipe-title">
          <h3>Grille de mogettes Vendéenne</h3>
        </div>
      </div>

      <div className="clock-and-chef">
        <div className="clock-container">
          <MdOutlineAccessTime className="icon" />
          <figcaption>Préparation</figcaption>
          <h6>45 mn</h6>
        </div>

        <div className="chef-hat-container">
          <PiChefHatThin className="icon" />
          <figcaption>Type</figcaption>
          <h6>Tradition</h6>
        </div>
      </div>
    </section>
  );
}

export default RecipeOfTheDay;
