import { useEffect, useState } from "react";
import InspirationCard from "../../components/InspirationCard/InspirationCard";
import "./Homepage.css";
import { LiaGlassMartiniAltSolid } from "react-icons/lia";
import { LuCakeSlice, LuSalad } from "react-icons/lu";
import { PiCarrot, PiForkKnife, PiHamburger } from "react-icons/pi";
import type { RecipeByTag } from "../../types/detail-recipe";

function Homepage() {
  const [lastRecipe, setLastRecipe] = useState<null | RecipeByTag>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [filteredRecipes, setFilteredRecipes] = useState<null | RecipeByTag[]>(
    null,
  );
  const TAG_IDS: { [key: string]: number } = {
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
      const tagId = TAG_IDS[selectedTag];
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
          <input
            type="search"
            id="site-search"
            name="search"
            placeholder="Cherchez votre recette"
          />
        </section>
        <h2>Inspirations</h2>
        <section className="home-inspirations">
          <figure>
            <PiHamburger
              onClick={() => handleInspirationClick("Rapide")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleInspirationClick("Rapide");
                }
              }}
              className={`inspirations ${selectedTag === "Rapide" ? "selected" : ""}`}
            />

            <figcaption>Rapide</figcaption>
          </figure>
          <figure
            onClick={() => handleInspirationClick("Plat")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleInspirationClick("Plat");
              }
            }}
          >
            <PiForkKnife
              onClick={() => handleInspirationClick("Plat")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleInspirationClick("Plat");
                }
              }}
              className={`inspirations ${selectedTag === "Plat" ? "selected" : ""}`}
            />

            <figcaption>Plat</figcaption>
          </figure>
          <figure>
            <LuSalad
              onClick={() => handleInspirationClick("Healthy")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleInspirationClick("Healthy");
                }
              }}
              className={`inspirations ${selectedTag === "Healthy" ? "selected" : ""}`}
            />

            <figcaption>Healthy</figcaption>
          </figure>
          <figure
            onClick={() => handleInspirationClick("Végétarien")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleInspirationClick("Végétarien");
              }
            }}
          >
            <PiCarrot
              onClick={() => handleInspirationClick("Végétarien")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleInspirationClick("Végétarien");
                }
              }}
              className={`inspirations ${selectedTag === "Végétarien" ? "selected" : ""}`}
            />

            <figcaption>Végétarien</figcaption>
          </figure>
          <figure
            onClick={() => handleInspirationClick("Dessert")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleInspirationClick("Dessert");
              }
            }}
          >
            <LuCakeSlice
              onClick={() => handleInspirationClick("Dessert")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleInspirationClick("Dessert");
                }
              }}
              className={`inspirations ${selectedTag === "Dessert" ? "selected" : ""}`}
            />

            <figcaption>Dessert</figcaption>
          </figure>
          <figure
            onClick={() => handleInspirationClick("Cocktail")}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleInspirationClick("Cocktail");
              }
            }}
          >
            <LiaGlassMartiniAltSolid
              onClick={() => handleInspirationClick("Cocktail")}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  handleInspirationClick("Cocktail");
                }
              }}
              className={`inspirations ${selectedTag === "Cocktail" ? "selected" : ""}`}
            />

            <figcaption>Cocktail</figcaption>
          </figure>
        </section>
        <section className="inspirationcards">
          {filteredRecipes?.map((el) => (
            <InspirationCard
              key={el.id}
              picture={el.picture}
              title={el.title}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default Homepage;
