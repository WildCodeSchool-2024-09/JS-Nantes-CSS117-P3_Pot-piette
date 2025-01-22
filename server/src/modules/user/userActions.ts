import type { RequestHandler } from "express";
import userRepository from "./userRepository";

// Action GET for get all users

const browse: RequestHandler = async (req, res, next) => {
  try {
    const userActions = await userRepository.readAll();

    res.json(userActions);
  } catch (err) {
    next(err);
  }
};

export default { browse };
