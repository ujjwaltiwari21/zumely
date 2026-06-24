"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sparkles, FilePlus, ChevronRight, Zap, ArrowRight } from "lucide-react"

export function Hero() {
    const router = useRouter()

    return (
        <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden px-4 py-12 md:py-20">
            {/* Premium Background Effects */}
            <div className="absolute inset-0 -z-10">
                {/* Primary glow */}
                <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-blue-500/15 dark:bg-blue-500/10 blur-[100px] rounded-full" />
                
                {/* Secondary glow */}
                <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[50%] bg-indigo-500/10 dark:bg-indigo-500/5 blur-[120px] rounded-full" />
                
                {/* Tertiary glow */}
                <div className="absolute top-[30%] left-[-5%] w-[40%] h-[40%] bg-purple-500/10 dark:bg-purple-500/5 blur-[100px] rounded-full" />
                
                {/* Subtle dot pattern instead of SVG */}
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
            </div>

            <div className="max-w-7xl mx-auto w-full">
                <div className="text-center space-y-6 md:space-y-10">
                    
                    {/* Premium Badge - Mobile Optimized */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-800/50 shadow-sm animate-fade-in">
                        <Sparkles size={14} className="text-blue-500" />
                        <span className="text-[11px] md:text-xs font-semibold tracking-wider text-slate-600 dark:text-slate-400 uppercase">
                            AI-Powered Career Growth
                        </span>
                        <Zap size={10} className="text-yellow-500" />
                    </div>

                    {/* Ultra-Bold Headline - Responsive Font Sizes */}
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter text-slate-900 dark:text-white leading-[1.1] md:leading-[0.9] transition-all">
                        Build Your
                        <br />
                        <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent inline-block mt-2 md:mt-0">
                            Future
                        </span>
                        <br />
                        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal opacity-70 block mt-2 md:mt-4">
                            Now
                        </span>
                    </h1>

                    {/* Premium Sub-headline - Mobile Friendly */}
                    <p className="max-w-2xl lg:max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed md:leading-loose px-4">
                        Architecting the future of <span className="text-blue-500 font-semibold">professional identities</span> through 
                        <span className="text-slate-800 dark:text-slate-200 font-semibold"> generative AI intelligence</span>. 
                        Our neural systems engineer <strong className="font-bold text-slate-700 dark:text-slate-300">elite-level ATS resumes</strong> 
                        calibrated for the global tech ecosystem—transforming potential into
                        <span className="relative inline-block mx-1">
                            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-500 bg-clip-text text-transparent font-bold">
                                unstoppable career momentum
                            </span>
                            <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent rounded-full"></span>
                        </span>
                    </p>

                    {/* Premium CTA Button - Thumb-Friendly */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 md:pt-8">
                        <Button
                            onClick={() => router.push("/dashboard/create")}
                            size="lg"
                            className="h-14 md:h-16 px-6 md:px-10 text-base md:text-lg rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:-translate-y-1 active:scale-95 group w-full sm:w-auto"
                        >
                            <FilePlus size={18} className="mr-2 group-hover:rotate-12 transition-transform" />
                            Create AI Resume
                            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        
                        {/* Secondary Action - Optional */}
                        <button
                            onClick={() => router.push("/templates")}
                            className="h-14 md:h-16 px-6 md:px-8 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium text-base md:text-lg hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 active:scale-95 flex items-center gap-2 w-full sm:w-auto"
                        >
                            <Sparkles size={18} />
                            Explore Templates
                        </button>
                    </div>

                    {/* Trust Indicators - Mobile Friendly */}
                    <div className="flex flex-wrap items-center justify-center gap-6 pt-8 md:pt-12 opacity-60">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 font-medium">5,000+ Resumes Created</span>
                        </div>
                        <div className="w-px h-3 bg-slate-300 dark:bg-slate-700"></div>
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 font-medium">⭐ 4.9/5 Rating</span>
                        </div>
                        <div className="w-px h-3 bg-slate-300 dark:bg-slate-700"></div>
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] md:text-xs text-slate-500 dark:text-slate-400 font-medium">ATS Optimized</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Animation Styles */}
            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fade-in {
                    animation: fade-in 0.5s ease-out forwards;
                }
                
                @keyframes pulse-slow {
                    0%, 100% {
                        opacity: 0.3;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.5;
                        transform: scale(1.05);
                    }
                }
                
                .animate-pulse-slow {
                    animation: pulse-slow 4s ease-in-out infinite;
                }
            `}</style>
        </section>
    )
}