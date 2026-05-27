const winston = require("winston");

const accessLogger = winston.createLogger({
  level: "info",

  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),

  transports: [
    new winston.transports.Console(),

    new winston.transports.File({
      filename: "logs/access.log",
    }),
  ],
});

const errorLogger = winston.createLogger({
  level: "error",

  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),

  transports: [
    new winston.transports.Console(),

    new winston.transports.File({
      filename: "logs/error.log",
    }),
  ],
});

accessLogger.stream = {
  write: (message) => {
    accessLogger.info(message.trim());
  },
};

module.exports = {
  accessLogger,
  errorLogger,
};
