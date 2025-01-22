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

/*function AddRecipe5() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function handleClose() {
    dialogRef.current?.close();
  }

  function handleSubmit() {
    dialogRef.current?.showModal();
  }

  return (
    <main className="add-recipe-5">
      <h1>Grillé de mogette</h1>
      <h2>Ingrédients</h2>

      <form encType="multipart/form-data" className="add-ingredient-5">
        <FaPlus className="more-ingredient-5" onClick={handleSubmit} />
        <input type="file" name="avatar" />
      </form>
      <dialog ref={dialogRef} id="dial-box">
        <button id="close-modal-5-button" type="button" onClick={handleClose}>
          X
        </button>
        <section id="dialog-content-5">
          <section id="data">
            <h2>Ingredient</h2>
            <section className="dialog-ingredient-5">
              <input
                type="text"
                name="ingrédient"
                id=""
                placeholder="Ingrédient"
              />
              <input
                type="number"
                min="0"
                name="Quantité"
                id=""
                placeholder="Quantité"
              />
              <input type="text" name="Unité" id="" placeholder="Unité" />
            </section>
          </section>
        </section>
      </dialog>
      <h2>Préparation de la recette</h2>

      <form encType="multipart/form-data" className="add-ingredient-5">
        <FaPlus className="more-ingredient-5" />
        <input type="file" name="avatar" />
      </form>
    </main>
  );
}

export default AddRecipe5;*/
