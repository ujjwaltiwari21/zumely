"use client";

import React from "react";
import { Zap, Shield, BarChart3, Smartphone, Globe, CheckCircle2, Sparkles } from "lucide-react";

const features = [
  {
    title: "AI-Powered Job Matching",
    description: "Our advanced algorithms match your profile with the most relevant career opportunities instantly.",
    icon: <Zap className="w-6 h-6 text-blue-400" />,
    color: "from-blue-500/20",
  },
  {
    title: "Enterprise Grade Security",
    description: "Your personal data and professional history are protected by industry-leading encryption.",
    icon: <Shield className="w-6 h-6 text-emerald-400" />,
    color: "from-emerald-500/20",
  },
  {
    title: "Real-time ATS Analytics",
    description: "Get detailed insights into how your resume performs against Applicant Tracking Systems.",
    icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
    color: "from-purple-500/20",
  },
  {
    title: "Mobile Optimization",
    description: "Manage your job search and applications on the go with our fully responsive interface.",
    icon: <Smartphone className="w-6 h-6 text-orange-400" />,
    color: "from-orange-500/20",
  },
  {
    title: "Global Job Network",
    description: "Access a wide range of remote and on-site opportunities from top tech hubs worldwide.",
    icon: <Globe className="w-6 h-6 text-indigo-400" />,
    color: "from-indigo-500/20",
  },
  {
    title: "Seamless Integration",
    description: "Connect your professional profiles effortlessly for a unified application experience.",
    icon: <CheckCircle2 className="w-6 h-6 text-teal-400" />,
    color: "from-teal-500/20",
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#020617] pt-28 pb-20 px-4 md:px-6 relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-emerald-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 mb-6 backdrop-blur-sm">
            <Sparkles size={14} className="text-blue-400" />
            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-blue-400 font-bold">The Future of Hiring</span>
          </div>
          
          {/* Responsive Font Width & Size using Clamp */}
          <h1 className="text-[clamp(2.5rem,8vw,4.5rem)] font-[500] leading-[1.1] text-white mb-6">
            Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Career Tools</span>
          </h1>
          
          <p className="text-slate-400 text-base md:text-xl max-w-2xl mx-auto font-light leading-relaxed px-2">
            Everything you need to accelerate your career growth and land your dream role in the tech ecosystem.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:bg-white/[0.07] transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Subtle Gradient Glow on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 group-hover:border-blue-500/30 transition-all duration-500">
                  {feature.icon}
                </div>
                
                {/* Responsive Weight for Titles */}
                <h3 className="text-xl md:text-2xl font-extrabold text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed text-sm md:text-base font-normal">
                  {feature.description}
                </p>

                <div className="mt-6 flex items-center text-[10px] font-bold uppercase tracking-widest text-blue-500/0 group-hover:text-blue-500/100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                  Learn More <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Footer-like Text for SEO */}
      <div className="mt-20 text-center opacity-20 pointer-events-none">
        <p className="text-[clamp(3rem,15vw,10rem)] font-black text-white/5 tracking-tighter uppercase select-none">
          Innovation
        </p>
      </div>
    </div>
  );
}