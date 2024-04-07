import express from "express";
const router = express.Router();
//controllers
import {
  createMovie,
  getAllMvies,
  getSpecificMovie,
  updateMovie,
  movieReview,
  deleteMovie,
  deleteComment,
  getNewMovies,
  getTopMovies,
  getRandomMovies,
} from "../controllers/movieController.js";
//middlewares

import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";
import { checkId } from "../middlewares/checkId.js";

//publis routes
router.get("/all-movies", getAllMvies);
router.get("/specific-movie/:id", getSpecificMovie);
router.get("/new-movies", getNewMovies);
router.get("/top-movies", getTopMovies);
router.get("/random-movies", getRandomMovies);
//restricted routes
router.post("/:id/reviews", authenticate, checkId, movieReview);
//Admin
router.post("/create-movie", authenticate, authorizeAdmin, createMovie);
router.put("/update-movie/:id", updateMovie);
router.delete("/delete-movie/:id", authenticate, authorizeAdmin, deleteMovie);
router.delete("/delete-comment", authenticate, authorizeAdmin, deleteComment);

export default router;
