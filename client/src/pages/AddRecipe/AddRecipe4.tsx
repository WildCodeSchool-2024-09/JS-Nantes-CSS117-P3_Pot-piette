import "./AddRecipe4.css";
import { GoPencil } from "react-icons/go";
import { Link } from "react-router-dom";
function AddRecipe4() {
  return (
    <section className="addrecip4">
      <section className="title">
        <h1 className="h1-title">Grille de mogette</h1>

        <section className="clickable-crayon">
          <Link to="./.">
            <GoPencil />
          </Link>
        </section>
      </section>
      <h3 className="h3-ingredients">Ingredients</h3>
      <section className="img-ingredients-container">
        <section className="plus1">
          <Link to="./.">
            <img src="/photos/Plus.png" alt="plus" className="plus" />
          </Link>
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

          <Link to="./.">
            <img src="/photos/Plus.png" alt="plus" />
          </Link>
        </section>
      </section>

      <section>
        <section className="button_PS">
          <button id="Precedent" type="button" className="precedent1">
            précédent
          </button>

          <button id="Suivant" type="button" className="suivant1">
            suivant
          </button>
        </section>
      </section>
    </section>
  );
}

export default AddRecipe4;
