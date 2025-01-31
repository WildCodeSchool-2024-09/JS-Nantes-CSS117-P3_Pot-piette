import { hash, verify } from "argon2";
import type { RequestHandler } from "express";
import { sign } from "jsonwebtoken";
import jwt from "jsonwebtoken";
import userRepository from "./user/userRepository";

const login: RequestHandler = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await userRepository.getUsersByEmail(email);

  if (user === null || user === undefined) {
    res.sendStatus(404);
    return;
  }

  const isVerified = await verify(user.password, password);

  if (isVerified) {
    const payload = {
      id: user.id,
      email: user.email,
    };
    const secretKey = process.env.APP_SECRET;
    if (!secretKey) {
      throw new Error("Secret key is not defined");
    }
    const token = sign(payload, secretKey, { expiresIn: "1d" });

    res.json({ token, user: user.email });
  } else {
    res.sendStatus(422);
  }
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
      console.error("Authorization header is missing");
      throw res.status(401).json({ message: "jwt must be provided" });
    }
    const [type, token] = authorization.split(" ");

    if (type !== "Bearer") {
      console.error("Authorization header must be Bearer");
      throw res
        .status(401)
        .json({ message: "Authorization header must be Bearer" });
    }

    if (!token) {
      console.error("Token is missing");
      throw res.status(401).json({ message: "jwt must be provided" });
    }

    const secretKey = process.env.APP_SECRET;

    if (!secretKey) {
      console.error("Secret key is not defined");
      throw res.status(500).json({ message: "Server configuration error" });
    }
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        console.error("Token is invalid");
        throw res.status(401).json({ message: "Invalid token" });
      }
      req.body = decoded;
      next();
    });
  } catch (err) {
    next(err);
  }
};

export default { login, hashPassword, verifyToken };
