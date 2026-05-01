const logger = require('../utils/logger');

const errorHandler = (err, req, res, next) => {
  logger.error(err.message || 'Internal Server Error');
  
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    error: err.message || 'An unexpected error occurred.'
  });
};

module.exports = { errorHandler };
