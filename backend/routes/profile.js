const express = require("express");

const router = express.Router();

router.get("/", auth, (req, res) => {

  res.json({
    success: true,
    message: "Protected profile route",
    user: req.user
  });

});

module.exports = router;
