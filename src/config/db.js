const mysql = require("mysql2/promise");

// Create connection
let db;

async function initDB() {
  try {
    db = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "chama360_db",
    });
    console.log("✅ Connected to MySQL database");
  } catch (err) {
    console.error("❌ Database connection failed:", err);
  }
}

// Call the init function immediately
initDB();

// Export a function to get the connection
module.exports = () => db;