import type { RecipeDetailI } from "../types/detail-recipe";

function useStorage() {
  function getStorage() {
    const actualStorage = localStorage.getItem("recipe");
    if (actualStorage) {
      return JSON.parse(actualStorage);
    }
    return null;
  }

  function setStorage(recipe: RecipeDetailI[]) {
    return localStorage.setItem("recipe", JSON.stringify(recipe));
  }

  function handleStorage(data: RecipeDetailI, isClicked: boolean) {
    const actualStorage: RecipeDetailI[] | null = getStorage();

    if (!actualStorage) {
      return setStorage([data]);
    }

    if (isClicked) {
      const filteredArray = actualStorage.filter((el) => el.id !== data.id);
      return setStorage(filteredArray);
    }

    return setStorage([...actualStorage, data]);
  }

  return { getStorage, handleStorage };
}

export default useStorage;
