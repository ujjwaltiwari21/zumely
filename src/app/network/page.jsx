"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { 
  Users, UserPlus, MessageCircle, UserCheck, 
  UserMinus, Search, Filter, X, Briefcase, 
  MapPin, GraduationCap, Calendar, MoreHorizontal,
  ThumbsUp, MessageSquare, Share2, Linkedin, Github, Twitter
} from "lucide-react"

export default function NetworkPage() {
  const [connections, setConnections] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      title: "Senior Software Engineer at Google",
      location: "Bangalore, India",
      education: "IIT Delhi",
      mutual: 12,
      avatar: "R",
      avatarColor: "from-blue-500 to-blue-600",
      connected: true
    },
    {
      id: 2,
      name: "Priya Mehta",
      title: "Product Manager at Microsoft",
      location: "Hyderabad, India",
      education: "BITS Pilani",
      mutual: 8,
      avatar: "P",
      avatarColor: "from-purple-500 to-pink-600",
      connected: true
    },
    {
      id: 3,
      name: "Amit Kumar",
      title: "Frontend Developer at Amazon",
      location: "Chennai, India",
      education: "NIT Trichy",
      mutual: 5,
      avatar: "A",
      avatarColor: "from-green-500 to-teal-600",
      connected: false
    },
    {
      id: 4,
      name: "Neha Singh",
      title: "Data Scientist at Meta",
      location: "Mumbai, India",
      education: "IIT Bombay",
      mutual: 15,
      avatar: "N",
      avatarColor: "from-orange-500 to-red-600",
      connected: true
    },
    {
      id: 5,
      name: "Vikram Joshi",
      title: "DevOps Engineer at Netflix",
      location: "Pune, India",
      education: "VIT Vellore",
      mutual: 3,
      avatar: "V",
      avatarColor: "from-cyan-500 to-blue-600",
      connected: false
    }
  ])

  const [suggestions, setSuggestions] = useState([
    {
      id: 6,
      name: "Anjali Verma",
      title: "UI/UX Designer at Adobe",
      location: "Bangalore, India",
      mutual: 7,
      avatar: "A",
      avatarColor: "from-rose-500 to-pink-600"
    },
    {
      id: 7,
      name: "Rajesh Patil",
      title: "Backend Developer at Uber",
      location: "Pune, India",
      mutual: 4,
      avatar: "R",
      avatarColor: "from-indigo-500 to-purple-600"
    },
    {
      id: 8,
      name: "Swati Gupta",
      title: "Full Stack Developer at Flipkart",
      location: "Bangalore, India",
      mutual: 9,
      avatar: "S",
      avatarColor: "from-emerald-500 to-green-600"
    }
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("connections")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleConnect = (id) => {
    setConnections(prev => prev.map(c => 
      c.id === id ? { ...c, connected: !c.connected } : c
    ))
  }

  const handleRemoveConnection = (id) => {
    setConnections(prev => prev.filter(c => c.id !== id))
  }

  const filteredConnections = connections.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const filteredSuggestions = suggestions.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const stats = [
    { label: "Connections", value: connections.filter(c => c.connected).length, icon: Users },
    { label: "Profile Views", value: 89, icon: UserCheck },
    { label: "Post Impressions", value: "2.3k", icon: MessageCircle },
    { label: "Connection Requests", value: 4, icon: UserPlus },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-[#0A0A0A] dark:to-[#0A0A0A] transition-colors duration-500">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-4">
            <Users size={14} />
            Professional Network
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3">
            Your <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Network</span>
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Connect with professionals, grow your network, and discover opportunities
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white/60 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 p-3 text-center">
              <stat.icon size={20} className="mx-auto mb-2 text-blue-500" />
              <p className="text-xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search connections or people..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-6">
          <button
            onClick={() => setActiveTab("connections")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === "connections"
                ? "bg-blue-500 text-white shadow-md"
                : "bg-white/50 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-blue-500/10"
            }`}
          >
            My Connections
          </button>
          <button
            onClick={() => setActiveTab("suggestions")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === "suggestions"
                ? "bg-blue-500 text-white shadow-md"
                : "bg-white/50 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-blue-500/10"
            }`}
          >
            Suggestions
          </button>
        </div>

        {/* Connections List */}
        {activeTab === "connections" && (
          <div className="space-y-3">
            {filteredConnections.length > 0 ? (
              filteredConnections.map((person) => (
                <div key={person.id} className="bg-white/60 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 p-4 transition-all hover:shadow-md">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    {/* Avatar */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${person.avatarColor} flex items-center justify-center shadow-md flex-shrink-0`}>
                      <span className="text-lg font-bold text-white">{person.avatar}</span>
                    </div>
                    
                    {/* Info */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 dark:text-white">{person.name}</h3>
                      <p className="text-sm text-slate-500">{person.title}</p>
                      <div className="flex flex-wrap gap-3 mt-1 text-xs text-slate-400">
                        <span className="flex items-center gap-1"><MapPin size={12} /> {person.location}</span>
                        <span className="flex items-center gap-1"><GraduationCap size={12} /> {person.education}</span>
                        <span className="flex items-center gap-1"><Users size={12} /> {person.mutual} mutual connections</span>
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex gap-2">
                      <button className="px-4 py-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium hover:bg-blue-500/20 transition-colors">
                        Message
                      </button>
                      <button
                        onClick={() => person.connected ? handleRemoveConnection(person.id) : handleConnect(person.id)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          person.connected
                            ? "bg-green-500/10 text-green-600 hover:bg-green-500/20"
                            : "bg-blue-500 text-white hover:bg-blue-600"
                        }`}
                      >
                        {person.connected ? "Connected" : "Connect"}
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <Users size={48} className="mx-auto mb-4 text-slate-400" />
                <p className="text-slate-500">No connections found</p>
              </div>
            )}
          </div>
        )}

        {/* Suggestions List */}
        {activeTab === "suggestions" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSuggestions.length > 0 ? (
              filteredSuggestions.map((person) => (
                <div key={person.id} className="bg-white/60 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 p-4 transition-all hover:shadow-md">
                  <div className="text-center">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${person.avatarColor} flex items-center justify-center shadow-md mx-auto mb-3`}>
                      <span className="text-xl font-bold text-white">{person.avatar}</span>
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">{person.name}</h3>
                    <p className="text-xs text-slate-500 mt-1">{person.title}</p>
                    <p className="text-xs text-slate-400 mt-2 flex items-center justify-center gap-1">
                      <Users size={10} /> {person.mutual} mutual connections
                    </p>
                    <button className="w-full mt-4 px-4 py-2 rounded-lg bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition-colors">
                      Connect Now
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <UserPlus size={48} className="mx-auto mb-4 text-slate-400" />
                <p className="text-slate-500">No suggestions found</p>
              </div>
            )}
          </div>
        )}

        {/* Bottom Spacer for Mobile */}
        <div className="h-20 md:h-0"></div>
      </div>
    </div>
  )
}