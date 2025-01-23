import "./AddRecipe_5.css";
import { useRef } from "react";
import { FaPlus } from "react-icons/fa6";
import { GoPencil } from "react-icons/go";

function AddRecipe_5() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function handleClose() {
    dialogRef.current?.close();
  }

  function handleSubmit() {
    dialogRef.current?.showModal();
  }
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
        <form encType="multipart/form-data" className="add-ingredient">
          <FaPlus className="more-ingredient-three" onClick={handleSubmit} />
          <input type="file" name="avatar" />
        </form>
        <dialog ref={dialogRef} id="dial-box">
          <button id="close-modal-button" type="button" onClick={handleClose}>
            X
          </button>
          <section id="dialog-content-5">
            <section id="data">
              <h2>Ingrédient</h2>
              <section className="dialog-etape">
                <input
                  type="text"
                  name="Ingrédient"
                  id=""
                  placeholder="Ajouter votre ingrédient"
                />

                <button className="button-5-validate" type="button">
                  Ajouter
                </button>
              </section>
            </section>
          </section>
        </dialog>
      </section>
      <article>
        <h2>Préparation de la recette</h2>
        <span>Étape 1</span>
      </article>
      <form encType="multipart/form-data" className="add-ingredient">
        <FaPlus className="more-ingredient-three" onClick={handleSubmit} />
        <input type="file" name="avatar" />
      </form>
      <dialog ref={dialogRef} id="dial-box">
        <button id="close-modal-button" type="button" onClick={handleClose}>
          X
        </button>
        <section id="dialog-content-5">
          <section id="data">
            <h2>Etape</h2>
            <section className="dialog-etape">
              <input
                type="text"
                name="Etape"
                id=""
                placeholder="Ajouter votre étape"
              />

              <button className="button-5-validate" type="button">
                Ajouter
              </button>
            </section>
          </section>
        </section>
      </dialog>
    </section>
  );
}
export default AddRecipe_5;
