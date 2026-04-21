import { useState } from 'react'
import axios from 'axios'
import { Calendar, Loader2, MapPin, Search } from 'lucide-react'

export default function TimelineGenerator() {
  const [location, setLocation] = useState('India')
  const [type, setType] = useState('national')
  const [timeline, setTimeline] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchTimeline = async () => {
    setLoading(true)
    try {
      const res = await axios.get(`http://localhost:5000/api/timeline?country=${location}&type=${type}`)
      setTimeline(res.data)
    } catch (err) {
      console.error(err)
      alert('Timeline data not available for this selection.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="glass-card h-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Calendar className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-2xl font-bold">Election Timeline</h2>
      </div>

      <div className="space-y-4 mb-8">
        <div>
          <label className="block text-sm font-medium text-slate-500 mb-1.5 ml-1">Your Location</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl py-3 pl-10 pr-4 focus:ring-2 focus:ring-primary outline-none transition-all"
              placeholder="e.g. India"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-500 mb-1.5 ml-1">Election Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary outline-none transition-all cursor-pointer"
          >
            <option value="national">General Elections (Lok Sabha)</option>
            <option value="state">State Assembly Elections</option>
            <option value="local">Local Body Elections</option>
          </select>
        </div>

        <button 
          onClick={fetchTimeline}
          disabled={loading}
          className="w-full btn-primary py-3 flex items-center justify-center gap-2"
        >
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
          Generate Timeline
        </button>
      </div>

      {timeline && (
        <div className="space-y-6 animate-fade-in border-t border-slate-100 dark:border-slate-800 pt-6">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider">{timeline.description}</p>
          
          <div className="relative pl-8 space-y-8">
            <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-slate-200 dark:bg-slate-800" />
            
            <div className="relative">
              <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-blue-500/20" />
              <div>
                <p className="text-sm text-slate-500">Registration Deadline</p>
                <p className="text-lg font-bold">{new Date(timeline.registration_deadline).toLocaleDateString('en-IN', { dateStyle: 'long' })}</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-amber-500 ring-4 ring-amber-500/20" />
              <div>
                <p className="text-sm text-slate-500">Voting Day</p>
                <p className="text-lg font-bold">{new Date(timeline.voting_date).toLocaleDateString('en-IN', { dateStyle: 'long' })}</p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-green-500 ring-4 ring-green-500/20" />
              <div>
                <p className="text-sm text-slate-500">Result Day</p>
                <p className="text-lg font-bold">{new Date(timeline.result_date).toLocaleDateString('en-IN', { dateStyle: 'long' })}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
