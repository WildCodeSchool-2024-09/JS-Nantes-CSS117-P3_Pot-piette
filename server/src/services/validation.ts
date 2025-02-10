import type { RequestHandler } from "express";
import { body, validationResult } from "express-validator";

export const registerValidator = [
  body("email", "The email field cannot be Empty").not().isEmpty(),
  body("email", "Invalid email").isEmail(),
  body(
    "password",
    "Must have a length of 8 characters, at least one uppercase letter, one number, one special character",
  ).matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/),
];

const validator: RequestHandler = (req, res, next) => {
  const errors = validationResult(req);

  console.warn(errors);

  if (errors.isEmpty()) {
    next();
  } else {
    res.status(422).json({ errors: errors.array() });
  }
};

export default { registerValidator, validator };
