const mysql = require("mysql2");

const db = mysql.createPool({
  host: "ikenna-mysql",
  user: "root",
  password: "root",
  database: "ikenna_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = db;
