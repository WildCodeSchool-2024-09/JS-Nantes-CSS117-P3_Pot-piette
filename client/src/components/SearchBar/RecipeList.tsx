interface Recipe {
  id: number;
  title: string;
  picture: string;
  preparation_time: number;
}

interface RecipeListProps {
  recipes: Recipe[];
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
  return (
    <section>
      {recipes.length > 0 ? (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <h3>{recipe.title}</h3>
              <img src={recipe.picture} alt={recipe.title} />
              <h3>{recipe.preparation_time}</h3>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucune recette trouvée.</p>
      )}
    </section>
  );
};

export default RecipeList;
