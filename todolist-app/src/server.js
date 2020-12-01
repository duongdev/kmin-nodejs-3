const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

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

app.use("/api", router);
app.use(express.static(path.join(__dirname, "web")));

app.listen(PORT, () => {
  console.log(`Todolist Server is running on http://localhost:${PORT}`);
});
