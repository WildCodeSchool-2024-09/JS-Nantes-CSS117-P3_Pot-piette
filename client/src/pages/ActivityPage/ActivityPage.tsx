import "./ActivityPage.css";

function ActivityPage() {
  return (
    <section className="activity">
      <h1>Vos activités</h1>

      <section className="activitypublished-recipes">
        <h2>Mes recettes publiées</h2>
        <figure>
          <img
            src="src\assets\tests\Hachis Parmentier.jpg"
            alt="Recette publiée"
          />
          <figcaption>
            <p>Voir plus</p>
          </figcaption>
        </figure>
      </section>

      <section className="activitywait-recipes">
        <h2>Mes recettes en attente</h2>
        <section className="activity-recipes-list">
          <figure className="waitin-img">
            <img
              className="img1"
              src="src\assets\tests\Tarte.jpg"
              alt="Recette en attente 1"
            />
          </figure>
          <figure className="waitin-img">
            <img src="src\assets\tests\Jambon.png" alt="Recette en attente 2" />
          </figure>
        </section>
        <section>
          <p>Voir plus</p>
        </section>
      </section>

      <section className="activityadd-recipe">
        <h2>Ajouter une recette</h2>
        <span className="activityadd-button">+</span>
      </section>
    </section>
  );
}

export default ActivityPage;
