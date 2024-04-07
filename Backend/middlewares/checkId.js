import { isValidObjectId } from "mongoose";

export function checkId(req, res, next) {
  if (!isValidObjectId(req.params.id)) {
    res.status(404);
    throw new Error(`Invalid Object Of: ${req.params.id}`);
  }
  next();
}
