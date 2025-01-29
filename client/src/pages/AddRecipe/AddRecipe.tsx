import { type ChangeEvent, useRef, useState } from "react";
import "./addrecipe.css";
import { FaPlus } from "react-icons/fa6";

function AddRecipe() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dialogStep = useRef<HTMLDialogElement>(null);

  function handleClose() {
    dialogRef.current?.close();
  }
  function handleCloseStep() {
    dialogStep.current?.close();
  }

  function handleSubmit() {
    dialogRef.current?.showModal();
  }
  function handleStep() {
    dialogStep.current?.showModal();
  }

  const [tag, setTags] = useState<string>("");

  const handleTag = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;
    setTags(value);
  };

  const handleRecette = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const title = data.title;
    const category = tag;
    console.warn("data = ", data);
    console.warn("title =", title);
    console.warn("tag = ", category);

    const recette = {
      title,
      picture: "omelette.jpg",
      nb_parts: 4,
      is_published: 0,
      time_to_cook: 10,
      preparation_time: 45,
      user_id: 3,
      ingredients_list: [
        {
          id: 1,
          measure: "pièce",
          quantity: 6,
        },
        {
          id: 4,
          measure: "tranches",
          quantity: 3,
        },
      ],
      recipe_steps: [
        {
          id: 1,
          content:
            "Prendre le pain de votre choix, cela peut être un pain à burger industriel même si l'on aurait envie de vous conseiller un buns maison ou de chez votre boulanger préféré. Coupez le en deux. ",
          nb_step: 1,
        },
        {
          id: 2,
          content:
            "Emincez un oignon (rouge ou blanc) et faites le revenir dans une poêle légèrement beurré jusquà ce qu'il ai une belle couleur légèrement brune. Réservez.",
          nb_step: 2,
        },
      ],
      recipe_tag_list: [
        {
          tag_id: category,
        },
      ],
    };
    fetch(`${import.meta.env.VITE_API_URL}/api/recipe/create`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(recette),
    })
      .then((response) => console.warn(response))
      .catch((err) => console.error(err));
  };

  return (
    <main className="add-recipe">
      <h1>Créer une recette </h1>
      <form onSubmit={handleRecette}>
        <h2>Intitulé de la recette</h2>
        <input type="text" name="title" placeholder="Votre recette" />
        <form action="/submit" method="POST">
          <div className="categories">
            <button
              type="button"
              name="category"
              value="1"
              className="category"
              onClick={handleTag}
            >
              <img src="" alt="Rapide" />
              <p>Rapide</p>
            </button>
            <button
              type="button"
              name="category"
              value="2"
              className="category"
              onClick={handleTag}
            >
              <img src="" alt="Plat" />
              <p>Plat</p>
            </button>
            <button
              type="button"
              name="category"
              value="3"
              className="category"
              onClick={handleTag}
            >
              <img src="" alt="Salade" />
              <p>Salade</p>
            </button>
            <button
              type="button"
              name="category"
              value="4"
              className="category"
              onClick={handleTag}
            >
              <img src="" alt="Végé" />
              <p>Végé</p>
            </button>
            <button
              type="button"
              name="category"
              value="5"
              className="category"
              onClick={handleTag}
            >
              <img src="" alt="Desserts" />
              <p>Dessert</p>
            </button>
            <button
              type="button"
              name="category"
              value="6"
              className="category"
              onClick={handleTag}
            >
              <img src="" alt="Cocktail" />
              <p>Cocktail</p>
            </button>
          </div>
        </form>
        <button type="submit">Valider</button>
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
        <FaPlus className="more-ingredient" onClick={handleStep} />
        <input type="file" name="avatar" />
      </form>
      <dialog ref={dialogStep} id="dial-box">
        <button id="close-modal-button" type="button" onClick={handleCloseStep}>
          X
        </button>
        <section id="dialog-content">
          <section id="data">
            <h2>Etape</h2>
            <section className="dialog-ingredient">
              <textarea id="etape" name="story" />
              <label>
                <input type="radio" value="option1" checked={true} />
                Ingrédient à modifier
              </label>
              <input type="text" name="Quantité" id="" placeholder="Quantité" />
            </section>
          </section>
        </section>
      </dialog>
    </main>
  );
}

export default AddRecipe;
