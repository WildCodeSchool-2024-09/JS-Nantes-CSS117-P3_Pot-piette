import type { RequestHandler } from "express";

const checkFields: RequestHandler = (req, res, next) => {
  const {
    name,
    age,
    genre,
    picture,
    inscription_date,
    email,
    password,
    is_admin,
    is_modo,
  } = req.body;

  if (
    !name ||
    !age ||
    !genre ||
    !picture ||
    !inscription_date ||
    !email ||
    !password ||
    !is_admin ||
    !is_modo
  ) {
    res.sendStatus(403);
  } else {
    next();
  }
};

export default { checkFields };
