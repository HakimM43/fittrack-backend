const express = require("express");
const Workout = require("../models/Workout");
const auth = require("../middleware/auth");

const router = express.Router();

// GET ALL WORKOUTS
router.get("/", auth, async (req, res) => {
  try {
    const workouts = await Workout.find({ user: req.userId }).sort({
      date: -1,
    });

    res.json(workouts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET ONE WORKOUT
router.get("/:id", auth, async (req, res) => {
  try {
    const workout = await Workout.findOne({
      _id: req.params.id,
      user: req.userId,
    });

    if (!workout) {
      return res.status(404).json({ message: "Workout not found" });
    }

    res.json(workout);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// CREATE WORKOUT
router.post("/", auth, async (req, res) => {
  try {
    const workout = await Workout.create({
      ...req.body,
      user: req.userId,
    });

    res.status(201).json(workout);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// UPDATE WORKOUT
router.put("/:id", auth, async (req, res) => {
  try {
    const workout = await Workout.findOneAndUpdate(
      {
        _id: req.params.id,
        user: req.userId,
      },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!workout) {
      return res.status(404).json({ message: "Workout not found" });
    }

    res.json(workout);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE WORKOUT
router.delete("/:id", auth, async (req, res) => {
  try {
    const workout = await Workout.findOneAndDelete({
      _id: req.params.id,
      user: req.userId,
    });

    if (!workout) {
      return res.status(404).json({ message: "Workout not found" });
    }

    res.json({ message: "Workout deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;