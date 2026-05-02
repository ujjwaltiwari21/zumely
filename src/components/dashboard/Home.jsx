"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Sparkles, UploadCloud, FileText, ShieldCheck, Zap, ArrowRight, Eye, Star, TrendingUp } from "lucide-react"

export default function Home() {
    const [isHovered, setIsHovered] = useState(null)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    return (
        <div className="min-h-screen bg-linear-to-b from-[#f8fafc] to-white dark:from-[#0A0A0A] dark:to-[#0A0A0A] transition-colors duration-500 overflow-x-hidden pt-0">
            
            {/* Container with NO top padding on mobile */}
            <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 pt-0 pb-4 sm:pb-6 md:py-8">
                
                {/* Header Section - Reduced top margin */}
                <div className="mb-4 md:mb-12 text-center pt-2 sm:pt-4 md:pt-8">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] md:text-xs font-semibold uppercase tracking-wider mb-3 md:mb-6 backdrop-blur-sm border border-blue-500/20">
                        <Sparkles size={12} className="animate-pulse" />
                        AI-Powered Resume Builder
                    </div>

                    {/* Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.2] md:leading-[1.15]">
                        Design Your
                        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent ml-1 md:ml-2">
                            Future
                        </span>
                    </h1>
                    
                    <p className="text-sm md:text-base lg:text-lg text-slate-500 dark:text-slate-400 font-medium mt-2 md:mt-3 max-w-2xl mx-auto px-2">
                        Create professional resumes that stand out. Powered by advanced AI and 
                        <span className="font-semibold text-blue-600 dark:text-blue-400"> Zumely's</span> cutting-edge technology.
                    </p>
                </div>

                {/* Main Card */}
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/50 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-xl shadow-2xl shadow-blue-500/5 transition-all duration-300">
                    
                    <div className="flex flex-col md:flex-row min-h-[380px] md:h-[500px]">

                        {/* Left Side */}
                        <div
                            onMouseEnter={() => !isMobile && setIsHovered('ai')}
                            onMouseLeave={() => !isMobile && setIsHovered(null)}
                            className={`relative flex-1 p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-100 dark:border-white/5 transition-all duration-500 ${
                                isHovered === 'upload' && !isMobile ? 'md:flex-[0.7] opacity-60' : 'md:flex-1'
                            } ${isHovered === 'ai' && !isMobile ? 'bg-gradient-to-br from-blue-500/5 to-transparent' : ''}`}
                        >
                            <div className="relative z-10">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-3 md:mb-4 shadow-lg shadow-blue-500/25">
                                    <Sparkles size={20} className="text-white" />
                                </div>
                                
                                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white leading-tight mb-2 md:mb-3">
                                    Build from
                                    <br />
                                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Scratch.</span>
                                </h2>
                                
                                <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 md:mb-5 max-w-xs">
                                    Let our AI analyze your skills and craft a market-ready professional identity.
                                </p>
                                
                                <Link href="/dashboard/create-ai">
                                    <button className="group flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-3 md:px-4 py-2 md:py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all hover:gap-3 active:scale-95 shadow-lg">
                                        Create with AI
                                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </Link>
                            </div>

                            <div className={`absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent transition-opacity duration-500 pointer-events-none ${
                                isHovered === 'ai' && !isMobile ? 'opacity-100' : 'opacity-0'
                            }`} />
                        </div>

                        {/* Right Side */}
                        <div
                            onMouseEnter={() => !isMobile && setIsHovered('upload')}
                            onMouseLeave={() => !isMobile && setIsHovered(null)}
                            className={`relative flex-1 p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center bg-gradient-to-b from-slate-50/30 to-transparent dark:from-white/[0.02] transition-all duration-500 ${
                                isHovered === 'ai' && !isMobile ? 'md:flex-[0.7] opacity-60' : 'md:flex-1'
                            } ${isHovered === 'upload' && !isMobile ? 'bg-gradient-to-br from-emerald-500/5 to-transparent' : ''}`}
                        >
                            <div className="relative z-10">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-3 md:mb-4 shadow-lg shadow-emerald-500/25">
                                    <Zap size={20} className="text-white" />
                                </div>
                                
                                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white leading-tight mb-2 md:mb-3">
                                    Revamp
                                    <br />
                                    <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">Existing.</span>
                                </h2>
                                
                                <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 md:mb-5 max-w-xs">
                                    Upload your old resume and let AI transform it into a professional masterpiece.
                                </p>
                                
                                <label className="group inline-flex items-center gap-2 sm:gap-3 cursor-pointer">
                                    <input type="file" className="hidden" />
                                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl border-2 border-dashed border-slate-300 dark:border-white/20 flex items-center justify-center group-hover:border-emerald-500 group-hover:bg-emerald-500/10 transition-all duration-300">
                                        <UploadCloud size={16} className="text-slate-400 group-hover:text-emerald-500 transition-colors" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors text-xs sm:text-sm">
                                            Upload Resume
                                        </span>
                                        <span className="text-[10px] text-slate-400">PDF or DOCX</span>
                                    </div>
                                </label>
                            </div>

                            <div className={`absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent transition-opacity duration-500 pointer-events-none ${
                                isHovered === 'upload' && !isMobile ? 'opacity-100' : 'opacity-0'
                            }`} />
                        </div>
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-5 md:mt-8 flex flex-col sm:flex-row items-center justify-between gap-2 md:gap-3 px-2">
                    <div className="flex items-center gap-2 text-slate-400 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider">
                        <ShieldCheck size={12} className="text-blue-500" />
                        Secure Cloud Processing
                    </div>
                    
                    <div className="flex items-center gap-2 sm:gap-3">
                        <div className="flex -space-x-2">
                            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-700" />
                            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-700" />
                            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-700" />
                            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-white dark:border-slate-900 bg-blue-600 flex items-center justify-center text-[7px] sm:text-[8px] text-white font-bold">
                                1k+
                            </div>
                        </div>
                        <div className="flex items-center gap-1">
                            <Star size={12} className="text-yellow-500 fill-yellow-500" />
                            <span className="text-[10px] sm:text-xs font-medium text-slate-600 dark:text-slate-300">4.9/5</span>
                            <span className="text-[9px] sm:text-[10px] text-slate-400">(2.5k reviews)</span>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-slate-400 text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider">
                        <TrendingUp size={12} className="text-green-500" />
                        89% Interview Rate
                    </div>
                </div>

                {/* Feature Grid */}
                <div className="mt-6 md:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                    <div className="p-2 sm:p-3 rounded-xl bg-white/50 dark:bg-white/5 border border-slate-100 dark:border-white/10 backdrop-blur-sm">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-blue-500/10 flex items-center justify-center mb-1 sm:mb-2">
                            <FileText size={14} className="text-blue-500" />
                        </div>
                        <h3 className="font-semibold text-[11px] sm:text-xs text-slate-800 dark:text-white mb-0.5">ATS Optimized</h3>
                        <p className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400">Pass automated screening</p>
                    </div>
                    
                    <div className="p-2 sm:p-3 rounded-xl bg-white/50 dark:bg-white/5 border border-slate-100 dark:border-white/10 backdrop-blur-sm">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-1 sm:mb-2">
                            <Eye size={14} className="text-emerald-500" />
                        </div>
                        <h3 className="font-semibold text-[11px] sm:text-xs text-slate-800 dark:text-white mb-0.5">Real-time Preview</h3>
                        <p className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400">See changes as you type</p>
                    </div>
                    
                    <div className="p-2 sm:p-3 rounded-xl bg-white/50 dark:bg-white/5 border border-slate-100 dark:border-white/10 backdrop-blur-sm">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-purple-500/10 flex items-center justify-center mb-1 sm:mb-2">
                            <Sparkles size={14} className="text-purple-500" />
                        </div>
                        <h3 className="font-semibold text-[11px] sm:text-xs text-slate-800 dark:text-white mb-0.5">AI Suggestions</h3>
                        <p className="text-[9px] sm:text-[10px] text-slate-500 dark:text-slate-400">Smart recommendations</p>
                    </div>
                </div>
            </div>
        </div>
    )
}