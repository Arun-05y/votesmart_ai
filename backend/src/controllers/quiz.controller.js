const { QUIZ_QUESTIONS } = require('../data/mockData');

const getQuiz = (req, res) => {
  // Return questions without answers for the client
  const clientQuestions = QUIZ_QUESTIONS.map(({ answer, explanation, ...rest }) => rest);
  res.json(clientQuestions);
};

const submitQuiz = (req, res) => {
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
};

module.exports = { getQuiz, submitQuiz };
