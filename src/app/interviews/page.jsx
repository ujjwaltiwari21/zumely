"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { 
  Calendar, Clock, Video, Users, Award, 
  Briefcase, MapPin, CheckCircle, XCircle,
  ChevronRight, Filter, Search, Download,
  Mail, Phone, MessageCircle
} from "lucide-react"

export default function InterviewsPage() {
  const [activeTab, setActiveTab] = useState("upcoming")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const upcomingInterviews = [
    {
      id: 1,
      company: "Google",
      role: "Senior Software Engineer",
      date: "2024-05-15",
      time: "10:00 AM",
      duration: "45 min",
      type: "Technical Round",
      mode: "Video Call",
      link: "https://meet.google.com/xxx",
      interviewer: "Rajesh Kumar",
      status: "confirmed"
    },
    {
      id: 2,
      company: "Microsoft",
      role: "Product Manager",
      date: "2024-05-18",
      time: "2:30 PM",
      duration: "60 min",
      type: "HR Round",
      mode: "Video Call",
      link: "https://teams.microsoft.com/xxx",
      interviewer: "Priya Sharma",
      status: "pending"
    },
    {
      id: 3,
      company: "Amazon",
      role: "Frontend Developer",
      date: "2024-05-20",
      time: "11:00 AM",
      duration: "50 min",
      type: "Technical Round",
      mode: "In-person",
      location: "Bangalore Office",
      interviewer: "Amit Patel",
      status: "confirmed"
    }
  ]

  const pastInterviews = [
    {
      id: 4,
      company: "Flipkart",
      role: "Full Stack Developer",
      date: "2024-05-05",
      time: "11:00 AM",
      type: "Technical Round",
      result: "Selected",
      feedback: "Strong technical skills"
    },
    {
      id: 5,
      company: "Uber",
      role: "Backend Developer",
      date: "2024-04-28",
      time: "3:00 PM",
      type: "System Design",
      result: "Rejected",
      feedback: "Need more experience"
    }
  ]

  const stats = [
    { label: "Total Interviews", value: upcomingInterviews.length + pastInterviews.length, icon: Calendar, color: "blue" },
    { label: "Upcoming", value: upcomingInterviews.length, icon: Clock, color: "green" },
    { label: "Completed", value: pastInterviews.length, icon: CheckCircle, color: "purple" },
    { label: "Success Rate", value: "60%", icon: Award, color: "orange" },
  ]

  const getStatusBadge = (status) => {
    switch(status) {
      case "confirmed":
        return <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-600 text-xs font-medium">Confirmed</span>
      case "pending":
        return <span className="px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-600 text-xs font-medium">Pending</span>
      default:
        return null
    }
  }

  const getResultBadge = (result) => {
    if (result === "Selected") {
      return <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-600 text-xs font-medium">✓ Selected</span>
    }
    return <span className="px-2 py-0.5 rounded-full bg-red-500/10 text-red-600 text-xs font-medium">✗ Rejected</span>
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-[#0A0A0A] dark:to-[#0A0A0A] transition-colors duration-500">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-4">
            <Calendar size={14} />
            Interview Tracker
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
            Your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Interviews</span>
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Track and manage all your interviews in one place
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white/60 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 p-3 text-center">
              <stat.icon size={20} className={`mx-auto mb-2 text-${stat.color}-500`} />
              <p className="text-xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-6">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === "upcoming"
                ? "bg-blue-500 text-white shadow-md"
                : "bg-white/50 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-blue-500/10"
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setActiveTab("past")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === "past"
                ? "bg-blue-500 text-white shadow-md"
                : "bg-white/50 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-blue-500/10"
            }`}
          >
            Past Interviews
          </button>
        </div>

        {/* Upcoming Interviews */}
        {activeTab === "upcoming" && (
          <div className="space-y-4">
            {upcomingInterviews.map((interview) => (
              <div key={interview.id} className="bg-white/60 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 p-4 transition-all hover:shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  {/* Company Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-md">
                    <Briefcase size={20} className="text-white" />
                  </div>
                  
                  {/* Interview Details */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white">{interview.role}</h3>
                        <p className="text-sm text-blue-600 dark:text-blue-400">{interview.company}</p>
                      </div>
                      {getStatusBadge(interview.status)}
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 text-xs text-slate-500">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {new Date(interview.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {interview.time} ({interview.duration})</span>
                      <span className="flex items-center gap-1"><Users size={12} /> {interview.type}</span>
                      <span className="flex items-center gap-1">
                        {interview.mode === "Video Call" ? <Video size={12} /> : <MapPin size={12} />}
                        {interview.mode === "Video Call" ? interview.mode : interview.location}
                      </span>
                    </div>
                    
                    <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2">
                      <button className="px-3 py-1.5 rounded-lg bg-blue-500 text-white text-xs font-medium hover:bg-blue-600 transition-colors">
                        Join Interview
                      </button>
                      <button className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium hover:bg-slate-200 transition-colors">
                        Reschedule
                      </button>
                      <button className="px-3 py-1.5 rounded-lg bg-red-500/10 text-red-600 text-xs font-medium hover:bg-red-500/20 transition-colors">
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Past Interviews */}
        {activeTab === "past" && (
          <div className="space-y-4">
            {pastInterviews.map((interview) => (
              <div key={interview.id} className="bg-white/60 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 p-4 transition-all hover:shadow-md">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center flex-shrink-0 shadow-md">
                    <Briefcase size={20} className="text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white">{interview.role}</h3>
                        <p className="text-sm text-slate-500">{interview.company}</p>
                      </div>
                      {getResultBadge(interview.result)}
                    </div>
                    
                    <div className="flex flex-wrap gap-3 mt-2 text-xs text-slate-500">
                      <span className="flex items-center gap-1"><Calendar size={12} /> {new Date(interview.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {interview.time}</span>
                      <span className="flex items-center gap-1"><Users size={12} /> {interview.type}</span>
                    </div>
                    
                    {interview.feedback && (
                      <p className="mt-2 text-xs text-slate-500 italic">Feedback: {interview.feedback}</p>
                    )}
                    
                    <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2">
                      <button className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium hover:bg-slate-200 transition-colors">
                        View Details
                      </button>
                      <button className="px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-600 text-xs font-medium hover:bg-blue-500/20 transition-colors">
                        Apply Again
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Spacer for Mobile */}
        <div className="h-20 md:h-0"></div>
      </div>
    </div>
  )
}