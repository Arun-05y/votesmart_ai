import { Sun, Moon, Vote } from 'lucide-react'

export default function Navbar({ darkMode, toggleDarkMode }) {
  const navLinks = [
    { name: 'Journey', href: '#journey' },
    { name: 'Timeline', href: '#tools' },
    { name: 'Quiz', href: '#tools' },
    { name: 'Guide', href: '#guide' },
  ]

  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/20 dark:border-slate-800/20 px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-primary/20 p-2 rounded-lg">
            <Vote className="w-8 h-8 text-primary" />
          </div>
          <span className="text-xl font-bold tracking-tight">
            VoteSmart<span className="text-primary italic">AI</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-xl glass hover:bg-white dark:hover:bg-slate-800 transition-all border border-slate-200 dark:border-slate-700"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
          </button>
          
          <button className="hidden sm:block btn-primary text-sm py-2">
            Register Now
          </button>
        </div>
      </div>
    </nav>
  )
}
