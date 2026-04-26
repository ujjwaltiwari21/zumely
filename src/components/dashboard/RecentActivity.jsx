export function RecentActivity() {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-lg tracking-tight">Recent Overview</h3>
        <span className="text-xs font-medium px-2 py-1 bg-blue-50 text-blue-600 rounded-full">Live Updates</span>
      </div>
      <div className="h-[300px] flex items-center justify-center border-2 border-dashed rounded-xl border-slate-100 dark:border-slate-800 text-slate-400 bg-slate-50/50 dark:bg-slate-950/50">
        <div className="text-center">
          <p className="text-sm">Chart ya Graph yahan aayega</p>
          <p className="text-xs mt-1">Sare analytics track karein</p>
        </div>
      </div>
    </div>
  )
}