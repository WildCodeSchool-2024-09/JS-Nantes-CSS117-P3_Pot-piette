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
const storage = multer.diskStorage({
  destination: "./public/assets/uploads/recipes",
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

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
import validation from "./services/validation";
import verify from "./services/verify";

router.get("/api/users", userActions.browse);
router.post(
  "/api/users",
  validation.registerValidator,
  validation.validator,
  verify.checkFields,
  authActions.hashPassword,
  userActions.add,
);
router.put("/api/users/:id", userActions.edit);
router.delete("/api/users/:id", userActions.deleteUser);

/* ************************************************************************* */

import multer from "multer";
import authActions from "./modules/authActions";
router.post("/api/login", authActions.login);

export default router;
