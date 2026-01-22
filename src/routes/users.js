/**
 * Users API routes
 * In-memory storage keeps the API runnable locally without database dependencies.
 */
const express = require("express");
const router = express.Router();

// Simple in-memory "database" for this checkpoint
const users = [];

// GET /api/users - return all users
router.get("/users", (req, res) => {
  res.json(users);
});

// POST /api/users - add a user
router.post("/users", (req, res) => {
  const { name, email } = req.body;

  // Validation exists to prevent bad data entering the system
  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }

  // Basic duplicate check to keep data consistent
  const exists = users.some((u) => u.email === email);
  if (exists) {
    return res.status(409).json({ error: "Email already exists" });
  }

  users.push({ name, email });
  return res.status(201).json({ message: "User added successfully" });
});

module.exports = router;
