import type { RequestHandler } from "express";

const checkFields: RequestHandler = (req, res, next) => {
  const { name, inscription_date, email, password } = req.body;

  if (!name || !inscription_date || !email || !password) {
    res.sendStatus(403);
  } else {
    next();
  }
};

export default { checkFields };
