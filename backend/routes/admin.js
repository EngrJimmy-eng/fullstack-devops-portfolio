// routes/admin.js
const express = require("express");
const router = express.Router();
const db = require("../db");

// GET all messages
router.get("/messages", (req, res) => {
  const sql = "SELECT * FROM messages ORDER BY created_at DESC";

  db.query(sql, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Database error" });
    }
    res.json(results);
  });
});

module.exports = router;
