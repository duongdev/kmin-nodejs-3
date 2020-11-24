const { Router } = require("express");

const tasksRouter = require("./tasks-routes");
const usersRouter = require("./users-routes");

const router = Router({ mergeParams: true });

router.use("/tasks/:id", tasksRouter);
router.use("/users", usersRouter);

module.exports = router;
