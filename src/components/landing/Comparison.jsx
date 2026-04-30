"use client"

import React from "react"
import { Check, X, ShieldCheck, Sparkles } from "lucide-react"

const features = [
  { name: "Neural Content Gen", traditional: false, zumely: "AI Powered" },
  { name: "ATS Semantic Opt.", traditional: "Basic", zumely: "99.8%" },
  { name: "Industry Templates", traditional: "Static", zumely: "Dynamic" },
  { name: "Formatting Sync", traditional: "Manual", zumely: "Instant" },
  { name: "Keyword Intel", traditional: false, zumely: true },
  { name: "Recruiter Analysis", traditional: false, zumely: true },
]

export function Comparison() {
  return (
    <section className="py-12 md:py-20 bg-white dark:bg-[#020617] transition-colors duration-500" aria-labelledby="comp-heading">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        
        <header className="flex flex-col items-center text-center mb-12 md:mb-20">
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/10 bg-blue-500/5 text-blue-600 dark:text-blue-400 font-bold text-[9px] md:text-[10px] uppercase tracking-[0.2em] mb-4">
            <ShieldCheck className="w-3 h-3 md:w-3.5 md:h-3.5" />
            The Zumely Advantage
          </div> */}
          
          <h2 id="comp-heading" className="flex flex-wrap justify-center items-center gap-x-2 md:gap-x-3 text-2xl md:text-5xl font-medium text-slate-800 dark:text-white tracking-tighter leading-tight">
            <span>Why Choose</span>
            <span className="text-blue-600 dark:text-blue-500 italic">Zumely AI</span>
            <span>Over Legacy Systems?</span>
          </h2>
        </header>

        <div className="relative rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/2 backdrop-blur-xl shadow-xl overflow-hidden">
          
          <div className="grid grid-cols-3 bg-slate-50/50 dark:bg-white/3 p-4 md:p-8 border-b border-slate-200 dark:border-white/10">
            <div className="text-[9px] md:text-[11px] font-bold uppercase tracking-wider text-slate-400">Capability</div>
            <div className="text-[9px] md:text-[11px] font-bold uppercase tracking-wider text-center text-slate-400">Legacy</div>
            <div className="text-[9px] md:text-[11px] font-bold uppercase tracking-wider text-center text-blue-600 dark:text-blue-400 flex items-center justify-center gap-1">
              <Sparkles className="hidden md:block w-3 h-3" /> Zumely
            </div>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-white/5">
            {features.map((f, i) => (
              <div key={i} className="grid grid-cols-3 p-4 md:p-7 items-center hover:bg-slate-50/80 dark:hover:bg-white/2 transition-colors group">
                
                <div className="text-[11px] md:text-sm font-medium text-slate-700 dark:text-slate-300 pr-2">
                  {f.name}
                </div>
                
                <div className="flex justify-center">
                  {typeof f.traditional === "boolean" ? (
                    f.traditional ? 
                      <Check className="text-slate-400 w-4 h-4 md:w-5 md:h-5" /> : 
                      <X className="text-slate-300 dark:text-slate-700 w-4 h-4 md:w-5 md:h-5" />
                  ) : (
                    <span className="text-[9px] md:text-[11px] font-medium text-slate-500 bg-slate-100 dark:bg-slate-800/50 px-2 py-0.5 rounded-md">
                      {f.traditional}
                    </span>
                  )}
                </div>

                <div className="flex justify-center">
                  {typeof f.zumely === "boolean" ? (
                    f.zumely ? (
                      <div className="bg-blue-500/10 p-1 rounded-full">
                        <Check className="text-blue-600 dark:text-blue-400 w-4 h-4 md:w-5 md:h-5" strokeWidth={3} />
                      </div>
                    ) : <X className="w-4 h-4 md:w-5 md:h-5" />
                  ) : (
                    <span className="text-[9px] md:text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-600/10 dark:bg-blue-400/10 px-2 md:px-4 py-1 rounded-md md:rounded-lg border border-blue-600/20">
                      {f.zumely}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
           <p className="text-[10px] md:text-xs text-slate-400 flex items-center gap-2">
             <ShieldCheck className="text-emerald-500 w-3 h-3 md:w-4 md:h-4" />
             Optimized for 2026 Recruitment Standards
           </p>
        </div>

      </div>
    </section>
  )
}