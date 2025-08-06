const express = require('express');
const app = express();

// ✅ Step 1: Import CORS
const cors = require('cors');

// ✅ Step 2: Use CORS middleware
app.use(cors()); // Now your frontend can access the backend

// Load config from .env 
require('dotenv').config();
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON
app.use(express.json());

// Connect to the database
const dbConnect = require("./connfig/database");
dbConnect();

// Import routes for TODO API
const todoRoutes = require("./routes/todos");
app.use('/api/v1', todoRoutes);

// Basic route
app.get("/", (req, res) => {
    res.send("<h1>This is Homepage</h1>");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server started successfully at ${PORT}`);
});
