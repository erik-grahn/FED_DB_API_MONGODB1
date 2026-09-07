import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();

// ------------------------------------------------------------
// --------------------- MIDDLEWARE ---------------------------
// ------------------------------------------------------------

app.use(cors());
app.use(express.json());

// ------------------------------------------------------------
// ------------------------- ROUTES ---------------------------
// ------------------------------------------------------------

import productRouter from "./routes/products.js";
app.use("/products", productRouter);

import categoryRouter from "./routes/categories.js";
app.use("/categories", categoryRouter);

// ------------------------------------------------------------
// --------------------- START SERVER -------------------------
// ------------------------------------------------------------
mongoose.connect(process.env.MONGODB_URL || "");

const PORT = 3000;

app.get("/ping", (_req: Request, res: Response) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
