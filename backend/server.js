require("dotenv").config();

const db = require("./config/db");

const registerRoutes = require("./routes/register");

const mysql = require("mysql2");

const bcrypt = require("bcryptjs");

const express = require("express");

const cors = require("cors");

const morgan = require("morgan");

const {
  accessLogger,
  errorLogger,
} = require("./middleware/logger");

const contactRoutes = require("./routes/contact");

const loginRoutes = require("./routes/login");

const helmet = require("helmet");

const app = express();

app.use(cors());

app.use(
  morgan("combined", {
    stream: accessLogger.stream,
  })
);

app.use(express.json());

app.use(helmet());

app.use("/api/contact", contactRoutes);

app.use("/api/register", registerRoutes);

app.use("/api/login", loginRoutes);

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.use((err, req, res, next) => {
  errorLogger.error({
  message: err.message,
  stack: err.stack,
  method: req.method,
  url: req.originalUrl,
});

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

app.listen(5000, () => {
  logger.info("Server running on port 5000");
});
