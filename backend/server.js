require("dotenv").config();

const db = require("./config/db");

const mysql = require("mysql2");

const bcrypt = require("bcryptjs");

const express = require("express");

const cors = require("cors");

const contactRoutes = require("./routes/contact");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
