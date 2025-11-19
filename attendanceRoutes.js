import express from "express";
import Attendance from "../models/Attendance.js";
const router = express.Router();

router.post("/", async (req, res) => {
  const attendance = new Attendance(req.body);
  await attendance.save();
  res.status(201).json(attendance);
});

router.get("/:userId", async (req, res) => {
  const records = await Attendance.find({ userId: req.params.userId });
  res.json(records);
});

export default router;
