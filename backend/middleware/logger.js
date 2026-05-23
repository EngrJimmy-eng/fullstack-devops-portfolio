// middleware/logger.js

const morgan = require("morgan");

// logs: method, URL, status, response time
const logger = morgan("combined");

module.exports = logger;
