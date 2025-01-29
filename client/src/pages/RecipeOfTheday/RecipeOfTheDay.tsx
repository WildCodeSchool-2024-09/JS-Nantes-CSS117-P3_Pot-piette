import "./RecipeOfTheDay.css";
import { MdOutlineAccessTime } from "react-icons/md";
import { PiChefHatThin } from "react-icons/pi";

function RecipeOfTheDay() {
  return (
    <section className="recipe-container">
      <h1>Recette du jour</h1>
      <section className="photo-recip">
        <img src="photos/image 22.png" alt="photo-recipe" />

        <h3 className="recipe-title">Grille de mogettes Vendeenne</h3>
      </section>
      <section className="clock-and-chef">
        <figure className="clock-container">
          <MdOutlineAccessTime />
          <figcaption>Préparation</figcaption>
          <h6>45 mn</h6>
        </figure>

        <figure className="chef-hat-container">
          <PiChefHatThin />

          <figcaption>type</figcaption>
          <h6>Tradition</h6>
        </figure>
      </section>
    </section>
  );
}
export default RecipeOfTheDay;
