const express = require("express");
const mongoose = require("mongoose");
const {
  createTask,
  getAllTasks,
  findTaskById,
} = require("./services/task-service");

const PORT = process.env.PORT || 3000;

mongoose.connect(
  "mongodb+srv://kmin:zoh19q6cPkvagbV5@cluster0.izwd3.mongodb.net/golb?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("Connected to MongoDB");
});

const app = express();
app.use(express.json());

app
  .route("/tasks")
  .post((req, res) => {
    const { title, body } = req.body;

    if (!title) {
      return res.status(400).json({ message: "title is required" });
    }

    createTask({ title, body }, (error, createdTask) => {
      if (error) {
        return res.send(error)
      }
      res.json(createdTask);
    });
  })
  .get((req, res) => {
    res.json(getAllTasks());
  });

// app.post("/tasks", (req, res) => {
//   const { title, body } = req.body;
//   const createdTask = createTask({ title, body });
//   res.json(createdTask);
// });

app.get("/tasks/:taskId", (req, res) => {
  const task = findTaskById(req.params.taskId);

  res.json(task);
});

// Get all tasks
// app.get("/tasks", (req, res) => {
//   res.json(getAllTasks());
// });

app.listen(PORT, () => {
  console.log(`Todolist Server is running on http://localhost:${PORT}`);
});
