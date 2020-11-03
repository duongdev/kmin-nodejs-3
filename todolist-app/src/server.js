const express = require("express");
const {
  createTask,
  getAllTasks,
  findTaskById,
} = require("./services/task-service");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.post("/tasks", (req, res) => {
  const { title, body } = req.body;
  const createdTask = createTask({ title, body });
  res.json(createdTask);
});

app.get("/tasks/:taskId", (req, res) => {
  const task = findTaskById(req.params.taskId);

  res.json(task);
});

// Get all tasks
app.get("/tasks", (req, res) => {
  res.json(getAllTasks());
});

app.listen(PORT, () => {
  console.log(`Todolist Server is running on http://localhost:${PORT}`);
});
