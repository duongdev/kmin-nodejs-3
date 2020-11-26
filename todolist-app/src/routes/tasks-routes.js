const { Router } = require("express");
const { requireUser } = require("../middlewares/auth");
const Task = require("../models/Task");

const tasksRouter = Router({ mergeParams: true });

tasksRouter
  .route("/")
  .all(requireUser)
  .post((req, res) => {
    const { title, body } = req.body;
    const userId = req.user._id;

    Task.create({ title, body, userId })
      .then((createdTask) => {
        res.json(createdTask);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  })
  .get((req, res) => {
    const userId = req.user._id;

    Task.find({ userId })
      .then((tasks) => {
        res.json(tasks);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  });

module.exports = tasksRouter;
