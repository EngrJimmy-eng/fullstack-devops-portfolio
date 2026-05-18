const express = require("express");

const router = express.Router();

const bcrypt = require("bcryptjs");

const db = require("../config/db");

router.post("/", (req, res) => {

  const { email, password } = req.body;

  // validation
  if (!email || !password) {
    return res.json({
      success: false,
      message: "Email and password required"
    });
  }

  // find user
  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    (err, results) => {

      if (err) {
        return res.json({
          success: false,
          message: "Database error"
        });
      }

      // user not found
      if (results.length === 0) {
        return res.json({
          success: false,
          message: "User not found"
        });
      }

      const user = results[0];

      // compare password
      const isMatch = bcrypt.compareSync(password, user.password);

      if (!isMatch) {
        return res.json({
          success: false,
          message: "Invalid credentials"
        });
      }

      // success
      return res.json({
        success: true,
        message: "Login successful",
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role
        }
      });
    }
  );
});

module.exports = router;
