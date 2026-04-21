import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ElectionJourney from './components/ElectionJourney'
import TimelineGenerator from './components/TimelineGenerator'
import VoterGuide from './components/VoterGuide'
import QuizModule from './components/QuizModule'
import ChatAssistant from './components/ChatAssistant'
import Footer from './components/Footer'


function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark' || 
    (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode(!darkMode)

  return (
    <div className="min-h-screen">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="container mx-auto px-4 py-8 space-y-24">
        <Hero />
        
        <section id="journey" className="scroll-mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Voting Journey</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              Follow these simple steps to ensure your voice is heard in the next election.
            </p>
          </div>
          <ElectionJourney />
        </section>

        <section id="tools" className="grid grid-cols-1 lg:grid-cols-2 gap-8 scroll-mt-24">
          <TimelineGenerator />
          <QuizModule />
        </section>

        <section id="guide" className="scroll-mt-24">
          <VoterGuide />
        </section>

        <div className="fixed bottom-6 right-6 z-50">
          <ChatAssistant />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
