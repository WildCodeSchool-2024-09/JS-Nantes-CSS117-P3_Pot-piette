import { FaPlus } from "react-icons/fa6";
import "./addrecipe_3.css";
import { useRef } from "react";

function AddRecipe_3() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function handleClose() {
    dialogRef.current?.close();
  }

  function handleSubmit() {
    dialogRef.current?.showModal();
  }

  return (
    <main className="add-recipe-two">
      <h1>Grillé de mogette</h1>
      <h2>Ingrédients</h2>

      <form encType="multipart/form-data" className="add-ingredient">
        <FaPlus className="more-ingredient-three" onClick={handleSubmit} />
        <input type="file" name="avatar" />
      </form>
      <dialog ref={dialogRef} id="dial-box">
        <button id="close-modal-button" type="button" onClick={handleClose}>
          X
        </button>
        <section id="dialog-content">
          <section id="data">
            <h2>Ingredient</h2>
            <section className="dialog-ingredient">
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

      <form encType="multipart/form-data" className="add-ingredient">
        <FaPlus className="more-ingredient" />
        <input type="file" name="avatar" />
      </form>
    </main>
  );
}

export default AddRecipe_3;
