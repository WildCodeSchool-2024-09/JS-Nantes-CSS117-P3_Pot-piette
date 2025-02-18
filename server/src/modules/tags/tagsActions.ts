import type { RequestHandler } from "express";
import tagsRepository from "./tagsRepository";

const read: RequestHandler = async (req, res, next) => {
  try {
    const tagId = Number(req.params.id);
    const tag = await tagsRepository.read(tagId);

    if (tag === null) {
      res.sendStatus(404);
    } else {
      res.send(tag);
    }
  } catch (err) {
    next(err);
  }
};

export default { read };
