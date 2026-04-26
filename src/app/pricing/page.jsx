"use client";

import React from "react";
import Link from "next/link";
import { Check, Star, Zap, Shield, BarChart3, Target, Sparkles, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Starter",
    price: "$0",
    description: "Ideal for students and tech enthusiasts beginning their journey.",
    features: ["1 AI Resume Review/mo", "Basic Career Matching", "Community Access", "Public Talent Profile"],
    cta: "Start Free",
    featured: false,
  },
  {
    name: "Pro",
    price: "$19",
    description: "Designed for active job seekers aiming for top-tier tech roles.",
    features: ["Unlimited AI Reviews", "Priority Job Matching", "Advanced ATS Analytics", "Private Growth Dashboard", "Premium Interview Prep"],
    cta: "Go Pro",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Scalable workforce solutions for recruitment teams and startups.",
    features: ["Bulk Talent Analysis", "Dedicated Support", "API Access", "Custom Branding", "Collaborative Hiring"],
    cta: "Contact Sales",
    featured: false,
  },
];

const testimonials = [
  { name: "Rahul S.", role: "SDE at Google", text: "Zumely's ATS analyzer was a game-changer. My interview callback rate jumped by 60%." },
  { name: "Anjali M.", role: "MCA Student", text: "The AI career matching is incredibly accurate. It found roles I didn't even know I was qualified for." },
  { name: "Kevin D.", role: "Product Manager", text: "The glass-morphic UI is not just beautiful; it's highly intuitive. Best career tool in the market." },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* BACKGROUND DECOR */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[5%] -left-[10%] w-[60%] md:w-[40%] h-[40%] bg-blue-600/10 blur-[80px] md:blur-[120px] rounded-full" />
        <div className="absolute top-[20%] -right-[10%] w-[50%] md:w-[30%] h-[30%] bg-emerald-600/10 blur-[80px] md:blur-[120px] rounded-full" />
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-24 md:pt-32 pb-16 md:pb-24 text-center px-4 md:px-6 max-w-6xl mx-auto z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 mb-6">
          <Sparkles size={12} className="text-blue-400" />
          <span className="text-[10px] md:text-[11px] uppercase tracking-widest text-blue-400 font-bold">AI-Powered Career Evolution</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-width-500 leading-[1.15] md:leading-[1.1] tracking-tight text-white">
          Elevate Your Career with <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500">
            Intelligent Automation
          </span>
        </h1>
        
        <p className="mt-6 md:mt-8 text-base md:text-xl text-slate-400 max-w-2xl md:max-w-3xl mx-auto font-light leading-relaxed px-2">
          Optimize your professional presence, decode ATS algorithms, and land your dream role with Zumely's advanced AI career ecosystem.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 px-4">
          <Link href="/login" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-7 rounded-2xl text-lg font-bold shadow-lg shadow-blue-600/20 transition-all active:scale-95">
              Get Started Free
            </Button>
          </Link>
          <Link href="/login" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto bg-white/5 border-slate-800 backdrop-blur-md px-8 py-7 rounded-2xl text-lg font-bold hover:bg-white/10 transition-all">
              View Live Demo
            </Button>
          </Link>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="relative py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Future-Ready Features</h2>
          <p className="text-slate-500 mt-4 text-sm md:text-lg">Neural networks built to outpace the competition.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { title: "Neural Resume Parsing", icon: <Zap className="text-blue-400" />, desc: "Instantly identify gaps in your resume with deep-learning insights." },
            { title: "Predictive Matching", icon: <Target className="text-emerald-400" />, desc: "Get matched with high-growth companies based on technical DNA." },
            { title: "ATS Shadowing", icon: <BarChart3 className="text-purple-400" />, desc: "See exactly how hiring bots score your profile before you apply." },
            { title: "Interview Simulation", icon: <Sparkles className="text-orange-400" />, desc: "Practice with AI-driven technical questions tailored to your tech stack." },
            { title: "Security First", icon: <Shield className="text-red-400" />, desc: "Enterprise-grade encryption for all your professional data." },
            { title: "Global Analytics", icon: <Quote className="text-indigo-400" />, desc: "Benchmark your skills against global talent in real-time." },
          ].map((item, i) => (
            <div key={i} className="p-6 md:p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-slate-900 flex items-center justify-center mb-5 md:mb-6 shadow-inner">
                {React.cloneElement(item.icon, { size: 20 })}
              </div>
              <h3 className="font-bold text-lg md:text-xl text-white mb-3">{item.title}</h3>
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="relative py-16 md:py-24 px-4 md:px-6 max-w-7xl mx-auto z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Flexible Intelligence Plans</h2>
          <p className="text-slate-500 mt-4 text-sm md:text-lg">Scalable pricing for every stage of your journey.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`relative p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] border transition-all duration-500 ${
                tier.featured
                  ? "border-blue-500/50 bg-blue-500/5 backdrop-blur-2xl shadow-2xl shadow-blue-500/10 md:scale-105 z-20"
                  : "border-white/10 bg-white/5 backdrop-blur-xl"
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[10px] font-bold px-4 py-1 rounded-full tracking-widest uppercase shadow-lg shadow-blue-500/40">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">{tier.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl md:text-5xl font-extrabold text-white">{tier.price}</span>
                {tier.price !== "Custom" && <span className="text-slate-500 font-medium text-sm">/month</span>}
              </div>
              <p className="text-xs md:text-sm text-slate-400 mb-8 leading-relaxed">{tier.description}</p>

              <ul className="space-y-4 mb-10">
                {tier.features.map((f, i) => (
                  <li key={i} className="flex gap-3 items-center text-[13px] md:text-sm text-slate-300">
                    <Check size={16} className="text-emerald-400 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link href="/login">
                <Button className={`w-full py-6 md:py-7 rounded-2xl font-bold text-base md:text-lg transition-all active:scale-95 ${
                  tier.featured ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-white/10 hover:bg-white/20 text-white"
                }`}>
                  {tier.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-16 md:py-24 px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-6 text-center md:text-left">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Success Stories</h2>
              <p className="text-slate-500 mt-4 text-sm md:text-lg">Join 50,000+ professionals accelerating their careers.</p>
            </div>
            <div className="flex gap-1 text-emerald-400">
              {[1, 2, 3, 4, 5].map((s) => <Star key={s} fill="currentColor" size={16} />)}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="p-6 md:p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm flex flex-col justify-between">
                <div>
                  <Quote className="text-blue-500/10 mb-4" size={30} />
                  <p className="text-sm md:text-base text-slate-300 italic leading-relaxed">"{t.text}"</p>
                </div>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-emerald-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-sm">{t.name}</h4>
                    <p className="text-[10px] md:text-xs text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 md:py-24 text-center px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-gradient-to-b from-blue-600/20 to-transparent border border-blue-500/20 backdrop-blur-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Ready to lead the tech curve?</h2>
          <p className="text-slate-400 text-sm md:text-lg mb-10 font-light px-2">Join Zumely today and transform your professional data into a career-launching asset.</p>
          <Link href="/login">
            <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-7 rounded-2xl text-lg md:text-xl font-bold shadow-xl shadow-blue-600/40 transition-all active:scale-95">
              Get Started for Free
            </Button>
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-white/5 text-center text-[10px] md:text-sm text-slate-600 z-10 relative px-4">
        <p>© {new Date().getFullYear()} Zumely Intelligence. All rights reserved.</p>
        <div className="flex justify-center gap-4 md:gap-6 mt-4">
          <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Support</a>
        </div>
      </footer>
    </div>
  );
}