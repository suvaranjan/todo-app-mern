import express from "express";
import {
  getTodos,
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../controller/todo.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", protect, getTodos);
router.post("/add", protect, createTodo);
router.put("/:id", protect, updateTodo);
router.get("/:id", protect, getTodo);
router.delete("/:id", protect, deleteTodo);

export default router;
