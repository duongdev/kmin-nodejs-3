const { createModel } = require("../helpers/model");
const Task = require("../models/Task");

const TaskJSONDB = createModel("tasks");

function getAllTasks() {
  return TaskJSONDB.findAll();
}

function createTask({ title, body }, callback) {
  Task.create(
    {
      title,
      body,
      completed: false,
    },
    (err, task) => callback(err, task)
  );
}

function findTaskById(taskId) {
  return TaskJSONDB.findById(taskId);
}

module.exports = { createTask, getAllTasks, findTaskById };
