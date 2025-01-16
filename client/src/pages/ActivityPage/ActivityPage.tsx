import "./ActivityPage.css";

function ActivityPage() {
  return (
    <section className="activities">
      <h1>Vos activités</h1>

      <section>
        <h2>Mes recettes publiées</h2>

        <img
          src="src/assets/tests/Hachis Parmentier.jpg"
          alt="Hachis Parmentier"
        />

        <p>Voir plus</p>
      </section>

      <section className="waiting-recipe">
        <h2>Mes recettes en attente</h2>

        <img src="src\assets\tests\Anchois.png" alt="Anchois" />

        <img src="src\assets\tests\Jambon.png" alt="Jambon" />

        <p>Voir plus</p>
      </section>

      <section className="activity-add-recipe">
        <h2>Ajouter une recette</h2>
        <span className="activity-add-button">+</span>
      </section>
    </section>
  );
}

export default ActivityPage;
