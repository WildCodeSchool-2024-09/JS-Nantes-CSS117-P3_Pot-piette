import "./AddRecipe5.css";

function AddRecipe5() {
  return (
    <main className="add-5-recipe-main">
      <section>
        <h1>Grillée de mogette</h1>
      </section>
      <section className="add-5-recipe-ingrediens">
        <h2>Ingrédients</h2>

        <ul>
          <button type="button" aria-label="Modifier le titre">
            ✏️
          </button>
          <li>
            <img src="src\assets\tests\Anchois.png" alt="Anchois" />
            <span>Mogette</span>
          </li>
          <li>
            <img src="src\assets\tests\Jambon.png" alt="Jambon" />
            <span>Sel</span>
          </li>
          <li>
            <button type="button" aria-label="Ajouter un ingrédient">
              +
            </button>
          </li>
        </ul>
      </section>
      <section>
        <h2>Préparation de la recette</h2>
        <ul>
          <li>
            <span>Étape 1</span>
            <button
              type="button"
              className="edit-button"
              aria-label="Modifier l'étape"
            >
              ✏️
            </button>
            <button
              type="button"
              className="add-5-delete-button"
              aria-label="Supprimer l'étape"
            >
              ❌
            </button>
          </li>
          <li className="add-5-step">
            <button type="button" aria-label="Ajouter une étape">
              +
            </button>
          </li>
        </ul>
      </section>
      <section className="add-5-validate-">
        <button type="submit" className="submit-button">
          Envoyer
        </button>
      </section>
    </main>
  );
}
export default AddRecipe5;
