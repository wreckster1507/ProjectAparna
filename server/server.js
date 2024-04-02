// Importing Dependencies
import express from "express";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";
import pool from "./db/ConnectDatabase.js";

// importing Routes

// setting up the env file configurtion
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "./config/env/.env") });

// creating instance for express & for the env variables
const app = express();
const PORT = process.env.PORT;

// intial route
app.get("/", (req, res) => {
  res.status(200).send("<h1>Home Directory Working</h1>");
});

// server port
app.listen(PORT, () => {
  console.log(`server is runing on port: ${PORT}`);
});
