import { useState } from 'react'
import { UserCheck, FileText, ClipboardCheck, MapPin, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    title: 'Check Eligibility',
    desc: 'Ensure you are 18+ and an Indian citizen.',
    icon: UserCheck,
    color: 'bg-blue-500',
  },
  {
    title: 'Register Voter ID',
    desc: 'Fill Form 6 on NVSP website or mobile app.',
    icon: FileText,
    color: 'bg-purple-500',
  },
  {
    title: 'Verify Details',
    desc: 'Check your name in the Electoral Roll.',
    icon: ClipboardCheck,
    color: 'bg-indigo-500',
  },
  {
    title: 'Find Polling Booth',
    desc: 'Locate your designated voting station.',
    icon: MapPin,
    color: 'bg-amber-500',
  },
  {
    title: 'Vote on Election Day',
    desc: 'Cast your vote and get the indelible ink!',
    icon: CheckCircle2,
    color: 'bg-green-500',
  },
]

export default function ElectionJourney() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Progress Bar */}
      <div className="relative mb-16 px-8">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 -z-10 rounded-full" />
        <div 
          className="absolute top-1/2 left-0 h-1 bg-primary -translate-y-1/2 -z-10 rounded-full transition-all duration-500"
          style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
        />
        
        <div className="flex justify-between items-center">
          {steps.map((step, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border-4 border-slate-50 dark:border-slate-950 ${
                idx <= activeStep 
                  ? 'bg-primary text-white scale-110' 
                  : 'bg-slate-200 dark:bg-slate-800 text-slate-400'
              }`}
            >
              <step.icon className="w-6 h-6" />
            </button>
          ))}
        </div>
      </div>

      {/* active Step Detail */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {steps.map((step, idx) => (
          <div
            key={idx}
            onClick={() => setActiveStep(idx)}
            className={`glass-card cursor-pointer ${
              idx === activeStep 
                ? 'ring-2 ring-primary ring-offset-4 dark:ring-offset-slate-950 ring-opacity-50 scale-105' 
                : 'opacity-60 grayscale-[0.5]'
            }`}
          >
            <div className={`w-12 h-12 rounded-xl ${step.color} text-white flex items-center justify-center mb-4`}>
              <step.icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-2">{step.title}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
