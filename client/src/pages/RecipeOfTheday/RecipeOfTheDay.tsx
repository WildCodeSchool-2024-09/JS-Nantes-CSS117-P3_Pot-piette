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

        <h3 className="recipe-title">Grille de mogettes Vendéenne</h3>
      </div>

      <div className="clock-and-chef">
        <div className="clock-container">
          <MdOutlineAccessTime className="icon" />
          <figcaption>Préparation</figcaption>
          <p>45 mn</p>
        </div>

        <div className="chef-hat-container">
          <PiChefHatThin className="icon" />
          <figcaption>Type</figcaption>
          <p>Tradition</p>
        </div>
      </div>
    </section>
  );
}

export default RecipeOfTheDay;
