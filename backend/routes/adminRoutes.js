const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const auth = require("../middleware/auth");

const router = express.Router();

// Temporary admin credentials
const adminUser = {
  username: "admin",
  passwordHash: bcrypt.hashSync("admin123", 10),
};

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  // Check username
  if (username !== adminUser.username) {
    return res.status(401).json({
      success: false,
      message: "Invalid credentials",
    });
  }

  // Check password
  const validPassword = await bcrypt.compare(
    password,
    adminUser.passwordHash
  );

  if (!validPassword) {
    return res.status(401).json({
      success: false,
      message: "Invalid credentials",
    });
  }

  // Generate token
  const token = jwt.sign(
    { username },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.json({
    success: true,
    token,
  });
});

router.get("/dashboard", auth, (req, res) => {
  res.json({
    success: true,
    message: "Welcome Admin",
    user: req.user,
  });
});

module.exports = router;
