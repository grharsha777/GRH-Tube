import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: String,
  genre: [String],
  rating: Number,
  year: Number,
  duration: Number,
  poster: String,
  backdrop: String,
  description: String,
  cast: [String],
  director: String,
  mood: [String],
  views: Number,
  trend: String
});

export default mongoose.model("Movie", movieSchema);
