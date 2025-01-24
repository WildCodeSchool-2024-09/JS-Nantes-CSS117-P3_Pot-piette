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
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = req.body;

    user.id = id;

    const editUser = await userRepository.update(user);

    if (editUser) {
      res.sendStatus(204);
    } else {
      res.status(403).send("An error has occurred");
    }
  } catch (err) {
    next(err);
  }
};

const deleteUser: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deleteResult = await userRepository.delete(id);

    if (deleteResult) {
      res.status(204).send();
    } else {
      res.status(404).send("User not found or could not be deleted");
    }
  } catch (err) {
    next(err);
  }
};

export default { browse, add, edit, deleteUser };
