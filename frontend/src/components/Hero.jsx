import { ArrowRight, CheckCircle, ShieldCheck, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <div className="relative pt-12 pb-16 md:pt-20 md:pb-28">
      {/* Decorative Blur */}
      <div className="absolute top-0 -left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 -right-10 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -z-10" />

      <div className="text-center space-y-8 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
          <Sparkles className="w-4 h-4" />
          <span>Empowering India's Democracy with AI</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Vote <span className="gradient-text">Smarter</span>, <br />
          Shape Your Future.
        </h1>
        
        <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
          The ultimate AI-powered guide for every Indian citizen. Understand the election process, check your eligibility, and register to vote in simple steps.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
          <button className="btn-primary flex items-center justify-center gap-2 text-white">
            Get Started <ArrowRight className="w-5 h-5" />
          </button>
          <button className="btn-accent flex items-center justify-center gap-2">
            Watch Guide
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-8 pt-12 text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-sm">Verified Data</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-sm">AI Powered Support</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-sm">Easy Registration</span>
          </div>
        </div>
      </div>
    </div>
  )
}
