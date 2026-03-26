const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Port (important for AWS App Runner)
const PORT = process.env.PORT || 3000;

// Root API
app.get("/", (req, res) => {
  res.json({
    message: "Server is running 🚀 mr surya bagavanth",
    status: "success"
  });
});

// Health check API
app.get("/health", (req, res) => {
  res.json({
    uptime: process.uptime(),
    message: "OK",
    timestamp: Date.now()
  });
});

// Sample GET API
app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Surya" },
    { id: 2, name: "Gopi" }
  ]);
});

// Sample POST API
app.post("/users", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  res.json({
    message: "User created",
    user: {
      id: Math.floor(Math.random() * 1000),
      name
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});