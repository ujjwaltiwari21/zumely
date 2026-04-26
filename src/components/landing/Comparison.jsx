import { Check, X, ShieldCheck } from "lucide-react"

const features = [
  { name: "AI Content Generation", traditional: false, zumely: true },
  { name: "ATS Optimization Score", traditional: false, zumely: true },
  { name: "Modern Tech Templates", traditional: "Limited", zumely: "Unlimited" },
  { name: "Smart Formatting", traditional: "Manual", zumely: "Automatic" },
  { name: "Keyword Suggestions", traditional: false, zumely: true },
]

export function Comparison() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950" aria-labelledby="comp-heading">
      <div className="max-w-5xl mx-auto px-4">
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">
            <ShieldCheck size={16} />
            The Zumely Advantage
          </div>
          <h2 id="comp-heading" className="text-4xl md:text-5xl font-black text-slate-950 dark:text-white uppercase tracking-tighter">
            Why Choose <span className="text-blue-600">Zumely</span> Over Traditional Builders?
          </h2>
        </header>

        <div className="rounded-[2.5rem] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xl shadow-blue-500/5">
          {/* Header Row */}
          <div className="grid grid-cols-3 bg-slate-50 dark:bg-slate-900/50 p-6 border-b border-slate-200 dark:border-slate-800">
            <div className="text-sm font-bold uppercase text-slate-500">Features</div>
            <div className="text-sm font-bold uppercase text-center text-slate-500">Traditional</div>
            <div className="text-sm font-bold uppercase text-center text-blue-600">Zumely AI</div>
          </div>

          {/* Feature Rows */}
          {features.map((f, i) => (
            <div key={i} className="grid grid-cols-3 p-6 border-b border-slate-100 dark:border-slate-800/50 last:border-0 hover:bg-slate-50/50 dark:hover:bg-slate-900/30 transition-colors">
              <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 italic">{f.name}</div>
              
              <div className="flex justify-center items-center">
                {typeof f.traditional === "boolean" ? (
                  f.traditional ? <Check className="text-green-500" size={20} /> : <X className="text-slate-300" size={20} />
                ) : (
                  <span className="text-xs font-medium text-slate-500">{f.traditional}</span>
                )}
              </div>

              <div className="flex justify-center items-center">
                {typeof f.zumely === "boolean" ? (
                  f.zumely ? <Check className="text-blue-600" size={24} strokeWidth={3} /> : <X size={24} />
                ) : (
                  <span className="text-sm font-bold text-blue-600">{f.zumely}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}