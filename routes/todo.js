import express from "express";
import { Todo } from "../models/todo.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const todo = await Todo.find();
    res.json(todo);
  } catch (error) {
    res.json({ message: error.message, error });
  }
});

router.post("/", async (req, res) => {
  try {
    const { task } = req.body;
    const todo = new Todo({ task });
    await todo.save();
    res.json({ message: "successful" });
  } catch (error) {
    res.json({ message: error.message, error });
  }
});

export { router as todoRouter };
