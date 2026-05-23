// middleware/rateLimit.js

const rateLimit = require("express-rate-limit");

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20, // limit each IP to 20 requests
  message: "Too many requests, please try again later"
});

module.exports = contactLimiter;
