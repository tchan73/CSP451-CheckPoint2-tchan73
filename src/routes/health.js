/**
 * Health route
 * Exists to confirm the API server is running and reachable.
 */
const express = require("express");
const router = express.Router();

router.get("/health", (req, res) => {
  res.json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

module.exports = router;
