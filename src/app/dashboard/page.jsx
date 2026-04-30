import { createClient } from "@/lib/supabase"
import { DashboardHeader } from "@/components/dashboard/DashboardHeader"

export default async function DashboardPage() {
  const supabase = createClient()
  
  // Middleware already redirect handle kar raha hai, 
  // isliye yahan sirf user data fetch karenge.
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <div className="flex-1 space-y-6">
      {/* Header section with user info */}
      <DashboardHeader userEmail={user?.email} />
    </div>
  )
}