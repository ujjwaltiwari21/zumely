"use client"

import { Zap, BrainCircuit, FileCheck, Target } from "lucide-react"

const steps = [
  {
    title: "AI Analysis",
    desc: "Humara advanced AI engine aapke industry standards aur job description ko scan karta hai.",
    icon: <BrainCircuit className="text-blue-600" />,
    color: "bg-blue-50 dark:bg-blue-900/20",
  },
  {
    title: "Smart Content Generation",
    desc: "AI-powered suggestions jo aapke skills ko impact-driven bullet points mein convert karte hain.",
    icon: <Zap className="text-blue-600" />,
    color: "bg-indigo-50 dark:bg-indigo-900/20",
  },
  {
    title: "ATS Optimization",
    desc: "Resume ko aise optimize kiya jata hai ki wo kisi bhi Applicant Tracking System ko 99% accuracy se pass kare.",
    icon: <Target className="text-blue-600" />,
    color: "bg-sky-50 dark:bg-sky-900/20",
  },
  {
    title: "Ready to Land Job",
    desc: "Ek professional, clean aur recruiter-ready PDF jo aapko baki candidates se alag khada karega.",
    icon: <FileCheck className="text-blue-600" />,
    color: "bg-emerald-50 dark:bg-emerald-900/20",
  }
]

export function Process() {
  return (
    <section className="py-24 bg-slate-50/50 dark:bg-slate-900/20" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header with Semantic SEO Tags */}
        <header className="text-center mb-16 space-y-4">
          <h2 id="process-heading" className="text-sm font-black uppercase tracking-[0.3em] text-blue-600">
            How It Works
          </h2>
          <p className="text-4xl md:text-5xl font-bold tracking-tight text-slate-950 dark:text-white">
            Smart Way to Build Your <br className="hidden md:block" /> Professional Identity
          </p>
        </header>

        {/* Bento Grid Layout using Article tags for SEO */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <article 
              key={i} 
              className="group relative p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 overflow-hidden"
            >
              {/* Step Number Background */}
              <span className="absolute -right-4 -top-4 text-9xl font-black text-slate-50 dark:text-slate-900/50 group-hover:text-blue-500/5 transition-colors -z-10 select-none">
                {i + 1}
              </span>

              <div className={`w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                {step.icon}
              </div>

              <h3 className="text-xl font-bold mb-3 text-slate-950 dark:text-white uppercase tracking-tight">
                {step.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {step.desc}
              </p>

              {/* Decorative Line */}
              <div className="mt-8 h-[2px] w-8 bg-slate-100 dark:bg-slate-800 group-hover:w-full group-hover:bg-blue-600 transition-all duration-700" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}