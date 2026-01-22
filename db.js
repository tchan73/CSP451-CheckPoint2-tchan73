// db.js
const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database(":memory:", (err) => {
    if (err) console.error("Database connection failed:", err.message);
    else console.log("Connected to in-memory SQLite database");
});

db.run(`CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
)`);

function addUser(name, email) {
    const stmt = db.prepare("INSERT INTO users(name, email) VALUES(?, ?)");
    stmt.run(name, email);
    stmt.finalize();
}

function getUsers(callback) {
    db.all("SELECT * FROM users", [], (err, rows) => {
        if (err) throw err;
        callback(rows);
    });
}

module.exports = { db, addUser, getUsers };
