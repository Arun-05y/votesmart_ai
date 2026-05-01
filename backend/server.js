const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const { GoogleGenerativeAI } = require('@google/generative-ai');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Mock Data
const ELECTION_TIMELINE = {
  India: {
    national: {
      registration_deadline: '2026-05-15',
      voting_date: '2026-06-01',
      result_date: '2026-06-04',
      description: 'General Elections 2026 (Mock Data)'
    },
    state: {
      registration_deadline: '2026-10-10',
      voting_date: '2026-11-05',
      result_date: '2026-11-10',
      description: 'State Assembly Elections (Mock Data)'
    }
  }
};

const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "What is the minimum age to vote in India?",
    options: ["16", "18", "21", "25"],
    answer: "18",
    explanation: "As per the 61st Amendment Act, the voting age in India was reduced from 21 to 18."
  },
  {
    id: 2,
    question: "Which ID is mandatory for voting in India?",
    options: ["PAN Card", "Aadhar Card", "Voter ID (EPIC Card)", "Driving License"],
    answer: "Voter ID (EPIC Card)",
    explanation: "While other IDs can be used for identification, the Voter ID (EPIC) is the primary document issued by the ECI."
  },
  {
    id: 3,
    question: "How can you check your name in the voter list?",
    options: ["Visit a bank", "ECI National Voter Service Portal", "Call the police", "Check LinkedIn"],
    answer: "ECI National Voter Service Portal",
    explanation: "The NVSP portal (nvsp.in) allows citizens to search their names in the electoral roll."
  },
  {
    id: 4,
    question: "What does 'NOTA' stand for in an EVM?",
    options: ["None of the Above", "None of These Applicants", "Not Other Than Anyone", "National Online Testing Authority"],
    answer: "None of the Above",
    explanation: "NOTA allows voters to officially register a vote of rejection for all candidates."
  },
  {
    id: 5,
    question: "Who appoints the Chief Election Commissioner of India?",
    options: ["Prime Minister", "President", "Chief Justice", "Parliament"],
    answer: "President",
    explanation: "The Chief Election Commissioner and other Election Commissioners are appointed by the President of India."
  }
];

// Routes
app.post('/api/chat', async (req, res) => {
  const { message, history, context } = req.body;
  console.log('Received chat request:', message);
  
  try {
    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'your_gemini_api_key_here') {
      console.error('Error: Gemini API Key is missing or default placeholder');
      return res.status(400).json({ error: 'Gemini API Key is not configured. Please add it to your .env file.' });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    // System instruction to maintain neutral, helpful, and election-focused tone
    const systemPrompt = `You are "VoteSmart Assistant", an expert in election processes, specifically for India. 
    Your goal is to educate users in a simple, step-by-step, and neutral manner. 
    Detect if the user is a first-time voter based on their questions and be extra encouraging.
    Default to Indian election rules unless specified otherwise.
    Keep answers factual and non-partisan.`;

    const chat = model.startChat({
      history: history || [],
      generationConfig: {
        maxOutputTokens: 1000,
      },
    });

    const result = await chat.sendMessage(`${systemPrompt}\n\nUser Question: ${message}`);
    const response = await result.response;
    const text = response.text();

    res.json({ response: text });
  } catch (error) {
    console.error('Gemini API Error details:', error.message);
    res.status(500).json({ error: 'Failed to get AI response: ' + error.message });
  }
});

app.get('/api/timeline', (req, res) => {
  const { country = 'India', type = 'national' } = req.query;
  const data = ELECTION_TIMELINE[country]?.[type];
  
  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ error: 'Timeline data not found for this location/type' });
  }
});

app.get('/api/quiz', (req, res) => {
  // Return questions without answers for the client
  const clientQuestions = QUIZ_QUESTIONS.map(({ answer, explanation, ...rest }) => rest);
  res.json(clientQuestions);
});

app.post('/api/quiz/submit', (req, res) => {
  const { answers } = req.body; // Map of { questionId: selectedOption }
  let score = 0;
  const results = QUIZ_QUESTIONS.map(q => {
    const userAnswer = answers[q.id];
    const isCorrect = userAnswer === q.answer;
    if (isCorrect) score++;
    return {
      id: q.id,
      correct: isCorrect,
      correctAnswer: q.answer,
      explanation: q.explanation
    };
  });

  res.json({
    score,
    total: QUIZ_QUESTIONS.length,
    results
  });
});

// Serve frontend static files
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Catch-all route to serve the frontend's index.html
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

// Export for Vercel
module.exports = app;

// Only listen when not in production (Vercel)
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
