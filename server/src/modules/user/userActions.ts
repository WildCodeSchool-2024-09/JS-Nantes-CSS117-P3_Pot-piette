import argon2 from "argon2";
import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";
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

// const add: RequestHandler = async (req, res, next) => {
//   try {
//     const addUser = await userRepository.create(req.body);

//     if (addUser) {
//       res
//         .status(201)
//         .send(`The user ${req.body.name} has been added succesfully`);
//     } else {
//       res.status(404).send("An error has occured");
//     }
//   } catch (err) {
//     next(err);
//   }
// };

const add: RequestHandler = async (req, res, next) => {
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

    const hashedPassword = await argon2.hash(password);

    const insertId = await userRepository.create({
      name,
      age,
      genre,
      picture,
      inscription_date,
      email,
      password: hashedPassword,
      is_admin,
      is_modo,
    });

    const newUser = await userRepository.getUserById(insertId);

    if (newUser) {
      const payload = {
        id: newUser.id,
        email: newUser.email,
      };

      const secretKey = process.env.APP_SECRET;
      if (!secretKey) {
        throw new Error("APP_SECRET is not defined");
      }

      const token = jwt.sign(payload, secretKey, { expiresIn: "1d" });

      res.status(201).json({
        token: token,
        user: newUser.email,
      });
    } else {
      res.status(404).send("An error has occurred while creating the user.");
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

const hashPassword: RequestHandler = async (req, res, next) => {
  const hashOptions = {
    type: argon2.argon2id,
    memoryCost: 2 ** 17,
    hashLength: 50,
    parallelism: 1,
    iteration: 2,
  };
  try {
    const { password } = req.body;

    const hash = await argon2.hash(password, hashOptions);
    if (hash) {
      req.body.password = hash;
      next();
    } else {
      res.sendStatus(403);
    }
  } catch (err) {
    console.error(err);
  }
};

export default { browse, add, edit, deleteUser, hashPassword };
