require("dotenv").config();

const db = require("./config/db");

const registerRoutes = require("./routes/register");

const mysql = require("mysql2");

const bcrypt = require("bcryptjs");

const express = require("express");

const cors = require("cors");

const contactRoutes = require("./routes/contact");

const loginRoutes = require("./routes/login");


const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/contact", contactRoutes);

app.use("/api/register", registerRoutes);

app.use("/api/login", loginRoutes);

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
