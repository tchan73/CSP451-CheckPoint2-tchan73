const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const healthRoutes = require("./src/routes/health");
const userRoutes = require("./src/routes/users");

app.use("/api", healthRoutes);
app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log(`API server running at http://localhost:${PORT}`);
});
