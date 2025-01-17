export interface Recipe {
  title: string;
  picture: string;
  nb_parts: number;
  time_to_cook: number;
  preparation_time: number;
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
