import "./ActivityPage.css";
import { useEffect, useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import InspirationCard from "../../components/InspirationCard/InspirationCard";
import type { RecipeI } from "../../types/detail-recipe";

function ActivityPage() {
  const [publishedRecipes, setPublishedRecipes] = useState<RecipeI[]>([]);
  const [pendingRecipes, setPendingRecipes] = useState<RecipeI[]>([]);
  const id = 1;

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/user/published/${id}`)
      .then((response) => response.json())
      .then((publishedRecipes) => setPublishedRecipes(publishedRecipes));

    fetch(`${import.meta.env.VITE_API_URL}/api/user/pending/${id}`)
      .then((response) => response.json())
      .then((pendingRecipes) => setPendingRecipes(pendingRecipes));
  }, []);

  return (
    <main className="activity">
      <h1>Vos activités</h1>

      <article className="activity-published-recipe">
        <h2>Mes recettes publiées</h2>
        <section className="activity-container">
          {publishedRecipes.length > 0 ? (
            publishedRecipes?.map((recipe) => {
              return (
                <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
                  <InspirationCard
                    picture={recipe.picture}
                    title={recipe.title}
                    id={recipe.id}
                  />
                </Link>
              );
            })
          ) : (
            <p>Vous n'avez publié aucun recette pour le moment</p>
          )}
        </section>
      </article>

      <article className="activity-pending-recipe">
        <h2>Mes recettes en attente</h2>
        <section className="activity-container">
          {pendingRecipes.length > 0 ? (
            pendingRecipes?.map((recipe) => {
              return (
                <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
                  <InspirationCard
                    key={recipe.id}
                    picture={recipe.picture}
                    title={recipe.title}
                    id={recipe.id}
                  />
                </Link>
              );
            })
          ) : (
            <p>
              Vous n'avez aucune recette en attente de publication pour le
              moment
            </p>
          )}
        </section>
      </article>

      <section className="activity-add-recipe">
        <h2>Ajouter une recette</h2>
        <button type="button" className="activity-add-button">
          <Link to="/add-recipe">
            <IoIosAdd />
          </Link>
        </button>
      </section>
    </main>
  );
}

export default ActivityPage;
