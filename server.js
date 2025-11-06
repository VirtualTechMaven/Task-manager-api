const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/taskRoutes');
const errorHandler = require('./middleware/errorHandler');

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Test route
app.get('/test', (req, res) => {
  res.send('API is working');
});

// Main task routes
app.use('/api/tasks', taskRoutes);

// Error handling middleware
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server is running on port ${PORT}`);
});

//server.js- main entry point for task manager api
app.get('/', (req, res) => {
  res.send('Welcome to Task Manager API');
});
