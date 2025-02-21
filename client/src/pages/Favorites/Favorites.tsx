import { useEffect, useState } from "react";
import "./Favorites.css";
import useStorage from "../../hooks/useStorage";
import type { RecipeDetailI } from "../../types/detail-recipe";

function Favorites() {
  const [data, setData] = useState<RecipeDetailI[]>([]);

  useEffect(() => {
    const { getStorage } = useStorage();
    const result = getStorage();
    if (result) {
      setData(result);
    }
  }, []);

  return (
    <main className="favorites-page">
      <h1>Vos favoris </h1>
      <ul className="favorites-recipe">
        {data.length > 0 ? (
          data.map((recipe) => (
            <li key={recipe.id}>
              <h3>{recipe.title}</h3>
              <img
                src={`${import.meta.env.VITE_API_URL}${recipe.picture}`}
                alt={`Belle recette de ${recipe.title}`}
              />
            </li>
          ))
        ) : (
          <p>Vous n'avez pas encore de favoris</p>
        )}
      </ul>
    </main>
  );
}

export default Favorites;
