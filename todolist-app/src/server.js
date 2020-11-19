const express = require("express");
const mongoose = require("mongoose");

const router = require("./routes");

const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost:27017/todo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("Connected to MongoDB");
});

const app = express();
app.use(express.json());

app.use("/", router);

// app
//   .route("/tasks")
//   .post((req, res) => {
//     const { title, body } = req.body;

//     if (!title) {
//       return res.status(400).json({ message: "title is required" });
//     }

//     createTask({ title, body })
//       .then((task) => res.json(task))
//       .catch((error) => res.status(500).send(error));
//   })
//   .get((req, res) => {
//     res.json(getAllTasks());
//   });

// app.get("/tasks/:taskId", (req, res) => {
//   const task = findTaskById(req.params.taskId);

//   res.json(task);
// });

app.listen(PORT, () => {
  console.log(`Todolist Server is running on http://localhost:${PORT}`);
});
