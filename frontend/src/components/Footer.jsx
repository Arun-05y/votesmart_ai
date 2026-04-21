import { Globe, ExternalLink, Link, Vote } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="glass border-t border-white/20 dark:border-slate-800/20 pt-16 pb-8 px-6 mt-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <Vote className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold tracking-tight">VoteSmart<span className="text-primary italic">AI</span></span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
              An AI-driven initiative to educate and empower every citizen to participate in the democratic process. Making voting simple, accessible, and transparent.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                <Globe className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                <ExternalLink className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                <Link className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-500 dark:text-slate-400">
              <li><a href="#journey" className="hover:text-primary transition-colors">Voting Journey</a></li>
              <li><a href="#tools" className="hover:text-primary transition-colors">Timeline</a></li>
              <li><a href="#tools" className="hover:text-primary transition-colors">Voter Quiz</a></li>
              <li><a href="#guide" className="hover:text-primary transition-colors">Rules & Docs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Official Resources</h4>
            <ul className="space-y-4 text-slate-500 dark:text-slate-400">
              <li><a href="https://nvsp.in" target="_blank" className="hover:text-primary transition-colors">NVSP Portal</a></li>
              <li><a href="https://eci.gov.in" target="_blank" className="hover:text-primary transition-colors">Election Commission</a></li>
              <li><a href="https://voters.eci.gov.in" target="_blank" className="hover:text-primary transition-colors">Voter Services</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© 2026 VoteSmart AI. Built for the Democracy Hackathon.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
