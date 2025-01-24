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

router.get("/api/recipes", recipeActions.browse);
router.get("/api/recipes/:id", recipeActions.read);
router.post("/api/recipe/create", recipeActions.add);

/* ************************************************************************* */
import ingredientsActions from "./modules/ingredients/ingredientsActions";

router.get("/api/ingredients", ingredientsActions.browse);

/* ************************************************************************* */

import userActions from "./modules/user/userActions";

router.get("/api/users", userActions.browse);
router.post("/api/users", authActions.hashPassword, userActions.add);
router.put("/api/users/:id", userActions.edit);
router.delete("/users/:id", userActions.deleteUser);

/* ************************************************************************* */

import authActions from "./modules/authActions";

router.post("/api/login", authActions.login);

export default router;
