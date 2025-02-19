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
      <h1>Gestion de vos favoris </h1>
      <ul className="favorites-recipe">
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
