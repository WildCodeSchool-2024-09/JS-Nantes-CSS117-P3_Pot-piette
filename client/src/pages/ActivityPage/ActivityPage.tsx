import { IoIosAdd } from "react-icons/io";
import "./ActivityPage.css";
import { Link } from "react-router-dom";

function ActivityPage() {
  return (
    <main>
      <section className="activity">
        <h1>Vos activités</h1>

        <article className="activity-published-recipe">
          <h2>Mes recettes publiées</h2>
          <section className="activity-container">
            <img
              src="src/assets/tests/Hachis Parmentier.jpg"
              alt="Hachis Parmentier"
            />
          </section>

          <p>Voir plus</p>
        </article>

        <article className="activity-pending-recipe">
          <h2>Mes recettes en attente</h2>
          <section className="activity-container">
            <img src="src\assets\tests\Anchois.png" alt="Anchois" />

            <img src="src\assets\tests\Jambon.png" alt="Jambon" />
          </section>

          <p>Voir plus</p>
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
  );
}

export default ActivityPage;
