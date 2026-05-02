const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');
const apiRoutes = require('./routes/api.routes');
const { errorHandler } = require('./middlewares/error.middleware');

const app = express();

// Security Middlewares
app.use(helmet({
  contentSecurityPolicy: false, // Disabling CSP temporarily for React app testing
}));
app.use(cors());
app.use(express.json({ limit: '10kb' })); // Prevent large payloads

// Rate Limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: { error: 'Too many requests from this IP, please try again later.' }
});

// API Routes
app.use('/api', apiLimiter, apiRoutes);

// Serve frontend static files if they exist
const distPath = path.join(__dirname, '../../frontend/dist');
const fs = require('fs');

if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));

  // Catch-all route to serve the frontend's index.html
  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
} else {
  // Graceful fallback for development mode when dist is not built
  app.get(/.*/, (req, res) => {
    res.status(200).send("Backend is running! Please use http://localhost:5173 to access the frontend in development mode.");
  });
}

// Global Error Handler
app.use(errorHandler);

module.exports = app;
