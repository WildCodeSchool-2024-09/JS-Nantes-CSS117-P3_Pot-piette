import { useEffect, useState } from "react";
import type { RecipeDetailI } from "../../types/detail-recipe";
import "./Homepage.css";

function Homepage() {
  const [lastRecipe, setLastRecipe] = useState<null | RecipeDetailI>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/recipe/latest`)
      .then((response) => response.json())
      .then((lastRecipe) => setLastRecipe(lastRecipe[0]));
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/recipes?query=${search}`)
      .then((res) => res.json())
      .then((search) => setSearch(search));
  });

  return (
    <>
      <main className="home-page">
        <section className="home-carousel">
          <h2>Nouvelles recettes</h2>
          <figure>
            <img src={lastRecipe?.picture} alt={lastRecipe?.title} />
            <figcaption>{lastRecipe?.title}</figcaption>
          </figure>
        </section>

        <section className="home-search">
          {/*<form
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.currentTarget);
              const formData = Object.fromEntries(data.entries());
              const search = formData.search as string;
              setSearch(search);
            }}
          >
            <input
              type="search"
              id="site-search"
              name="search"
              placeholder="Cherchez votre recette"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit"> Rechercher</button>
          </form>*/}
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
      </main>
    </>
  );
}
export default Homepage;
