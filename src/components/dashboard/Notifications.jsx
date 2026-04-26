export function Notifications() {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm h-full">
      <h3 className="font-bold text-lg tracking-tight mb-4">Notifications</h3>
      <div className="space-y-4">
        {/* Empty state or list of notifications */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Abhi tak koi naya update nahi hai. Hum aapko naye events ke bare mein batate rahenge.
          </p>
        </div>
      </div>
    </div>
  )
}