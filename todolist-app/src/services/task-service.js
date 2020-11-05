const { createModel } = require("../helpers/model");

const Task = createModel("tasks");

function getAllTasks() {
  return Task.findAll();
}

function createTask({ title, body }) {
  const task = Task.create({ title, body, completed: false });

  return task;
}

function findTaskById(taskId) {
  return Task.findById(taskId);
}

module.exports = { createTask, getAllTasks, findTaskById };
