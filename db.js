/**
 * Database module using SQLite
 * This file centralizes all database logic so the rest of the app
 * does not need to know how data is stored.
 */

const sqlite3 = require("sqlite3").verbose();

/**
 * Reads database configuration from environment variables.
 * This exists to avoid hardcoding paths and allow easy changes later.
 */
function getDbConfig() {
  const config = {
    filename: process.env.DB_FILE || ":memory:",
  };

  if (!config.filename) {
    throw new Error("DB_FILE is not defined");
  }

  return config;
}

const config = getDbConfig();
let db;
let isConnected = false;

/**
 * Connect initializes the database and creates required tables.
 * Keeping this explicit makes startup behavior predictable.
 */
function connect() {
  if (isConnected) return;

  db = new sqlite3.Database(config.filename, (err) => {
    if (err) {
      console.error("Database connection failed:", err.message);
      throw err;
    }
    console.log("Connected to SQLite database");
  });

  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE
    )
  `);

  isConnected = true;
}
// Auto-connect on import for simple local development
connect();

/**
 * Disconnect cleanly closes the database connection.
 * This prevents resource leaks in long-running applications.
 */
function disconnect() {
  if (!isConnected) return;

  db.close((err) => {
    if (err) console.error("Error closing database:", err.message);
    else console.log("Database connection closed");
  });

  isConnected = false;
}

/**
 * Adds a new user to the database.
 * Validation exists to avoid inserting invalid data.
 */
function addUser(name, email) {
  if (!isConnected) throw new Error("Database not connected");
  if (!name || !email) throw new Error("Name and email are required");

  const stmt = db.prepare(
    "INSERT INTO users (name, email) VALUES (?, ?)"
  );
  stmt.run(name, email);
  stmt.finalize();
}

/**
 * Returns all users from the database.
 * Callback keeps the API simple for small projects.
 */
function getUsers(callback) {
  if (!isConnected) throw new Error("Database not connected");

  db.all("SELECT * FROM users", [], (err, rows) => {
    if (err) throw err;
    callback(rows);
  });
}

module.exports = {
  connect,
  disconnect,
  addUser,
  getUsers,
};
