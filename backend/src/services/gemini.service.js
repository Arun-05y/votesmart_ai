const { GoogleGenerativeAI } = require('@google/generative-ai');
const logger = require('../utils/logger');
require('dotenv').config();

let genAI;
let model;

// Initialize only if key is valid
if (process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== 'your_gemini_api_key_here') {
  genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
}

const generateChatResponse = async (message, history = []) => {
  if (!model) {
    throw new Error('Gemini API Key is not configured. Please add it to your .env file.');
  }

  try {
    const systemPrompt = `You are "VoteSmart Assistant", an expert in election processes, specifically for India. 
    Your goal is to educate users in a simple, step-by-step, and neutral manner. 
    Detect if the user is a first-time voter based on their questions and be extra encouraging.
    Default to Indian election rules unless specified otherwise.
    Keep answers factual and non-partisan.`;

    const chat = model.startChat({
      history,
      generationConfig: { maxOutputTokens: 1000 },
    });

    const result = await chat.sendMessage(`${systemPrompt}\n\nUser Question: ${message}`);
    const response = await result.response;
    return response.text();
  } catch (error) {
    logger.error(`Gemini API Error details: ${error.message}`);
    throw new Error('Failed to get AI response: ' + error.message);
  }
};

module.exports = { generateChatResponse };
