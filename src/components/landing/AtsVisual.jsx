import { Check, ShieldCheck, Zap } from "lucide-react"

export function AtsVisual() {
    return (
        <section className="relative w-full py-24 md:py-40 bg-slate-50 dark:bg-[#020617] overflow-hidden">
            {/* Background Ambient Glows */}
            <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-emerald-200/20 dark:bg-emerald-500/5 blur-[120px] rounded-full -z-10" />

            <div className="max-w-[1440px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">

                {/* Left Side: Content */}
                <div className="space-y-10 text-center lg:text-left order-2 lg:order-1">
                    <header className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                            <Zap size={14} className="text-emerald-500 fill-emerald-500" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">AI Score Engine</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-slate-900 dark:text-slate-100 leading-[1.1] tracking-tight">
                            Optimized for <br />
                            <span className="text-emerald-600 font-normal">Success.</span>
                        </h2>
                        <p className="text-lg text-slate-500 dark:text-slate-400 font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Humara AI engine aapke resume ko scan karta hai aur un gaps ko fix karta hai jo recruiters ko dikhte hain.
                        </p>
                    </header>

                    <div className="flex flex-col sm:flex-row lg:flex-col gap-4 items-center lg:items-start">
                        {["Keyword Density", "Structural Integrity"].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/80 dark:bg-white/5 border border-white dark:border-white/10 shadow-sm backdrop-blur-md">
                                <Check size={16} className="text-emerald-500" />
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Re-designed Professional Glass Box */}
                <div className="relative w-full flex justify-center lg:justify-end order-1 lg:order-2 px-4">

                    {/* Outer Glow Container */}
                    <div className="relative group w-full max-w-md">
                        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-[3.5rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>

                        {/* Main Professional Glass Card */}
                        <div className="relative bg-white/60 dark:bg-slate-900/60 backdrop-blur-2xl rounded-[3rem] p-10 md:p-16 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] overflow-hidden border border-white/20 dark:border-white/10">

                            {/* Internal Glass Highlight (Top-left reflect) */}
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-500/10 to-transparent pointer-events-none" />

                            <div className="relative z-10 flex flex-col items-center">
                                {/* Circular Indicator */}
                                <div className="relative w-48 h-48 md:w-60 md:h-60 flex items-center justify-center">
                                    <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
                                        <circle
                                            cx="100" cy="100" r="90"
                                            stroke="currentColor" strokeWidth="2" fill="transparent"
                                            className="text-slate-200 dark:text-slate-800"
                                        />
                                        <circle
                                            cx="100" cy="100" r="90"
                                            stroke="url(#glassGradient)"
                                            strokeWidth="10" fill="transparent"
                                            strokeDasharray="565.48" 
                                            strokeDashoffset="33.93"
                                            strokeLinecap="round"
                                            className="transition-all duration-1000 ease-out drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]"
                                        />
                                        <defs>
                                            <linearGradient id="glassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor="#10b981" />
                                                <stop offset="100%" stopColor="#059669" />
                                            </linearGradient>
                                        </defs>
                                    </svg>

                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className="text-7xl md:text-8xl font-extralight text-slate-900 dark:text-white tracking-tighter">
                                            94
                                        </span>
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mt-1">Percentile</span>
                                    </div>
                                </div>

                                <div className="mt-10 space-y-4 text-center">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">Expert Level</span>
                                    </div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 font-normal leading-relaxed max-w-[200px]">
                                        Your resume structure matches <span className="text-slate-900 dark:text-white font-medium">Fortune 500</span> standards.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Mini-Card (Bottom Right) */}
                        <div className="absolute -bottom-4 -right-4 p-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-white/50 dark:border-slate-700/50 rounded-2xl shadow-xl z-20 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
                                <ShieldCheck size={18} className="text-white" />
                            </div>
                            <p className="text-[10px] font-bold text-slate-800 dark:text-white uppercase tracking-tight">Verified <br />Structure</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}