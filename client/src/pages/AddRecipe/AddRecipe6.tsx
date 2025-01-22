import "./AddRecipe6.css";

import { FaPlus } from "react-icons/fa6";
import { GoPencil } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";

function AddRecipe6() {
  return (
    <section className="container-add-6">
      <article>
        <h1>Grillée de mogette</h1>

        <div className="add-6-ingredient">
          <h2>Ingrédients</h2>

          <GoPencil />
        </div>
      </article>

      <section className="add-6-container">
        <div className="add-6-1">
          <img src="src\assets\tests\Anchois.png" alt="Anchois" />
          <span>Mogette</span>
        </div>
        <div className="add-6-2">
          <img src="src\assets\tests\Jambon.png" alt="Jambon" />
          <span>Sel</span>
        </div>
        <div className="add-6-2-button">
          <button type="button" aria-label="Ajouter un ingrédient">
            <FaPlus />
          </button>
        </div>
      </section>

      <article>
        <h2>Préparation de la recette</h2>

        <span>Étape 1</span>
      </article>
      <section className="add-6-recipe">
        <div className="add-6-list-button">
          <GoPencil />

          <RxCross1 />
        </div>
        <div className="add-6-add">
          <FaPlus />
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
export default AddRecipe6;
