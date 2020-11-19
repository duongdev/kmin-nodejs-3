const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: String,
  completed: { type: Boolean, default: false },
  completedAt: { type: Date, default: null },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
