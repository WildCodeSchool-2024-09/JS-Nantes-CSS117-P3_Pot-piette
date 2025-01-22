import "./AddRecipe_5.css";
import { FaPlus } from "react-icons/fa6";
import { GoPencil } from "react-icons/go";

function AddRecipe5() {
  return (
    <section className="container-add-5">
      <article>
        <h1>Grillée de mogette</h1>

        <div className="add-5-ingredient">
          <h2>Ingrédients</h2>

          <GoPencil />
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
            <FaPlus />
          </button>
        </div>
      </section>
      <article>
        <h2>Préparation de la recette</h2>
        <span>Étape 1</span>
      </article>
    </section>
  );
}
export default AddRecipe5;
