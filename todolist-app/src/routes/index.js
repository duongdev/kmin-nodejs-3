const { Router } = require("express");

const tasksRouter = require("./tasks-routes");
// const usersRouter = require("./users-routes");

const router = Router({ mergeParams: true });

router.use("/tasks", tasksRouter);
// router.all("/users", usersRouter);

module.exports = router;
