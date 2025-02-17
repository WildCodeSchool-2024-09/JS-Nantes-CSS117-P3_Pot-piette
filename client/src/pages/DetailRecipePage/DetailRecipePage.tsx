import "./detail-recipe-page.css";
import { useContext, useEffect, useState } from "react";
import { GoClock } from "react-icons/go";
import {
  IoIosAdd,
  IoIosRemove,
  IoIosStar,
  IoIosStarOutline,
  IoMdHeart,
  IoMdHeartEmpty,
  IoMdShare,
} from "react-icons/io";
import { useLoaderData } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import useStorage from "../../hooks/useStorage";
import type { RecipeDetailI } from "../../types/detail-recipe";

function DetailRecipePage() {
  const data = useLoaderData() as RecipeDetailI[];
  const recipeDetail = data[0];
  const userContext = useContext(UserContext);
  const [isClicked, setIsClicked] = useState(false);
  const { getStorage, handleStorage } = useStorage();

  let isAuthenticated = false;
  if (userContext) {
    isAuthenticated = userContext.isAuthenticated;
  }

  useEffect(() => {
    const storage: RecipeDetailI[] | null = getStorage();
    if (!storage) return;

    const isRecipeInside = storage.find((el) => el.id === recipeDetail.id);
    if (isRecipeInside) {
      setIsClicked(true);
    }
  }, [recipeDetail.id, getStorage]);

  function handleClick() {
    setIsClicked(!isClicked);
    return handleStorage(recipeDetail, isClicked);
  }

  return (
    <main>
      <header className="header-detail-recipe">
        <h1 className="title-detail-recipe">{recipeDetail.title}</h1>
        <section className="info-detail-recipe">
          <p>
            <IoIosStar />
            <IoIosStarOutline />
            <IoIosStarOutline />
            <IoIosStarOutline />
            <IoIosStarOutline />
          </p>
          <p>
            <GoClock />
            {`${recipeDetail.time_to_cook} mn`}
          </p>
        </section>
        <img
          src={recipeDetail.picture}
          alt={`Representation of ${recipeDetail.title} recipe`}
          className="img-detail-recipe"
        />
        <section className="share-and-like-detail-recipe">
          {isAuthenticated && (
            <button type="button" onClick={handleClick}>
              {isClicked ? <IoMdHeart /> : <IoMdHeartEmpty />}
            </button>
          )}

          {recipeDetail.recipe_tag_list.map((tag) => (
            <p key={tag.id}>{tag.tag_name}</p>
          ))}

          <IoMdShare />
        </section>
      </header>

      <section className="ingredients-detail-recipe-container">
        <h2>Ingredients</h2>
        <section className="button-parts-detail-recipe">
          <button type="button">
            <IoIosRemove />
          </button>
          <p>{`${recipeDetail.nb_parts} personnes`}</p>
          <button type="button">
            <IoIosAdd />
          </button>
        </section>
        <ul>
          {recipeDetail.ingredients_list.map((ingredient) => {
            return (
              <li key={ingredient.id}>
                <img
                  src={ingredient.picture}
                  alt={`Representation of ${ingredient.name} ingredient`}
                />
                <section>
                  <p>{ingredient.name}</p>
                  <p>
                    {ingredient.quantity} {ingredient.measure}
                  </p>
                </section>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="preparation-detail-recipe-container">
        <h2>Préparation</h2>
        <ul>
          {recipeDetail.recipe_steps.map((step) => {
            return (
              <li key={step.id}>
                <h3>{`Etape ${step.nb_step}`}</h3>
                <p>{step.content}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}

export default DetailRecipePage;
