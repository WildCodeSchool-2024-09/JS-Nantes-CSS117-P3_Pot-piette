export interface RecipeI {
  id?: number;
  title: string;
  picture: string;
  is_published: number;
  time_to_cook: number;
  nb_parts: number;
  preparation_time: number;
  user_id: number;
}

export interface IngredientsRecipeI {
  recipe_id: number;
  ingredient_id: number;
  quantity: number;
  measure: string;
}

export interface StepI {
  nb_step: number;
  content: string;
  recipe_id: number;
}

export interface TagI {
  tag_id: number;
  recipe_id: number;
}

export interface IngredientUnique {
  name_ingredient: string;
  picture_ingredient: string;
}
