import { BookOpen, CheckCircle, Info, XCircle } from 'lucide-react'

const guideSections = [
  {
    title: 'Required Documents',
    icon: Info,
    items: [
      'Voter ID (EPIC Card)',
      'Aadhar Card / PAN Card',
      'Driving License / Passport',
      'Bank Passbook with photo',
      'MNREGA Job Card'
    ],
    color: 'border-blue-500'
  },
  {
    title: 'Voting Do\'s',
    icon: CheckCircle,
    items: [
      'Carry your original ID proof',
      'Check your booth location in advance',
      'Verify your name in electoral roll',
      'Request help from poll officers if needed',
      'Be patient in the queue'
    ],
    color: 'border-green-500'
  },
  {
    title: 'Voting Don\'ts',
    icon: XCircle,
    items: [
      'Don\'t carry mobile phones inside',
      'Don\'t take photos of the ballot/EVM',
      'Don\'t reveal your vote to anyone',
      'Don\'t wear party-specific symbols',
      'Don\'t attempt to vote twice'
    ],
    color: 'border-red-500'
  }
]

export default function VoterGuide() {
  return (
    <div className="space-y-12">
      <div className="flex items-center justify-center gap-3">
        <BookOpen className="w-8 h-8 text-primary" />
        <h2 className="text-3xl font-bold">Comprehensive Voter Guide</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {guideSections.map((section, idx) => (
          <div key={idx} className={`glass-card border-t-8 ${section.color}`}>
            <div className="flex items-center gap-3 mb-6">
              <section.icon className={`w-6 h-6 ${section.color.replace('border-', 'text-')}`} />
              <h3 className="text-xl font-bold">{section.title}</h3>
            </div>
            <ul className="space-y-4">
              {section.items.map((item, i) => (
                <li key={i} className="flex gap-3 text-slate-600 dark:text-slate-400">
                  <div className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${section.color.replace('border-', 'bg-')}`} />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
