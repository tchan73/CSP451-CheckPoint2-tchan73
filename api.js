// api.js
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let users = [];

app.get("/users", (req, res) => {
    res.json(users);
});

app.post("/users", (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) return res.status(400).json({ error: "Name and email are required" });
    users.push({ name, email });
    res.status(201).json({ message: "User added successfully" });
});

app.listen(port, () => console.log(`API server running at http://localhost:${port}`));
