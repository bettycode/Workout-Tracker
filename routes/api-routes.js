const express = require("express");
const router = express.Router();
const db = require("../models");

//  get workouts from the database
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((data) => {
        console.log(data);
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

//  adds a new workout to the database
router.post("/api/workouts", async (req, res) => {
  db.Workout.create({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
        console.log(data);
      res.json(err);
    });
});

// updates an existing workout in the database
router.put("/api/workouts/:id", ({ body, params }, res) => {
  db.Workout.findByIdAndUpdate(
    params.id,
    {
      $push: {
        exercises: body,
      },
    },
    {
      new: true,
      runValidators: true,
    }
  )
    .then((data) => {
        console.log(data);  
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

// gets a range of workouts from the database
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    //.limit(8)
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;