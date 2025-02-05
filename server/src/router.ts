import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */
import recipeActions from "./modules/recipe/recipeActions";
// import { recipeUpload, upload } from "./recipeUploads";

router.post("/api/recipe/create", recipeActions.add);
router.post("/api/recipe/title", recipeActions.addTitle);
router.get("/api/recipes/search", recipeActions.search);
router.get("/api/recipes", recipeActions.browse);
router.get("/api/recipes/:id", recipeActions.read);
router.get("/api/recipe/latest", recipeActions.latest);

/* ************************************************************************* */
import ingredientsActions from "./modules/ingredients/ingredientsActions";

router.get("/api/ingredients", ingredientsActions.browse);
router.post("/api/ingredients", ingredientsActions.add);

/* ************************************************************************* */
import tagsActions from "./modules/tags/tagActions";

router.get("/api/tags/:id", tagsActions.read);
/* ************************************************************************* */
import userActions from "./modules/user/userActions";
import verify from "./services/verify";

router.get("/api/users", userActions.browse);
router.post(
  "/api/users",
  verify.checkFields,
  authActions.hashPassword,
  userActions.add,
);
router.put("/api/users/:id", userActions.edit);
router.delete("/api/users/:id", userActions.deleteUser);

/* ************************************************************************* */

import authActions from "./modules/authActions";
router.post("/api/login", authActions.login);

export default router;
