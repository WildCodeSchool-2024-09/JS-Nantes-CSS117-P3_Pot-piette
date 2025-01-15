import "./RecipeOfTheDay.css";

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
          <img src="photos/Clock (1).png" alt="Clock" className="clock" />
          <figcaption>Préparation</figcaption>
        </figure>

        <figure className="chef-hat-container">
          <img
            src="photos/chef-hat-svgrepo-com 1.png"
            alt="Chef-Hat"
            className="chef-hat"
          />
          <figcaption>type</figcaption>
        </figure>
      </section>
    </section>
  );
}
export default RecipeOfTheDay;
