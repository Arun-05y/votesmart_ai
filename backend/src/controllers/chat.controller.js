const { generateChatResponse } = require('../services/gemini.service');
const logger = require('../utils/logger');

const handleChat = async (req, res, next) => {
  try {
    const { message, history } = req.body;
    logger.info(`Received chat request: ${message}`);
    
    const responseText = await generateChatResponse(message, history);
    res.json({ response: responseText });
  } catch (error) {
    next(error);
  }
};

module.exports = { handleChat };
