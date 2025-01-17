import "./ActivityPage.css";

function ActivityPage() {
  return (
    <section className="activities">
      <h1>Vos activités</h1>

      <article className="activity-published-recipe">
        <h2>Mes recettes publiées</h2>

        <img
          src="src/assets/tests/Hachis Parmentier.jpg"
          alt="Hachis Parmentier"
        />

        <p>Voir plus</p>
      </article>

      <article className="activity-waiting-recipe">
        <h2>Mes recettes en attente</h2>

        <img src="src\assets\tests\Anchois.png" alt="Anchois" />

        <img src="src\assets\tests\Jambon.png" alt="Jambon" />

        <p>Voir plus</p>
      </article>

      <section className="activity-add-recipe">
        <h2>Ajouter une recette</h2>
        <button type="button" className="activity-add-button">
          +
        </button>
      </section>
    </section>
  );
}

export default ActivityPage;
