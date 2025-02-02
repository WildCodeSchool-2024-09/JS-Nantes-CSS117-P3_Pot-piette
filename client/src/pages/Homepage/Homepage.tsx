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
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [filteredRecipes, setFilteredRecipes] = useState<null | RecipeByTag[]>(
    null,
  );

  const tagIds: { [key: string]: number } = {
    Rapide: 1,
    Plat: 2,
    Healthy: 3,
    Végétarien: 4,
    Dessert: 5,
    Cocktail: 6,
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/recipe/latest`)
      .then((response) => response.json())
      .then((lastRecipe) => setLastRecipe(lastRecipe[0]));
  }, []);

  useEffect(() => {
    if (selectedTag) {
      const tagId = tagIds[selectedTag];
      fetch(`${import.meta.env.VITE_API_URL}/api/tags/${tagId}`)
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

  const handleInspirationClick = (tag: string) => {
    if (selectedTag === tag) {
      setSelectedTag(null);
    } else {
      setSelectedTag(tag);
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
          onClick={() => handleInspirationClick("Rapide")}
          className={`inspirations ${selectedTag === "Rapide" ? "selected" : ""}`}
        >
          <figure>
            <PiHamburger />

            <figcaption>Rapide</figcaption>
          </figure>
        </button>

        <button
          type="button"
          className={`inspirations ${selectedTag === "Plat" ? "selected" : ""}`}
          onClick={() => {
            handleInspirationClick("Plat");
          }}
        >
          <figure>
            <PiForkKnife />
            <figcaption>Plat</figcaption>
          </figure>
        </button>

        <button
          type="button"
          className={`inspirations ${selectedTag === "Healthy" ? "selected" : ""}`}
          onClick={() => handleInspirationClick("Healthy")}
        >
          <figure>
            <LuSalad />

            <figcaption>Healthy</figcaption>
          </figure>
        </button>

        <button
          type="button"
          className={`inspirations ${selectedTag === "Végétarien" ? "selected" : ""}`}
          onClick={() => handleInspirationClick("Végétarien")}
        >
          <figure>
            <PiCarrot />

            <figcaption>Végétarien</figcaption>
          </figure>
        </button>

        <button
          type="button"
          className={`inspirations ${selectedTag === "Dessert" ? "selected" : ""}`}
          onClick={() => handleInspirationClick("Dessert")}
        >
          <figure>
            <LuCakeSlice />

            <figcaption>Dessert</figcaption>
          </figure>
        </button>

        <button
          type="button"
          className={`inspirations ${selectedTag === "Cocktail" ? "selected" : ""}`}
          onClick={() => handleInspirationClick("Cocktail")}
        >
          <figure>
            <LiaGlassMartiniAltSolid />

            <figcaption>Cocktail</figcaption>
          </figure>
        </button>
      </section>
      <section className="inspirationcards">
        {filteredRecipes?.map((el) => (
          <InspirationCard
            key={el.id}
            picture={el.picture}
            title={el.title}
            id={0}
          />
        ))}
      </section>
    </main>
  );
}

export default Homepage;
