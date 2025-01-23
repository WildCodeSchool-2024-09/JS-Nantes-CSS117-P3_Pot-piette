export interface RecipeI {
  id?: number;
  title: string;
  picture: string;
  is_published: number;
  time_to_cook: number;
  nb_parts: number;
  preparation_time: number;
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
