import { createClient } from "@/lib/supabase"
import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
import { StatsGrid } from "@/components/dashboard/StatsGrid"
import { RecentActivity } from "@/components/dashboard/RecentActivity"
import { Notifications } from "@/components/dashboard/Notifications"

export default async function DashboardPage() {
  const supabase = createClient()
  
  // Middleware already redirect handle kar raha hai, 
  // isliye yahan sirf user data fetch karenge.
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <div className="flex-1 space-y-6 p-8 pt-6">
      {/* Header section with user info */}
      <DashboardHeader userEmail={user?.email} />

      {/* Main Stats section */}
      <StatsGrid />

      {/* Main Grid Content */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        {/* Left Side: Recent Overview/Activity (Takes 4 columns) */}
        <div className="lg:col-span-4">
          <RecentActivity />
        </div>
        
        {/* Right Side: Notifications (Takes 3 columns) */}
        <div className="lg:col-span-3">
          <Notifications />
        </div>
      </div>
    </div>
  )
}