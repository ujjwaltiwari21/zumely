"use client"

import React, { useState } from "react"
import { Zap, BrainCircuit, FileCheck, Target, Sparkles, ChevronDown } from "lucide-react"

const steps = [
  {
    title: "Neural Analysis",
    desc: "Our advanced AI engine scans your profile against global industry standards and specific job DNA.",
    icon: <BrainCircuit className="w-5 h-5 md:w-7 md:h-7 text-blue-400" />,
    glow: "bg-blue-500/10",
  },
  {
    title: "Intelligent Synthesis",
    desc: "AI-powered suggestions transform your raw experience into high-impact, professional narratives.",
    icon: <Zap className="w-5 h-5 md:w-7 md:h-7 text-emerald-400" />,
    glow: "bg-emerald-500/10",
  },
  {
    title: "ATS Engineering",
    desc: "Precision optimization ensures your resume bypasses Applicant Tracking Systems with 99.8% compatibility.",
    icon: <Target className="text-purple-400 w-5 h-5 md:w-7 md:h-7" />,
    glow: "bg-purple-500/10",
  },
  {
    title: "Deployment Ready",
    desc: "Generate a recruiter-validated, high-performance professional identity ready to dominate the market.",
    icon: <FileCheck className="text-orange-400 w-5 h-5 md:w-7 md:h-7" />,
    glow: "bg-orange-500/10",
  }
]

export function Process() {
  const [openStep, setOpenStep] = useState(null);

  return (
    <section className="relative py-24 bg-white dark:bg-[#020617] overflow-hidden">

      {/* DESKTOP ONLY: Animated Connecting Diagram */}
      <div className="hidden lg:block absolute top-[55%] left-1/2 -translate-x-1/2 w-[75%] h-[2px] z-0">
        <svg width="100%" height="2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 1H1000" stroke="url(#paint0_linear)" strokeWidth="2" strokeDasharray="8 8" />
          <defs>
            <linearGradient id="paint0_linear" x1="0" y1="1" x2="1000" y2="1" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3B82F6" stopOpacity="0" />
              <stop offset="0.5" stopColor="#3B82F6" />
              <stop offset="1" stopColor="#10B981" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        {/* Animated Pulse Dot */}
        <div className="absolute top-1/2 w-4 h-4 bg-blue-500 rounded-full blur-sm animate-flow-line" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <header className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/10 bg-blue-500/5 mb-4">
            <Sparkles size={14} className="text-blue-600" />
            <span className="text-[10px] uppercase tracking-widest text-blue-600 font-bold">The Workflow</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-slate-900 dark:text-white">
            Smart Way to Build Your Professional <span className="font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-500 to-emerald-500 dark:from-blue-400 dark:via-indigo-300 dark:to-emerald-400">
               Identity
            </span>
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8">
          {steps.map((step, i) => (
            <article key={i} className="relative group">
              <div
                onClick={() => setOpenStep(openStep === i ? null : i)}
                className="relative p-5 md:p-8 rounded-[2rem] border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/[0.03] backdrop-blur-xl transition-all duration-500 cursor-pointer lg:cursor-default hover:shadow-2xl hover:shadow-blue-500/10 flex flex-row lg:flex-col items-center lg:items-start gap-4"
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem] ${step.glow} blur-2xl -z-10`} />

                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center border border-white/50 dark:border-white/5 shadow-inner ${step.glow}`}>
                  {step.icon}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm md:text-lg font-bold md:font-medium uppercase tracking-wider text-slate-900 dark:text-white">
                      {step.title}
                    </h3>
                    <ChevronDown className={`lg:hidden transition-transform duration-300 ${openStep === i ? "rotate-180" : ""}`} size={18} />
                  </div>

                  {/* Desktop Description */}
                  <p className="hidden lg:block mt-4 text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* MOBILE DROPDOWN: Animated Height */}
              <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${openStep === i ? "max-h-40 mt-2" : "max-h-0"}`}>
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed border border-slate-100 dark:border-white/5">
                  {step.desc}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes flow-line {
          0% { left: 0%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        .animate-flow-line {
          animation: flow-line 4s linear infinite;
        }
      `}</style>
    </section>
  )
}