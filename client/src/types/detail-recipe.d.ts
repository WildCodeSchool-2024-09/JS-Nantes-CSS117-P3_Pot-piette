export interface Recipe {
  id: number;
  title: string;
  picture: string;
  preparation_time: number;
}

export interface RecipeDetailI extends Recipe {
  nb_parts: number;
  time_to_cook: number;
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
