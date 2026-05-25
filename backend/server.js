require("dotenv").config();

const db = require("./config/db");

const registerRoutes = require("./routes/register");

const mysql = require("mysql2");

const bcrypt = require("bcryptjs");

const express = require("express");

const cors = require("cors");

const contactRoutes = require("./routes/contact");

const loginRoutes = require("./routes/login");

const profileRoutes = require("./routes/profile");

const helmet = require("helmet");


const app = express();

app.use(cors());

app.use(express.json());



app.use(helmet());

app.use("/api/contact", contactRoutes);

app.use("/api/register", registerRoutes);

app.use("/api/login", loginRoutes);

app.use("/api/profile", profileRoutes);



app.get("/", (req, res) => {
  res.send("Backend running");
});

‎

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
