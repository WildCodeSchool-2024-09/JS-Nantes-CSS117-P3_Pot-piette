import "./AddRecipe4.css";
import { GoPencil } from "react-icons/go";

function AddRecipe4() {
  return (
    <section className="addrecip4">
      <section className="title">
        <h1 className="h1-title">Grille de mogette</h1>

        <section className="clickable-crayon">
          <a href="./.">
            <GoPencil />
          </a>
        </section>
      </section>
      <h3 className="h3-ingredients">Ingredients</h3>
      <section className="img-ingredients-container">
        <section className="plus1">
          <a href="./.">
            <img src="/photos/Plus.png" alt="plus" className="plus" />
          </a>
        </section>

        <section className="plat1">
          <img src="/photos/image (1).png" alt="plat1" />
          <h5 className="plat-1">mogette</h5>
        </section>
        <section className="plat2">
          <img src="/photos/image (1).png" alt="plat2" />
          <h5 className="plat-2">sel</h5>
        </section>
      </section>

      <section className="préparation">
        <section>
          <h3>Preparation de la recette</h3>

          <a href="./.">
            <img src="/photos/Plus.png" alt="plus" />
          </a>
        </section>
      </section>

      <section>
        <section className="buttons">
          <button type="button" className="precedent">
            precedent
          </button>

          <button type="button" className="suivant">
            suivant
          </button>
        </section>
      </section>
    </section>
  );
}

export default AddRecipe4;
