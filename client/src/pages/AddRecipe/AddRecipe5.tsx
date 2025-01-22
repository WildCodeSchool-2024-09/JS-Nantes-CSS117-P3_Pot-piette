import "./AddRecipe5.css";
import { GoPencil } from "react-icons/go";

function AddRecipe5() {
  return (
    <section className="container-add-5">
      <article>
        <h1>Grillée de mogette</h1>

        <div className="add-5-ingredient">
          <h2>Ingrédients</h2>
          <button type="button" aria-label="Modifier le titre">
            ✏️
          </button>
        </div>
      </article>

      <section className="add-5-container">
        <div className="add-5-1">
          <img src="src\assets\tests\Anchois.png" alt="Anchois" />
          <span>Mogette</span>
        </div>
        <div className="add-5-2">
          <img src="src\assets\tests\Jambon.png" alt="Jambon" />
          <span>Sel</span>
        </div>
        <div className="add-5-2-button">
          <button type="button" aria-label="Ajouter un ingrédient">
            <button type="button"> + </button>
          </button>
        </div>
      </section>

      <article>
        <h2>Préparation de la recette</h2>

        <span>Étape 1</span>
      </article>
      <section className="add-5-recipe">
        <div className="add-5-list-button">
          <a href="./.">
            <GoPencil />
          </a>
          <button type="button" aria-label="Supprimer l'étape">
            ❌
          </button>
        </div>
        <div className="add-5-add">
          <button type="button" aria-label="Ajouter une étape">
            +
          </button>
        </div>
      </section>

      <section>
        <button type="submit" className="submit-button">
          Envoyer
        </button>
      </section>
    </section>
  );
}
export default AddRecipe5;
