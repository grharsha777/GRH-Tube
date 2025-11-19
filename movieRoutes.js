import express from "express";
import Movie from "../models/Movie.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
});

router.post("/", async (req, res) => {
  const movie = new Movie(req.body);
  await movie.save();
  res.status(201).json(movie);
});

export default router;
