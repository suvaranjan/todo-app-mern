import Todo from "../models/todo.model.js";

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.userId }).sort({
      createdAt: -1,
    });
    res.json(todos);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch todos", error: err.message });
  }
};

export const getTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await Todo.findById({ _id: id });
    res.json(todo);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch todos", error: err.message });
  }
};

export const createTodo = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ message: "Text is required" });

    const todo = await Todo.create({
      text,
      user: req.userId, // coming from auth middleware
    });

    res.status(201).json(todo);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { text, completed } = req.body;

    const todo = await Todo.findOneAndUpdate(
      { _id: id, user: req.userId },
      { text, completed },
      { new: true }
    );

    if (!todo) return res.status(404).json({ message: "Todo not found" });

    res.json(todo);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findOneAndDelete({ _id: id, user: req.userId });

    if (!todo) return res.status(404).json({ message: "Todo not found" });

    res.json({ message: "Todo deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
