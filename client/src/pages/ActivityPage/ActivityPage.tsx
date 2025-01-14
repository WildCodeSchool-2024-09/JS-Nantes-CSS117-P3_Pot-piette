import "./ActivityPage.css";

function ActivityPage() {
  return (
    <section className="activities">
      <h1>Vos activités</h1>

      <section className="activitypublished-recipes">
        <h2>Mes recettes publiées</h2>
        <figure>
          <img src="./src" alt="Recette publiée" />
          <figcaption>
            <p>Voir plus</p>
          </figcaption>
        </figure>
      </section>

      <section className="activitywait-recipes">
        <h2>Mes recettes en attente</h2>
        <div className="activity-recipes-list">
          <figure>
            <img src="" alt="Recette en attente 1" />
          </figure>
          <figure>
            <img src="" alt="Recette en attente 2" />
          </figure>
        </div>
        <section>
          <p>Voir plus</p>
        </section>
      </section>

      <section className="activityadd-recipe">
        <h2>Ajouter une recette</h2>
        <span className="add-button">+</span>
      </section>
    </section>
  );
}

export default ActivityPage;
