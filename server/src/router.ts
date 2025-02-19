import express, { type RequestHandler } from "express";

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
import { upload } from "./services/recipeUploads";

router.post(
  "/api/recipe/image",
  upload.single("file"),
  recipeActions.imageUpload,
);
router.post("/api/recipe/create", recipeActions.add);

router.post("/api/recipe/title", recipeActions.addTitle);
router.get("/api/recipes/search", recipeActions.search);
router.get("/api/recipes", recipeActions.browse);
router.get("/api/recipes/:id", recipeActions.read);
router.get("/api/recipe/latest", recipeActions.latest);
router.put("/api/recipe/update/:id", recipeActions.update);
router.delete("/api/recipe/delete/:id", recipeActions.deleteRecipe);

/* ************************************************************************* */
import ingredientsActions from "./modules/ingredients/ingredientsActions";

router.get("/api/ingredients", ingredientsActions.browse);
router.post("/api/ingredients", ingredientsActions.add);
router.put("/api/ingredients/:id", ingredientsActions.edit);
router.delete("/api/ingredients/:id", ingredientsActions.deleteIngredient);

/* ************************************************************************* */
import tagsActions from "./modules/tags/tagActions";

router.get("/api/tags/:id", tagsActions.read);
/* ************************************************************************* */
import userActions from "./modules/user/userActions";

import { registerValidator, validator } from "./services/validation";

router.get("/api/users", userActions.browse);
router.get("/api/user/published/:id", userActions.readByStatus);
router.get("/api/user/pending/:id", userActions.readByStatusPending);
router.post(
  "/api/users",
  registerValidator,
  validator,
  authActions.hashPassword,
  userActions.add,
);
router.put("/api/users/:id", userActions.edit);
router.delete("/api/users/:id", userActions.deleteUser);

/* ************************************************************************* */

import adminActions from "./modules/admin/adminActions";
import authActions from "./modules/authActions";
router.post("/api/login", authActions.login);
router.post("/api/user/verify", authActions.verifyToken, authActions.isLogged);

/*
 ╔════════════════════════════════════════════════════╗
 ║  🔒🔑✨   🚧 AUTHENTICATION WALL 🚧   ✨🔑🔒   ║
 ║                                                    ║
 ║       Authentication is needed below here          ║
 ╚════════════════════════════════════════════════════╝
 */

router.use("/api", authActions.verifyToken);
router.use("/api/admin", authActions.verifyToken, authActions.isAdmin);

router.get("/api/admin/recipes-count", adminActions.countRecipes);
router.get("/api/admin/recipes-pending", adminActions.browseRecipes);
router.get("/api/admin/recipes-pending-count", adminActions.countPending);

export default router;
