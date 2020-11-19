const { Router } = require("express");

const tasksRouter = Router({ mergeParams: true });

tasksRouter
  .get("/hi", (req, res) => {
    res.send("/tasks");
  })
  .get("/hello", (req, res) => {
    res.send("hello " + req.params.id);
  });

module.exports = tasksRouter;
