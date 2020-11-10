const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  body: String,
  completed: Boolean,
  completedAt: Date,
  createdAt: Date,
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
