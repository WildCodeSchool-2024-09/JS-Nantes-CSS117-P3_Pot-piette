import {
  type ChangeEvent,
  type FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import "./addrecipe.css";
import { FaPlus } from "react-icons/fa6";
import IngredientCard from "../../components/IngredientsCard/IngredientCard";
import RecipePrep from "../../components/RecipePrep/RecipePrep";
import type { IngredientII, IngredientListI } from "../../types/detail-recipe";

function AddRecipe() {
  const [ingredient, setIngredient] = useState<null | IngredientII[]>(null);
  useEffect(() => {
    fetch("http://localhost:3310/api/ingredients")
      .then((response) => response.json())
      .then((ingredient) => setIngredient(ingredient));
  }, []);

  const [text, setText] = useState("");
  function handleText(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  const filter = ingredient?.filter((el) =>
    el.name_ingredient.toLowerCase().includes(text.toLowerCase()),
  );

  const dialogRef = useRef<HTMLDialogElement>(null);

  const ingredientFormRef = useRef<HTMLFormElement>(null);

  function handleClose() {
    dialogRef.current?.close();
  }

  function handleSubmit() {
    dialogRef.current?.showModal();
  }

  const selectIngredient = (id: number, name: string) => {
    setSelectedId(id);
    setText(name);
  };

  const ingredientSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formObj = Object.fromEntries(formData.entries());
    const selectedIngredient = ingredient?.find(
      (ingredient) => ingredient.id === selectedId,
    );
    const ingredientData = {
      ...selectedIngredient,
      ...formObj,
    } as IngredientListI;
    setIngredientList((e) => {
      const copy = structuredClone(e);
      copy.push(ingredientData);
      return copy;
    });
    setSelectedId(null);
    handleClose();
    setText("");
    ingredientFormRef.current?.reset();
  };

  const resetSearch = () => {
    setText("");
    setSelectedId(null);
    ingredientFormRef.current?.reset();
  };

  const [tag, setTags] = useState<string>("");
  const [parts, setParts] = useState("");
  const [prepHours, setPrepHours] = useState("");
  const [prepMinutes, setPrepMinutes] = useState("");
  const [cookHours, setCookHours] = useState("");
  const [cookMinutes, setCookMinutes] = useState("");
  const [ingredientList, setIngredientList] = useState<IngredientListI[]>([]);
  const [steps, setSteps] = useState<
    { id: number; content: string; nb_step: number }[]
  >([]);

  const [selectedId, setSelectedId] = useState<null | number>(null);

  const handleTag = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;
    setTags(value);
  };

  const handleRecette = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const recipeData = {
      file: data.file,
      title: data.title,
      nb_parts: data.nb_parts,
      preparation_time: Number(prepHours) * 60 + Number(prepMinutes),
      time_to_cook: Number(cookHours) * 60 + Number(cookMinutes),
      recipe_steps: steps,
      ingredients_list: ingredientList,
      user_id: 1,
      recipe_tag_list: [{ tag_id: tag }],
    };

    fetch(`${import.meta.env.VITE_API_URL}/api/recipe/create`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(recipeData),
    })
      .then((res) => console.warn(res.ok))
      .catch((err) => console.error(err));
  };

  return (
    <main className="add-recipe">
      <h1>Créer une recette </h1>
      <form onSubmit={handleRecette}>
        <h2>Intitulé de la recette</h2>
        <input type="text" name="title" placeholder="Votre recette" />
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

        <h2>Nombre de part</h2>
        <input
          id="part"
          type="number"
          name="nb_parts"
          step="1"
          min="0"
          max="10"
          required
          value={parts}
          onChange={(e) => setParts(e.target.value)}
        />
        <p>Personnes</p>
        <h2>Temps de préparation</h2>

        <input
          id="prep-hour"
          type="number"
          step="1"
          min="0"
          max="10"
          required
          value={prepHours}
          onChange={(e) => setPrepHours(e.target.value)}
        />
        <label htmlFor="prep-hours">Heures</label>

        <input
          id="prep-minutes"
          type="number"
          step="1"
          min="0"
          max="59"
          required
          value={prepMinutes}
          onChange={(e) => setPrepMinutes(e.target.value)}
        />
        <label htmlFor="prep-minutes">Minutes</label>

        <h2>Temps de Cuisson</h2>

        <input
          id="cook-hour"
          type="number"
          step="1"
          min="0"
          max="10"
          required
          value={cookHours}
          onChange={(e) => setCookHours(e.target.value)}
        />
        <label htmlFor="person">Heures</label>
        <input
          id="cook-minutes"
          type="number"
          step="1"
          min="0"
          max="59"
          required
          value={cookMinutes}
          onChange={(e) => setCookMinutes(e.target.value)}
        />
        <label htmlFor="person">Minutes</label>

        <h2>Photos</h2>

        <input type="file" name="file" />
        <button type="submit">Valider</button>

        <h2>Ingrédients</h2>
        <button type="button" className="add-ingredient" onClick={handleSubmit}>
          <FaPlus className="more-ingredient-three" />
          <div className="modal" />
        </button>
        {ingredientList.map((el) => {
          return (
            <IngredientCard
              key={el.id}
              id={el.id}
              name_ingredient={el.name_ingredient}
              picture_ingredient={el.picture_ingredient}
            />
          );
        })}
        <RecipePrep setSteps={setSteps} steps={steps} />
        <button type="submit">Valider</button>
      </form>
      {/* A déplacer */}
      <dialog ref={dialogRef} id="dial-box">
        <button id="close-modal-button" type="button" onClick={handleClose}>
          X
        </button>
        <section id="dialog-content">
          <section id="data">
            <section className="dialog-ingredient">
              <button
                className={selectedId ? "displayed" : "not-displayed"}
                type="button"
                onClick={resetSearch}
              >
                👈
              </button>
              <input
                className={selectedId ? "not-displayed" : "displayed"}
                type="text"
                name="ingrédient"
                placeholder="Ingrédient"
                value={text}
                onChange={handleText}
              />
              <form onSubmit={ingredientSubmit} ref={ingredientFormRef}>
                {text.trim() !== "" ? (
                  filter?.map((el) => (
                    <button
                      key={el.id}
                      type="button"
                      onClick={() =>
                        selectIngredient(el.id, el.name_ingredient)
                      }
                    >
                      <IngredientCard
                        key={el.id}
                        name_ingredient={el.name_ingredient}
                        picture_ingredient={el.picture_ingredient}
                        id={el.id}
                      />
                    </button>
                  ))
                ) : (
                  <p>Aucun ingrédient recherché.</p>
                )}
                <section className={selectedId ? "displayed" : "not-displayed"}>
                  <input
                    type="number"
                    min="0"
                    name="quantity"
                    id=""
                    placeholder="Quantité"
                  />
                  <input type="text" name="measure" id="" placeholder="Unité" />
                  <button type="submit">Valider</button>
                </section>
              </form>
            </section>
          </section>
        </section>
      </dialog>
    </main>
  );
}

export default AddRecipe;
