export interface RecipeI {
  id?: number;
  title: string;
  picture: string;
}

export interface RecipeDetailI extends RecipeI {
  nb_parts: number;
  time_to_cook: number;
  preparation_time: number;
  ingredients_list: IngredientI[];
  recipe_steps: StepI[];
  recipe_tag_list: TagI[];
}

interface IngredientI {
  id: number;
  picture: string;
  name: string;
  measure: string;
  quantity: number;
}

interface StepI {
  id: number;
  content: string;
  nb_step: number;
}

interface TagI {
  id: number;
  tag_name: string;
}

interface IngredientII {
  id: number;
  name_ingredient: string;
  picture_ingredient: string;
}

interface IngredientListI {
  id: number;
  quantity: string;
  measure: string;
  name_ingredient: string;
  picture_ingredient: string;
}

export interface RecipeByTag {
  title: string;
  picture: string;
  id: number;
}
