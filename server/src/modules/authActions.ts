// import { hash, verify } from "argon2";
import argon2 from "argon2";
import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import userRepository from "./user/userRepository";

const login: RequestHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userRepository.getUsersByEmail(email);
    if (user === null || user === undefined) {
      res.sendStatus(404);
      return;
    }

    const verifyPassword = await argon2.verify(user.password, password);

    if (!verifyPassword) {
      res.status(404).send("Password don't match");
      return;
    }

    const payload = {
      id: user.id,
      email: user.email,
    };

    const secretKey = process.env.APP_SECRET;

    if (!secretKey) {
      throw new Error("APP_SECRET is not defined");
    }

    const token = jwt.sign(payload, secretKey, { expiresIn: "1d" });

    res.json({ token, user: user.email });
  } catch (err) {
    res.status(401).send(err);
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
    res.status(401).send(err);
  }
};

export const verifyToken: RequestHandler = async (req, res, next) => {
  try {
    const authorization = req.get("Authorization");

    if (!authorization) {
      throw res.status(401).json({ message: "jwt must be provided" });
    }
    const [type, token] = authorization.split(" ");

    if (type !== "Bearer") {
      throw res
        .status(401)
        .json({ message: "Authorization header must be Bearer" });
    }

    if (!token) {
      throw res.status(401).json({ message: "jwt must be provided" });
    }

    const secretKey = process.env.APP_SECRET;

    if (!secretKey) {
      throw new Error("APP_SECRET is not defined");
    }

    jwt.verify(token, secretKey);
  } catch (err) {
    res.status(401).send(err);
  }
};

export default { login, hashPassword, verifyToken };
