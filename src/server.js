import express from "express";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

let todos = [];

app.get("/api/todos", (req, res) => {
  res.json(todos);
});

app.post("/api/todos", (req, res) => {
  const { text } = req.body;
  const newTodo = { id: todos.length + 1, text, completed: false };
  todos.push(newTodo);
  res.json(newTodo);
});

app.put("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  const todo = todos.find((t) => t.id === parseInt(id));
  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }
  todo.completed = !todo.completed;
  res.json(todo);
});

app.delete("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  todos = todos.filter((t) => t.id !== parseInt(id));
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});