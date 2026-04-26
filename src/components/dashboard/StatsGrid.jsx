import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Users, CreditCard, ArrowUpRight } from "lucide-react"

export function StatsGrid() {
  const stats = [
    { title: "Total Users", value: "2,350", icon: Users, trend: "+12%" },
    { title: "Active Now", value: "48", icon: Activity, trend: "Stable" },
    { title: "Monthly Revenue", value: "$12,400", icon: CreditCard, trend: "+8%" },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stats.map((stat, i) => (
        <Card key={i} className="border-slate-200 dark:border-slate-800 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-slate-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-green-500 flex items-center mt-1">
              <ArrowUpRight className="h-3 w-3 mr-1" /> {stat.trend}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}