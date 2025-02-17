import { useEffect, useState } from "react";
import "./Favorites.css";
import useStorage from "../../hooks/useStorage";
import type { RecipeDetailI } from "../../types/detail-recipe";

function Favorites() {
  const [data, setData] = useState<RecipeDetailI[]>([]);
  const { getStorage } = useStorage();

  useEffect(() => {
    const result = getStorage();
    if (result) {
      setData(result);
    }
  }, [getStorage]);

  return (
    <main className="favorites-page">
      <h1>Gestion de vos favoris </h1>
      <ul>
        {data.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.title}</h3>
            <img src={recipe.picture} alt={recipe.title} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Favorites;
