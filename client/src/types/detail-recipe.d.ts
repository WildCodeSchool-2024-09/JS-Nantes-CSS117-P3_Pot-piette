export interface Recipe {
  title: string;
  picture: string;
  preparation_time: number;
}

export interface RecipeDetailI extends Recipe {
  nb_parts: number;
  time_to_cook: number;
  ingredient_list: IngredientI[];
  recipe_steps: StepI[];
  recipe_tag_list: TagI[];
}

interface IngredientI {
  name: string;
  measure: string;
  quantity: number;
}

interface StepI {
  content: string;
  nb_step: number;
}

interface TagI {
  tag_name: string;
}
