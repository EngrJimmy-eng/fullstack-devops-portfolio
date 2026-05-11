const mysql = require("mysql2");

const db = mysql.createPool({
  host: "ikenna-mysql",
  user: "ikenna_user",
  password: "strongpassword",
  database: "ikenna_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = db;
