const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chat.controller');
const quizController = require('../controllers/quiz.controller');
const timelineController = require('../controllers/timeline.controller');

// Chat routes
router.post('/chat', chatController.handleChat);

// Quiz routes
router.get('/quiz', quizController.getQuiz);
router.post('/quiz/submit', quizController.submitQuiz);

// Timeline routes
router.get('/timeline', timelineController.getTimeline);

module.exports = router;
