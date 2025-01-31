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
import { verifyToken } from "./modules/authActions";
import userActions from "./modules/user/userActions";
import verify from "./services/verify";

router.get("/api/users", userActions.browse);
router.post(
  "/api/users",
  verify.checkFields,
  authActions.hashPassword,
  userActions.add,
);
router.put("/api/users/:id", verifyToken, userActions.edit);
router.delete("/users/:id", verifyToken, userActions.deleteUser);

/* ************************************************************************* */

import authActions from "./modules/authActions";

router.post("/api/signup", authActions.hashPassword, userActions.add);
router.post("/api/login", verifyToken, authActions.login);

export default router;
