import argon2 from "argon2";
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

const add: RequestHandler = async (req, res) => {
  try {
    const { name, email, password, inscription_date } = req.body;

    const insertId = await userRepository.create({
      name,
      email,
      password,
      inscription_date,
    });

    if (insertId) {
      res.sendStatus(204);
    } else {
      res.status(404).send("An error has occurred while creating the user.");
    }
  } catch (err) {
    res.status(500).send("This user already exists. Please edit the fields. ");
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
    const id = Number(req.params.id);

    const deleteResult = await userRepository.delete(id);

    if (deleteResult) {
      res.status(204).send({ message: "User deleted successfully" });
    } else {
      res.status(404).send("User not found or could not be deleted");
    }
  } catch (err) {
    next(err);
  }
};

export default { browse, add, edit, deleteUser };
