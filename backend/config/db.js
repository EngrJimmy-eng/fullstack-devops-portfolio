const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "ikenna-mysql",
  user: "ikenna_user",
  password: "strongpassword",
  database: "ikenna_db"
});

db.connect((err) => {
  if (err) {
    console.error("DB connection failed:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

module.exports = db;
