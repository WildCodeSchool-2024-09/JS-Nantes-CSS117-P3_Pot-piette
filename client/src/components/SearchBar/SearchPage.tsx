import { useState } from "react";
import RecipeList from "./RecipeList";
import SearchBar from "./SearchBar";

const SearchPage: React.FC = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (searchQuery: string) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/recipes?query=${encodeURIComponent(searchQuery)}`,
      );
      if (!response.ok)
        throw new Error("Erreur lors de la récupération des recettes");

      const data = await response.json();
      setRecipes(data.recipes);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Rechercher une recette</h1>
      <SearchBar onSearch={fetchRecipes} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default SearchPage;
