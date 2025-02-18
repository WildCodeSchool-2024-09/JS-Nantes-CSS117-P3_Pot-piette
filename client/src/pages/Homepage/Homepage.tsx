import { type ChangeEvent, useEffect, useState } from "react";
import InspirationCard from "../../components/InspirationCard/InspirationCard";
import type { RecipeDetailI } from "../../types/detail-recipe";
import "./Homepage.css";
import { IoSearchOutline } from "react-icons/io5";
import { LiaGlassMartiniAltSolid } from "react-icons/lia";
import { LuCakeSlice, LuSalad } from "react-icons/lu";
import { PiCarrot, PiForkKnife, PiHamburger } from "react-icons/pi";
import { Link } from "react-router-dom";
import RecipeOfTheDay from "../../components/RecipeOfTheDAy/RecipeOfTheDay";
import type { RecipeI } from "../../types/detail-recipe";

function Homepage() {
  const [randomRecipe, setRandomRecipe] = useState<RecipeI | null>(null);
  const [lastRecipe, setLastRecipe] = useState<null | RecipeDetailI>(null);
  const [recipes, setRecipes] = useState<RecipeI[]>([]);
  const [selectedTag, setSelectedTag] = useState<number | null>(null);
  const [filteredRecipes, setFilteredRecipes] = useState<null | RecipeI[]>(
    null,
  );

  const tagIds: { [key: number]: string } = {
    1: "rapide",
    2: "plat",
    3: "healthy",
    4: "vegetarien",
    5: "dessert",
    6: "cocktail",
  };

  function handleRecipe(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const formData = Object.fromEntries(data.entries());
    const search = formData.search?.toString();

    if (search) {
      fetch(
        `${import.meta.env.VITE_API_URL}/api/recipes/search?query=${search}`,
      )
        .then((res) => res.json())
        .then((data) => setRecipes(data.recipes));
    }
  }

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/recipe/latest`)
      .then((response) => response.json())
      .then((lastRecipe) => setLastRecipe(lastRecipe[0]));

    fetch(`${import.meta.env.VITE_API_URL}/api/recipes`)
      .then((response) => response.json())
      .then((data: RecipeI[]) => {
        if (data.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.length);
          setRandomRecipe(data[randomIndex]);
        }
      })
      .catch((error) =>
        console.error("erreur lors de la récuperation des recettes :", error),
      );

    if (selectedTag) {
      fetch(`${import.meta.env.VITE_API_URL}/api/tags/${selectedTag}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Erreur API : ${response.status}`);
          }
          return response.json();
        })
        .then((recipes) => {
          setFilteredRecipes(recipes);
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des recettes :", error);
          setFilteredRecipes(null);
        });
    } else {
      setFilteredRecipes(null);
    }
  }, [selectedTag]);

  const handleInspirationClick = (tagId: number) => {
    return selectedTag === tagId ? setSelectedTag(null) : setSelectedTag(tagId);
  };

  return (
    <main className="home-page">
      {randomRecipe && (
        <RecipeOfTheDay
          title={randomRecipe.title}
          picture={randomRecipe.picture}
          time_to_cook={randomRecipe.time_to_cook ?? "N/A"}
          type={randomRecipe.type ?? ""}
        />
      )}

      <section className="home-carousel">
        <h2 id="accueil">Nouvelles recettes</h2>
        <figure>
          <Link to={`/recipe/${lastRecipe?.id}`}>
            <img
              src={`${import.meta.env.VITE_API_URL}${lastRecipe?.picture}`}
              alt={lastRecipe?.title}
            />
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
            />
            <button type="submit" className="search-button">
              <IoSearchOutline />
            </button>
          </div>
        </form>
      </section>
      <section className="search-container">
        {recipes.map((recipe) => {
          return (
            <div key={recipe.id} className="search-result">
              <Link to={`/recipe/${recipe.id}`}>
                <img
                  src={`${import.meta.env.VITE_API_URL}${recipe?.picture}`}
                  alt={recipe.title}
                />
                <figcaption>{recipe.title}</figcaption>
              </Link>
            </div>
          );
        })}
      </section>

      <h2>Inspirations</h2>
      <section className="home-inspirations">
        <button
          type="button"
          className={`inspirations ${tagIds[selectedTag || 0] === "rapide" ? "selected" : ""}`}
          onClick={() => handleInspirationClick(1)}
        >
          <figure>
            <PiHamburger />
            <figcaption>Rapide</figcaption>
          </figure>
        </button>

        <button
          type="button"
          className={`inspirations ${tagIds[selectedTag || 0] === "plat" ? "selected" : ""}`}
          onClick={() => handleInspirationClick(2)}
        >
          <figure>
            <PiForkKnife />
            <figcaption>Plat</figcaption>
          </figure>
        </button>

        <button
          type="button"
          className={`inspirations ${tagIds[selectedTag || 0] === "healthy" ? "selected" : ""}`}
          onClick={() => handleInspirationClick(3)}
        >
          <figure>
            <LuSalad />

            <figcaption>Healthy</figcaption>
          </figure>
        </button>

        <button
          type="button"
          className={`inspirations ${tagIds[selectedTag || 0] === "vegetarien" ? "selected" : ""}`}
          onClick={() => handleInspirationClick(4)}
        >
          <figure>
            <PiCarrot />

            <figcaption>Végétarien</figcaption>
          </figure>
        </button>

        <button
          type="button"
          className={`inspirations ${tagIds[selectedTag || 0] === "dessert" ? "selected" : ""}`}
          onClick={() => handleInspirationClick(5)}
        >
          <figure>
            <LuCakeSlice />

            <figcaption>Dessert</figcaption>
          </figure>
        </button>

        <button
          type="button"
          className={`inspirations ${tagIds[selectedTag || 0] === "cocktail" ? "selected" : ""}`}
          onClick={() => handleInspirationClick(6)}
        >
          <figure>
            <LiaGlassMartiniAltSolid />

            <figcaption>Cocktail</figcaption>
          </figure>
        </button>
      </section>

      <section className="inspiration-home-page">
        {filteredRecipes?.map((el) => (
          <Link key={el.id} to={`/recipe/${el.id}`}>
            <InspirationCard
              key={el.id}
              picture={el.picture}
              title={el.title}
              id={el.id}
            />
          </Link>
        ))}
      </section>
    </main>
  );
}

export default Homepage;
