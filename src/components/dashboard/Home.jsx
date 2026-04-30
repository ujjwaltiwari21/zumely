"use client"

import React, { useState } from "react"
import Link from "next/link" // Navigation ke liye import kiya
import { Sparkles, UploadCloud, FileText, ChevronRight, ShieldCheck, Zap } from "lucide-react"

export default function Home() {
    const [isHovered, setIsHovered] = useState(null)

    return (
        <div className="min-h-screen bg-[#f8fafc] dark:bg-[#020617] p-4 md:p-12 transition-colors duration-500 flex items-center justify-center">

            <div className="w-full max-w-5xl">
                {/* Header Section */}
                <div className="mb-10 mt-12 md:mt-24 text-center md:text-left space-y-3 px-4 md:px-0">

                    {/* Main Headline */}
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tighter text-[#333333] dark:text-white leading-[1.1]">
                        Design Your Future 
                        <span className="opacity-100"> Powered </span>
                        <span className="font-normal opacity-14 text-2xl sm:text-3xl md:text-5xl">
                            by ZUMELY
                        </span>
                    </h1>

                    {/* Sub-headline */}
                    <p className="text-sm md:text-lg text-slate-500 dark:text-slate-400 font-medium md:pl-1 max-w-2xl mx-auto md:mx-0">
                        Architecting the next generation of professional excellence
                    </p>

                </div>

                {/* The Unified Liquid Box */}
                <div className="relative overflow-hidden rounded-[2.5rem] md:rounded-[4rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-white/2 shadow-2xl shadow-blue-500/5 backdrop-blur-3xl">

                    <div className="flex flex-col md:flex-row min-h-[400px] md:h-[500px]">

                        {/* Left Side: AI Engine */}
                        <div
                            onMouseEnter={() => setIsHovered('ai')}
                            onMouseLeave={() => setIsHovered(null)}
                            className={`relative flex-1 p-8 md:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-100 dark:border-white/5 transition-all duration-700 ${isHovered === 'upload' ? 'md:flex-[0.7] opacity-50' : 'md:flex-[1.3]'}`}
                        >
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-6">
                                    <Sparkles size={12} /> Neural Synthesis
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white leading-none mb-6">
                                    Build from <br /> <span className="text-blue-600">Scratch.</span>
                                </h2>
                                <p className="text-slate-500 dark:text-slate-400 max-w-xs mb-8 text-sm md:text-base leading-relaxed font-medium">
                                    Let our AI analyze your skills and craft a market-ready professional identity.
                                </p>
                                
                                {/* Yahan Link add kiya h navigation ke liye */}
                                <Link href="/dashboard/create-ai">
                                    <button className="group flex items-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-bold transition-all hover:gap-5 active:scale-95 shadow-xl">
                                        Create with AI <ChevronRight size={18} />
                                    </button>
                                </Link>
                            </div>

                            <div className={`absolute inset-0 bg-blue-500/5 transition-opacity duration-700 ${isHovered === 'ai' ? 'opacity-100' : 'opacity-0'}`} />
                        </div>

                        {/* Right Side: Upload System */}
                        <div
                            onMouseEnter={() => setIsHovered('upload')}
                            onMouseLeave={() => setIsHovered(null)}
                            className={`relative flex-1 p-8 md:p-16 flex flex-col justify-center bg-slate-50/50 dark:bg-white/[0.01] transition-all duration-700 ${isHovered === 'ai' ? 'md:flex-[0.7] opacity-50' : 'md:flex-[1.3]'}`}
                        >
                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-6">
                                    <Zap size={12} /> Fast Import
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white leading-none mb-6">
                                    Revamp <br /> <span className="text-emerald-500">Existing.</span>
                                </h2>
                                <label className="group inline-flex items-center gap-4 cursor-pointer">
                                    <input type="file" className="hidden" />
                                    <div className="w-16 h-16 rounded-2xl border-2 border-dashed border-slate-300 dark:border-white/20 flex items-center justify-center group-hover:border-emerald-500 transition-colors">
                                        <UploadCloud className="text-slate-400 group-hover:text-emerald-500" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">Upload Resume</span>
                                        <span className="text-xs text-slate-400 italic">PDF or DOCX (Max 1MB)</span>
                                    </div>
                                </label>
                            </div>

                            <div className={`absolute inset-0 bg-emerald-500/5 transition-opacity duration-700 ${isHovered === 'upload' ? 'opacity-100' : 'opacity-0'}`} />
                        </div>

                    </div>
                </div>

                {/* Floating Trust Indicator */}
                <div className="mt-8 flex flex-col md:flex-row items-center justify-between px-4 gap-4">
                    <div className="flex items-center gap-2 text-slate-400 text-[11px] font-bold uppercase tracking-[0.2em]">
                        <ShieldCheck size={14} className="text-blue-500" /> Secure Cloud Processing
                    </div>
                    <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-[#020617] bg-slate-200 dark:bg-white/10" />
                        ))}
                        <div className="w-8 h-8 rounded-full border-2 border-white dark:border-[#020617] bg-blue-600 flex items-center justify-center text-[10px] text-white font-bold">
                            +1k
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}