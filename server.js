const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("public"));

let nextId = 3;
let tasks = [
  { id: 1, title: "Explore Node.js", completed: true },
  { id: 2, title: "Build my first API", completed: false }
];

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Task Manager API is running" });
});

app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/api/tasks", (req, res) => {
  const title = typeof req.body.title === "string" ? req.body.title.trim() : "";
  if (!title) {
    return res.status(400).json({ error: "Please provide a task title." });
  }

  const task = { id: nextId++, title, completed: false };
  tasks.push(task);
  res.status(201).json(task);
});

app.patch("/api/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find(item => item.id === id);
  if (!task) return res.status(404).json({ error: "Task not found." });

  if (typeof req.body.completed === "boolean") {
    task.completed = req.body.completed;
  }
  if (typeof req.body.title === "string" && req.body.title.trim()) {
    task.title = req.body.title.trim();
  }
  res.json(task);
});

app.delete("/api/tasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const exists = tasks.some(item => item.id === id);
  if (!exists) return res.status(404).json({ error: "Task not found." });

  tasks = tasks.filter(item => item.id !== id);
  res.json({ message: "Task deleted successfully." });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Task Manager running on port ${PORT}`);
});
