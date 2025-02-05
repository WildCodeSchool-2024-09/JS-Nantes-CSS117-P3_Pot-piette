import { hash, verify } from "argon2";
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

    const verifyPassword = await verify(user.password, password);

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

    res.json({ token, user: user.email, modo: user.is_admin });
  } catch (err) {}
};

const hashPassword: RequestHandler = async (req, res, next) => {
  try {
    const { password } = req.body;
    const hashedPassword = await hash(password);
    req.body.password = hashedPassword;
    next();
  } catch (err) {
    res.sendStatus(500);
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
