import { useEffect, useState } from "react";
import "../UserDashboard/UserDashboard.css";
import { IoIosAdd } from "react-icons/io";
import { Link } from "react-router-dom";
import InspirationCard from "../../components/InspirationCard/InspirationCard";
import type { RecipeI } from "../../types/detail-recipe";

function AdminDashboard() {
  const [pendingRecipes, setPendingRecipes] = useState<RecipeI[]>([]);
  const [countPending, setCountPending] = useState(0);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/admin/recipes-pending`)
      .then((response) => response.json())
      .then((pendingRecipes) => setPendingRecipes(pendingRecipes));

    fetch(`${import.meta.env.VITE_API_URL}/api/admin/recipes-pending-count`)
      .then((response) => response.json())
      .then((countPending) => setCountPending(countPending));
  }, []);
  return (
    <>
      <main>
        <section className="activity">
          <h1>Admin-dashboard</h1>

          <article className="activity-published-recipe">
            <h2>Les recettes publiées</h2>
            <section className="activity-container">
              {/* {publishedRecipes.length > 0 ? (
                publishedRecipes?.map((recipe) => {
                  return (
                    <InspirationCard
                      key={recipe.id}
                      picture={recipe.picture}
                      title={recipe.title}
                      id={recipe.id}
                    />
                  );
                })
              ) : (
                <p>Vous n'avez publié aucun recette pour le moment</p>
              )} */}
            </section>
          </article>

          <article className="activity-pending-recipe">
            <h2>Les recettes en attente {countPending}</h2>
            <section className="activity-container">
              {pendingRecipes.length > 0 ? (
                pendingRecipes?.map((recipe) => {
                  return (
                    <InspirationCard
                      key={recipe.id}
                      picture={recipe.picture}
                      title={recipe.title}
                      id={recipe.id}
                    />
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
            <button type="button">
              <Link to="/add-recipe">
                <IoIosAdd />
              </Link>
            </button>
          </section>
        </section>
      </main>
    </>
  );
}

export default AdminDashboard;
