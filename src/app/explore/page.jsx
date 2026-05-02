"use client"

import { ArrowRight, Compass, Sparkles } from "lucide-react"
import Link from "next/link"

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-[#0A0A0A] dark:to-[#0A0A0A] transition-colors duration-500">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-4">
            <Compass size={14} />
            Coming Soon
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Explore <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Opportunities</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Discover new career paths, trending skills, and personalized recommendations
          </p>
        </div>

        {/* Coming Soon Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/60 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10 backdrop-blur-sm p-8 md:p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
              <Compass size={32} className="text-white" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Explore Feature Coming Soon
            </h2>
            <p className="text-slate-500 dark:text-slate-400 mb-6">
              We're working hard to bring you personalized job recommendations, trending skills, and career insights. Stay tuned!
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm">
                🔥 Trending Skills
              </span>
              <span className="px-3 py-1.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-sm">
                📊 Market Insights
              </span>
              <span className="px-3 py-1.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 text-sm">
                🎯 Personalized Jobs
              </span>
            </div>
            <Link href="/" className="inline-flex items-center gap-2 mt-8 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all">
              Back to Home <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}