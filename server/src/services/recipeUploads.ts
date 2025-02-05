import type { RequestHandler } from "express";
import multer from "multer";

const storage = multer.diskStorage({
  destination: "./public/assets/uploads/recipes",
  filename: (req, file, cb) => {
    const prefix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, `${prefix}-${file.originalname}`);
  },
});
export const upload = multer({ storage });

export const recipeUpload: RequestHandler = (req, res, next) => {
  try {
    if (req.file?.filename) {
      req.body.picture = `/assets/uploads/recipes/${req.file.filename}`;
      next();
    } else {
      res
        .status(404)
        .send({ message: "An error occured during the transfert" });
    }
  } catch (err) {
    console.error(err);
  }
};
