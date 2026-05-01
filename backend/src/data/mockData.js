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

module.exports = { ELECTION_TIMELINE, QUIZ_QUESTIONS };
