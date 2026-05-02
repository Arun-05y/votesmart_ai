const logger = require('../utils/logger');
require('dotenv').config();

const generateChatResponse = async (message, history = []) => {
  if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'your_gemini_api_key_here') {
    throw new Error('API Key is not configured. Please add it to your .env file.');
  }

  try {
    const systemPrompt = `You are "VoteSmart Assistant", an expert in election processes, specifically for India. 
    Your goal is to educate users in a simple, step-by-step, and neutral manner. 
    Detect if the user is a first-time voter based on their questions and be extra encouraging.
    Default to Indian election rules unless specified otherwise.
    Keep answers factual and non-partisan.`;

    // Format history for OpenRouter (OpenAI schema)
    const formattedHistory = history.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'assistant',
      content: msg.parts.map(p => p.text).join('')
    }));

    const messages = [
      { role: 'system', content: systemPrompt },
      ...formattedHistory,
      { role: 'user', content: message }
    ];

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.GEMINI_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'http://localhost:5000', // Optional but recommended by OpenRouter
        'X-Title': 'VoteSmart AI', // Optional but recommended by OpenRouter
      },
      body: JSON.stringify({
        model: 'openai/whisper-large-v3', // Note: This is an audio transcription model, it may fail for chat completions
        messages: messages,
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(`OpenRouter API Error: ${data.error?.message || JSON.stringify(data)}`);
    }

    return data.choices[0].message.content;
  } catch (error) {
    logger.error(`API Error details: ${error.message}`);
    throw new Error('Failed to get AI response: ' + error.message);
  }
};

module.exports = { generateChatResponse };
