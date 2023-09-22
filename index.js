import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import { todoRouter } from "./routes/todo.js";
import { authStorageRouter } from "./routes/auth-storage.js";

const app = express();

app.use(express.json());
app.use("/todo", todoRouter);
app.use("/storetoken", authStorageRouter);

mongoose.connect(process.env.MONGO_DB);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on Port ${PORT}`));
