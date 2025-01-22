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

const add: RequestHandler = async (req, res, next) => {
  try {
    const addUser = await userRepository.create(req.body);

    if (addUser) {
      res
        .status(201)
        .send(`The user ${req.body.name} has been added succesfully`);
    } else {
      res.status(404).send("An error has occured");
    }
  } catch (err) {
    console.error(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
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
    const { id } = req.params;

    const editUser = await userRepository.update({
      name,
      age,
      genre,
      picture,
      inscription_date,
      email,
      password,
      is_admin,
      is_modo,
      id,
    });

    if (editUser) {
      res.sendStatus(204);
    } else {
      res.status(403).send("An error has occured");
    }
  } catch (err) {
    console.error(err);
  }
};

export default { browse, add, edit };
