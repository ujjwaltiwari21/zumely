"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sparkles, FilePlus, ChevronRight } from "lucide-react"

export function Hero() {
    const router = useRouter()

    return (
        <section className="relative pt-20 pb-32 overflow-hidden">
            {/* Advanced Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-0 right-[-5%] w-[40%] h-[40%] bg-indigo-500/10 blur-[100px] rounded-full" />
            </div>

            <div className="text-center space-y-10">
                {/* Animated Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold tracking-widest uppercase animate-fade-in">
                    <Sparkles size={14} className="text-blue-600" />
                    AI-Powered Career Growth
                </div>

                {/* Ultra-Bold Headline */}
                <h1 className="text-6xl font-black tracking-[calc(-0.05em)] sm:text-8xl md:text-9xl text-slate-950 dark:text-white uppercase leading-[0.8] transition-all">
                    Build Your <br />
                    <span className="text-blue-600 italic hover:not-italic transition-all duration-500 cursor-default">
                        Future
                    </span> Now
                </h1>

                {/* Optimized Sub-headline */}
                <p className="max-w-[850px] mx-auto text-[15px] md:text-[19px] text-slate-500 dark:text-slate-400 leading-[1.8] font-light tracking-wide px-6">
                    Architecting the future of <span className="text-blue-500 font-medium">professional identities</span> through 
                    <span className="text-slate-900 dark:text-white font-medium"> generative AI intelligence</span>. 
                        Our neural systems engineer <strong className="font-semibold text-slate-800 dark:text-slate-200">elite-level ATS resumes</strong> 
                        _calibrated for the {new Date().getFullYear()} global tech ecosystem—transforming potential into 
                        <span className="relative inline-block">
                        <span className="bg-gradient-to-r from-blue-600 via-indigo-400 to-emerald-400 bg-clip-text text-transparent font-bold">
                        _unstoppable career momentum_
                    </span>
                    <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></span>
                    </span>
                </p>

                {/* Centered CTA Button */}
                <div className="flex justify-center pt-6">
                    <Button
                        onClick={() => router.push("/dashboard/create")}
                        size="lg"
                        className="h-16 px-12 text-xl rounded-2xl bg-blue-600 hover:bg-blue-700 shadow-[0_20px_50px_rgba(37,99,235,0.3)] transition-all hover:-translate-y-1.5 flex items-center gap-3 group w-full sm:w-auto"
                    >
                        <FilePlus size={22} />
                        Create AI Resume
                        <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>                
            </div>
        </section>
    )
}