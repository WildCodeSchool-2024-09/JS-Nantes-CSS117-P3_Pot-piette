import { type ChangeEvent, useEffect, useState } from "react";
import type { RecipeDetailI } from "../../types/detail-recipe";
import "./Homepage.css";
import { Link } from "react-router-dom";
import type { Recipe } from "../../types/detail-recipe";

function Homepage() {
  const [lastRecipe, setLastRecipe] = useState<null | RecipeDetailI>(null);
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  function handleRecipe(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const formData = Object.fromEntries(data.entries());
    const search = formData.search?.toString() || "";
    fetch(`${import.meta.env.VITE_API_URL}/api/recipes/search?query=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.recipes);
      });
  }

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/recipe/latest`)

      .then((response) => response.json())
      .then((lastRecipe) => setLastRecipe(lastRecipe[0]));
  }, []);

  return (
    <>
      <main className="home-page">
        <section className="home-carousel">
          <h2>Nouvelles recettes</h2>
          <figure>
            <Link to={`/recipe/${lastRecipe?.id}`}>
              <img src={lastRecipe?.picture} alt={lastRecipe?.title} />
            </Link>
            <figcaption>{lastRecipe?.title}</figcaption>
          </figure>
        </section>

        {/* Mise en place de la fonction Recherche*/}

        <section>
          <form onSubmit={handleRecipe}>
            <div className="home-search">
              <input
                type="search"
                id="site-search"
                name="search"
                placeholder="Cherchez votre recette"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search === "" ? (
                <button type="submit" className="search-button" disabled>
                  <img
                    src="https://i.ibb.co/ZJH0xp6/chercher.png"
                    alt="Recherche"
                  />
                </button>
              ) : (
                <button type="submit" className="search-button">
                  <img
                    src="https://i.ibb.co/ZJH0xp6/chercher.png"
                    alt="Recherche"
                  />
                </button>
              )}
            </div>
          </form>
        </section>
        <h2>Inspirations</h2>
        <section className="home-inspirations">
          <figure>
            <img
              src="../src/assets/tests/rapide.png"
              alt=""
              className="inspirations"
            />
            <figcaption>Rapide</figcaption>
          </figure>
          <figure>
            <img
              src="../src/assets/tests/plat.png"
              alt=""
              className="inspirations"
            />
            <figcaption>Plat</figcaption>
          </figure>
          <figure>
            <img
              src="../src/assets/tests/healthy.png"
              alt=""
              className="inspirations"
            />
            <figcaption>Salade</figcaption>
          </figure>
          <figure>
            <img
              src="../src/assets/tests/vege.png"
              alt=""
              className="inspirations"
            />
            <figcaption>Végétarien</figcaption>
          </figure>
          <figure>
            <img
              src="../src/assets/tests/desserts.png"
              alt=""
              className="inspirations"
            />
            <figcaption>Desserts</figcaption>
          </figure>
          <figure>
            <img
              src="../src/assets/tests/cocktail.png"
              alt=""
              className="inspirations"
            />
            <figcaption>Cocktail</figcaption>
          </figure>
        </section>
        <section className="search-container">
          {recipes.map((recipe) => {
            return (
              <div key={recipe.id} className="search-result">
                <img src={recipe.picture} alt={recipe.title} />
                <figcaption>{recipe.title}</figcaption>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
}
export default Homepage;
