import { useEffect, useState } from "react";
import InspirationCard from "../../components/InspirationCard/InspirationCard";
import "./Homepage.css";
import { LiaGlassMartiniAltSolid } from "react-icons/lia";
import { LuCakeSlice, LuSalad } from "react-icons/lu";
import { PiCarrot, PiForkKnife, PiHamburger } from "react-icons/pi";
import { Link } from "react-router-dom";
import type { RecipeByTag } from "../../types/detail-recipe";

function Homepage() {
  const [lastRecipe, setLastRecipe] = useState<null | RecipeByTag>(null);
  const [selectedTag, setSelectedTag] = useState<number | null>(null);
  const [filteredRecipes, setFilteredRecipes] = useState<null | RecipeByTag[]>(
    null,
  );

  const tagIds: { [key: number]: string } = {
    1: "Rapide",
    2: "Plat",
    3: "healthy",
    4: "vegetarien",
    5: "dessert",
    6: "cocktail",
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/recipe/latest`)
      .then((response) => response.json())
      .then((lastRecipe) => setLastRecipe(lastRecipe[0]));
  }, []);

  useEffect(() => {
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
    if (selectedTag === tagId) {
      setSelectedTag(null);
    } else {
      setSelectedTag(tagId);
    }
  };

  return (
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
      <section className="home-search">
        <input
          type="search"
          id="site-search"
          name="search"
          placeholder="Cherchez votre recette"
        />
      </section>
      <h2>Inspirations</h2>
      <section className="home-inspirations">
        <button
          type="button"
          onClick={() => handleInspirationClick(1)}
          className={`inspirations ${tagIds[selectedTag || 0] === "rapide" ? "selected" : ""}`}
        >
          <figure>
            <PiHamburger />

            <figcaption>Rapide</figcaption>
          </figure>
        </button>

        <button
          type="button"
          className={`inspirations ${tagIds[selectedTag || 0] === "plat" ? "selected" : ""}`}
          onClick={() => {
            handleInspirationClick(2);
          }}
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
      <section className="inspirationcards">
        {filteredRecipes?.map((el) => (
          <InspirationCard key={el.id} picture={el.picture} title={el.title} />
        ))}
      </section>
    </main>
  );
}

export default Homepage;
