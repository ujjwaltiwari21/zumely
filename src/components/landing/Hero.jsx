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
                <p className="max-w-[700px] mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium px-4">
                    Zumely helps MCA students craft industry-leading resumes with AI.
                    Optimize for ATS, track applications, and land your dream job faster.
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