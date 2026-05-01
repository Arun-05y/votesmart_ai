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

// Serve frontend static files
app.use(express.static(path.join(__dirname, '../../frontend/dist')));

// Catch-all route to serve the frontend's index.html
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'));
});

// Global Error Handler
app.use(errorHandler);

module.exports = app;
