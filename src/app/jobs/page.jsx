"use client"

import { ArrowRight, Briefcase, Building2, MapPin, Clock } from "lucide-react"
import Link from "next/link"

export default function JobsPage() {
  // Sample job listings (placeholder data)
  const sampleJobs = [
    { title: "Senior Software Engineer", company: "Tech Corp", location: "Remote", type: "Full-time" },
    { title: "Frontend Developer", company: "Design Studio", location: "Bangalore", type: "Full-time" },
    { title: "Product Manager", company: "Startup Inc", location: "Mumbai", type: "Contract" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-[#0A0A0A] dark:to-[#0A0A0A] transition-colors duration-500">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-4">
            <Briefcase size={14} />
            Job Portal
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Find Your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Dream Job</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Search thousands of opportunities from top companies
          </p>
        </div>

        {/* Coming Soon Banner */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl p-4 text-center border border-blue-200/20">
            <p className="text-sm text-slate-600 dark:text-slate-300">
              🚀 <span className="font-semibold">Full job portal coming soon!</span> We're adding thousands of jobs from top companies.
            </p>
          </div>
        </div>

        {/* Sample Listings */}
        <div className="max-w-3xl mx-auto space-y-3 mb-8">
          <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider px-2">
            Featured Opportunities
          </h3>
          {sampleJobs.map((job, idx) => (
            <div key={idx} className="bg-white/60 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 p-4 transition-all hover:shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">{job.title}</h4>
                  <div className="flex flex-wrap gap-3 mt-1 text-xs text-slate-500">
                    <span className="flex items-center gap-1"><Building2 size={12} /> {job.company}</span>
                    <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {job.type}</span>
                  </div>
                </div>
                <button className="px-4 py-1.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium hover:bg-blue-500/20 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Card */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white/60 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10 backdrop-blur-sm p-6 md:p-8">
            <Briefcase size={40} className="mx-auto mb-4 text-slate-400" />
            <p className="text-slate-500 dark:text-slate-400 mb-4">
              Full job listings, filters, and application tracking are on their way!
            </p>
            <Link href="/" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all">
              Back to Home <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}