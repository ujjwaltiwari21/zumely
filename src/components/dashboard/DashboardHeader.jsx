"use client"

export function DashboardHeader({ userEmail }) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
        Welcome back!
      </h1>
      <p className="text-slate-500 dark:text-slate-400 mt-1">
        Logged in as: <span className="font-medium text-blue-600">{userEmail}</span>
      </p>
    </div>
  )
}