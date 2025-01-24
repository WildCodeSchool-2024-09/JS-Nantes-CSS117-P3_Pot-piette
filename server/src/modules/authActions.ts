import { hash } from "argon2";
import { verify } from "argon2";
import type { RequestHandler } from "express";

import { sign } from "jsonwebtoken";
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
    const token = sign(payload, secretKey, { expiresIn: "1h" });

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

export default { login, hashPassword };
