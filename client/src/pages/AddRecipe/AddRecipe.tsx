import "./addrecipe.css";
import { FaPlus } from "react-icons/fa6";

function AddRecipe() {
  return (
    <main className="add-recipe">
      <h1>Créer une recette </h1>
      <h2>Intitulé de la recette</h2>
      <form action="/submit" method="POST">
        <div className="categories">
          <button
            type="submit"
            name="category"
            value="Rapide"
            className="category"
          >
            <img src="" alt="Rapide" />
            <p>Rapide</p>
          </button>
          <button
            type="submit"
            name="category"
            value="Plat"
            className="category"
          >
            <img src="cutlery-icon.png" alt="Plat" />
            <p>Plat</p>
          </button>
          <button
            type="submit"
            name="category"
            value="Végé"
            className="category"
          >
            <img src="" alt="Végé" />
            <p>Végé</p>
          </button>
          <button
            type="submit"
            name="category"
            value="Cocktail"
            className="category"
          >
            <img src="" alt="Salade" />
            <p>Salade</p>
          </button>
          <button
            type="submit"
            name="category"
            value="Salade"
            className="category"
          >
            <img src="" alt="Cocktail" />
            <p>Cocktail</p>
          </button>
          <button
            type="submit"
            name="category"
            value="Desserts"
            className="category"
          >
            <img src="cake-icon.png" alt="Desserts" />
            <p>Desserts</p>
          </button>
        </div>
      </form>

      <h2>Nombre de part</h2>
      <form action="part-number" method="post" className="number-selector">
        <input
          id="part"
          type="number"
          name="part"
          step="1"
          min="0"
          max="10"
          required
        />
        <label htmlFor="part">Personnes</label>
      </form>
      <h2>Temps de préparation</h2>
      <form action="prep-number" method="post" className="number-selector">
        <input
          id="prep-hour"
          type="number"
          name="prep"
          step="1"
          min="0"
          max="10"
          required
        />
        <label htmlFor="person">Heures</label>
        <input
          id="prep-minutes"
          type="number"
          name="prep"
          step="1"
          min="0"
          max="59"
          required
        />
        <label htmlFor="person">Minutes</label>
      </form>
      <h2>Temps de Cuisson</h2>
      <form action="cook-number" method="post" className="number-selector">
        <input
          id="cook-hour"
          type="number"
          name="prep"
          step="1"
          min="0"
          max="10"
          required
        />
        <label htmlFor="person">Heures</label>
        <input
          id="cook-minutes"
          type="number"
          name="prep"
          step="1"
          min="0"
          max="59"
          required
        />
        <label htmlFor="person">Minutes</label>
      </form>
      <h2>Photos</h2>

      <form
        action="/profile"
        method="post"
        encType="multipart/form-data"
        className="photo-upload"
      >
        <FaPlus className="add-photo" />
        <input type="file" name="avatar" />
      </form>
    </main>
  );
}

export default AddRecipe;
