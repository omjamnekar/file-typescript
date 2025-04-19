import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/upload.routes";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api", router);

mongoose
  .connect(process.env.MONGO_URI || "")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("DB error", err));

export default app;
