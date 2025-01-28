import { FaPlus } from "react-icons/fa6";
import "./addrecipe_2.css";

function AddRecipe_2() {
  return (
    <main className="add-recipe-two">
      <h1>Grillé de mogette</h1>
      <h2>Ingrédients</h2>

      <form encType="multipart/form-data" className="add-ingredient">
        <FaPlus className="more-ingredient" />
        <input type="file" name="avatar" />
      </form>
      <h2>Préparation de la recette</h2>

      <form encType="multipart/form-data" className="add-ingredient">
        <FaPlus className="more-ingredient" />
        <input type="file" name="avatar" />
      </form>
    </main>
  );
}

export default AddRecipe_2;
