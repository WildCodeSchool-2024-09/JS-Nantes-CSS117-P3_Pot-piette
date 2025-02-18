import {
  type ChangeEvent,
  type FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import "./addrecipe.css";
import { FaPlus } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { LiaGlassMartiniAltSolid } from "react-icons/lia";
import { LuCakeSlice, LuSalad } from "react-icons/lu";
import { PiCarrot, PiForkKnife, PiHamburger } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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

  const navigate = useNavigate();

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

    const imageFormData = new FormData();
    imageFormData.append("file", data.file);

    fetch(`${import.meta.env.VITE_API_URL}/api/recipe/image`, {
      method: "POST",
      body: imageFormData,
    })
      .then((res) => res.json())
      .then((response) => {
        const recipeData = {
          picture: `/assets/uploads/recipes/${response.filename}`,
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
            "Content-Type": "application/json",
          },
          body: JSON.stringify(recipeData),
        })
          .then((res) => console.warn(res.ok))
          .catch((err) => console.error(err));
        toast.success("Votre recette à été ajoutée avec succès");
        setTimeout(() => {
          navigate("/");
        }, 3000);
      });
  };

  return (
    <main>
      <section className="add-recipe">
        <h1>Créer une recette </h1>
        <form onSubmit={handleRecette} className="recipe-form">
          <h2>Nom de la recette</h2>
          <input
            type="text"
            name="title"
            placeholder="Votre recette"
            className="recipe-title"
          />

          <h2>Choisissez une catégorie</h2>
          <div className="tags-container">
            <button
              className={tag === "1" ? "category choosen-tag" : "category"}
              type="button"
              name="category"
              value="1"
              onClick={handleTag}
            >
              <PiHamburger className="tag-icons" />
              <p>Rapide</p>
            </button>

            <button
              type="button"
              name="category"
              value="2"
              className={tag === "2" ? "category choosen-tag" : "category"}
              onClick={handleTag}
            >
              <PiForkKnife className="tag-icons" />
              <p>Plat</p>
            </button>
            <button
              type="button"
              name="category"
              value="3"
              className={tag === "3" ? "category choosen-tag" : "category"}
              onClick={handleTag}
            >
              <LuSalad className="tag-icons" />
              <p>Salade</p>
            </button>
            <button
              type="button"
              name="category"
              value="4"
              className={tag === "4" ? "category choosen-tag" : "category"}
              onClick={handleTag}
            >
              <PiCarrot className="tag-icons" />
              <p>Végé</p>
            </button>
            <button
              type="button"
              name="category"
              value="5"
              className={tag === "5" ? "category choosen-tag" : "category"}
              onClick={handleTag}
            >
              <LuCakeSlice className="tag-icons" />
              <p>Dessert</p>
            </button>
            <button
              type="button"
              name="category"
              value="6"
              className={tag === "6" ? "category choosen-tag" : "category"}
              onClick={handleTag}
            >
              <LiaGlassMartiniAltSolid className="tag-icons" />
              <p>Cocktail</p>
            </button>
          </div>

          <div className="parts-times-container">
            <section className="part">
              <h2>Nombre de part : </h2>
              <input
                id="part"
                type="number"
                name="nb_parts"
                step="1"
                min="1"
                max="100"
                required
                value={parts}
                onChange={(e) => setParts(e.target.value)}
              />
              <label htmlFor="persons">Personnes</label>
            </section>
            <section className="prep">
              <h2>Temps de préparation :</h2>

              <input
                id="prep-hour"
                type="number"
                step="1"
                min="0"
                max="100"
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

              <h2>Temps de Cuisson : </h2>

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
            </section>
          </div>

          <h2>Photos</h2>
          <div className="file-upload">
            <label className="custom-file-upload">
              <input type="file" name="file" />
              <FaPlus className="add-button" />
            </label>

            <button type="submit">Valider</button>
          </div>

          <h2>Ingrédients</h2>
          <div className="ingredient-container">
            <button
              type="button"
              className="add-ingredient-step"
              onClick={handleSubmit}
            >
              <FaPlus className="add-button" />
            </button>
            <section className="ingredient-list">
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
            </section>
          </div>
          <RecipePrep setSteps={setSteps} steps={steps} />
          <button type="submit" className="all-recipe-button ">
            Valider
          </button>
        </form>

        {/* A déplacer */}
        <dialog ref={dialogRef} id="dial-box">
          <div className="dialog-header">
            <button
              className={selectedId ? "displayed" : "not-displayed"}
              type="button"
              onClick={resetSearch}
            >
              Annuler
            </button>
            <button
              className="close-modal-button"
              type="button"
              onClick={handleClose}
            >
              <IoMdClose />
            </button>
          </div>
          <section id="dialog-content">
            <section id="data">
              <section className="dialog-ingredient">
                <form
                  onSubmit={ingredientSubmit}
                  ref={ingredientFormRef}
                  className="ingredient-form"
                >
                  {text.trim() !== "" ? (
                    filter?.map((el) => (
                      <button
                        key={el.id}
                        type="button"
                        onClick={() =>
                          selectIngredient(el.id, el.name_ingredient)
                        }
                        className={`ingredient-button ${selectedId === el.id ? "is-selected" : "not-selected"}`}
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
                  <input
                    className={selectedId ? "not-displayed" : "displayed"}
                    type="text"
                    name="ingrédient"
                    placeholder="Choisissez un ingrédient"
                    value={text}
                    onChange={handleText}
                  />
                  <section
                    className={
                      selectedId
                        ? "quantity-container displayed"
                        : " quantity-container not-displayed"
                    }
                  >
                    <input
                      type="number"
                      min="1"
                      name="quantity"
                      id=""
                      placeholder="Qté ?"
                      required
                    />

                    <select id="select-measure" name="measure" required>
                      <option value="">-- Sélectionner --</option>
                      <optgroup label="Poids">
                        <option value="g">Gramme (g)</option>
                        <option value="kg">Kilogramme (kg)</option>
                        <option value="mg">Milligramme (mg)</option>
                      </optgroup>
                      <optgroup label="Volume">
                        <option value="ml">Millilitre (ml)</option>
                        <option value="cl">Centilitre (cl)</option>
                        <option value="dl">Décilitre (dl)</option>
                        <option value="l">Litre (L)</option>
                      </optgroup>
                      <optgroup label="Unités usuelles">
                        <option value="c.c">Cuillère à café (c.c)</option>
                        <option value="c.s">Cuillère à soupe (c.s)</option>
                        <option value="verre">Verre</option>
                        <option value="tasse">Tasse</option>
                        <option value="bol">Bol</option>
                      </optgroup>
                      <optgroup label="Unités spécifiques">
                        <option value="tranche">Tranche</option>
                        <option value="morceau">Morceau</option>
                        <option value="pincee">Pincée</option>
                        <option value="sachet">Sachet</option>
                        <option value="gousse">Gousse</option>
                        <option value="zeste">Zeste</option>
                        <option value="filet">Filet</option>
                        <option value="brique">Brique</option>
                      </optgroup>
                    </select>
                  </section>
                  <button className="all-recipe-button" type="submit">
                    Valider
                  </button>
                </form>
              </section>
            </section>
          </section>
        </dialog>
      </section>
    </main>
  );
}

export default AddRecipe;
