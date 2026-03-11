const express = require("express");
const cors = require("cors");
const getDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Chama360 backend running 🚀");
});

app.get("/test-db", async (req, res) => {
  try {
    const db = getDB();        // get the connection
    if (!db) throw new Error("DB not initialized yet");
    const [rows, fields] = await db.query("SELECT 1");
    res.send("Database connected successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Database error");
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
