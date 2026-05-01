import { useState, useEffect } from 'react'
import axios from 'axios'
import { Award, CheckCircle, HelpCircle, Loader2, RefreshCw, XCircle } from 'lucide-react'

export default function QuizModule() {
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    fetchQuestions()
  }, [])

  const fetchQuestions = async () => {
    setLoading(true)
    try {
      const res = await axios.get('/api/quiz')
      setQuestions(res.data)
      setResult(null)
      setAnswers({})
      setCurrentIndex(0)
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleOptionClick = (option) => {
    setAnswers({ ...answers, [questions[currentIndex].id]: option })
  }

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prevQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const submitQuiz = async () => {
    setSubmitting(true)
    try {
      const res = await axios.post('/api/quiz/submit', { answers })
      setResult(res.data)
    } catch (err) {
      console.error(err)
    } finally {
      setSubmitting(false)
    }
  }

  if (loading) return (
    <div className="glass-card flex items-center justify-center min-h-[400px]">
      <Loader2 className="w-10 h-10 animate-spin text-primary" />
    </div>
  )

  if (result) return (
    <div className="glass-card text-center animate-fade-in">
      <div className="inline-flex p-4 rounded-full bg-primary/10 mb-6">
        <Award className="w-12 h-12 text-primary" />
      </div>
      <h2 className="text-3xl font-bold mb-2">Quiz Completed!</h2>
      <p className="text-xl text-slate-500 dark:text-slate-400 mb-8">
        Your Score: <span className="text-primary font-bold">{result.score}</span> / {result.total}
      </p>
      
      <div className="space-y-4 text-left mb-8 max-h-[300px] overflow-y-auto pr-2">
        {result.results.map((r, i) => (
          <div key={i} className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
            <div className="flex items-center gap-2 mb-2">
              {r.correct ? <CheckCircle className="w-4 h-4 text-green-500" /> : <XCircle className="w-4 h-4 text-red-500" />}
              <span className={`font-semibold ${r.correct ? 'text-green-600' : 'text-red-600'}`}>
                Question {i + 1}: {r.correct ? 'Correct' : 'Incorrect'}
              </span>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 italic">"{r.explanation}"</p>
          </div>
        ))}
      </div>

      <button onClick={fetchQuestions} className="btn-primary w-full flex items-center justify-center gap-2">
        <RefreshCw className="w-5 h-5" /> Retake Quiz
      </button>
    </div>
  )

  const currentQ = questions[currentIndex]
  const isSelected = (opt) => answers[currentQ.id] === opt

  return (
    <div className="glass-card h-full flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <HelpCircle className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-2xl font-bold">Voter IQ Quiz</h2>
        </div>
        <div className="text-sm font-medium text-slate-400">
          Question {currentIndex + 1} of {questions.length}
        </div>
      </div>

      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-6 leading-relaxed">
          {currentQ.question}
        </h3>

        <div className="space-y-3 mb-8">
          {currentQ.options.map((opt) => (
            <button
              key={opt}
              onClick={() => handleOptionClick(opt)}
              className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 ${
                isSelected(opt) 
                  ? 'border-primary bg-primary/5 text-primary' 
                  : 'border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
        <button 
          onClick={prevQuestion}
          disabled={currentIndex === 0}
          className="text-sm font-semibold text-slate-500 disabled:opacity-30"
        >
          Previous
        </button>
        
        {currentIndex === questions.length - 1 ? (
          <button 
            onClick={submitQuiz}
            disabled={Object.keys(answers).length < questions.length || submitting}
            className="btn-primary py-2 px-8 flex items-center gap-2 disabled:opacity-50"
          >
            {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
            Submit Quiz
          </button>
        ) : (
          <button 
            onClick={nextQuestion}
            className="btn-primary py-2 px-8"
          >
            Next
          </button>
        )}
      </div>
    </div>
  )
}
