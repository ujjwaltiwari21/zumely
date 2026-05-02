"use client"

import ATSCheckerSection from "./AtsChecker"
import Home from "./Home"

export function DashboardHeader({ userEmail }) {
  return (
    <div>
      <Home/>
      <ATSCheckerSection/>
    </div>
  )
}