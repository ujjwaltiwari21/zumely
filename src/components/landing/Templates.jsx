"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { 
  Sparkles, Eye, Download, Users, Star, 
  CheckCircle, Clock, TrendingUp, Layout, 
  Image, User, Briefcase, GraduationCap,
  Award, FileText, Zap, ChevronRight, Filter
} from "lucide-react"

export default function Templates() {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [hoveredTemplate, setHoveredTemplate] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const categories = [
    { id: "all", label: "All Templates", icon: Layout },
    { id: "with-photo", label: "With Photo", icon: Image },
    { id: "without-photo", label: "Without Photo", icon: User },
    { id: "modern", label: "Modern", icon: Sparkles },
    { id: "professional", label: "Professional", icon: Briefcase },
    { id: "creative", label: "Creative", icon: Award },
  ]

  const templates = [
    // With Photo Templates
    {
      id: 1,
      name: "Elegant Pro",
      category: "with-photo",
      style: "modern",
      color: "blue",
      previewColor: "from-blue-500 to-indigo-600",
      features: ["Photo Included", "ATS Friendly", "PDF Export"],
      rating: 4.9,
      users: 12400,
      timeToFill: "5 min",
      description: "Clean and elegant design with professional layout"
    },
    {
      id: 2,
      name: "Corporate Elite",
      category: "with-photo",
      style: "professional",
      color: "slate",
      previewColor: "from-slate-500 to-gray-600",
      features: ["Photo Included", "ATS Optimized", "Custom Sections"],
      rating: 4.8,
      users: 8900,
      timeToFill: "8 min",
      description: "Perfect for corporate professionals"
    },
    {
      id: 3,
      name: "Creative Edge",
      category: "with-photo",
      style: "creative",
      color: "purple",
      previewColor: "from-purple-500 to-pink-600",
      features: ["Photo Included", "Creative Layout", "Portfolio Ready"],
      rating: 4.7,
      users: 5600,
      timeToFill: "10 min",
      description: "Stand out with creative design"
    },

    // Without Photo Templates
    {
      id: 4,
      name: "Minimal Classic",
      category: "without-photo",
      style: "professional",
      color: "gray",
      previewColor: "from-gray-500 to-neutral-600",
      features: ["No Photo", "Clean Layout", "ATS Ready"],
      rating: 4.9,
      users: 15300,
      timeToFill: "4 min",
      description: "Timeless design for any industry"
    },
    {
      id: 5,
      name: "Harvard Reference",
      category: "without-photo",
      style: "professional",
      color: "navy",
      previewColor: "from-blue-800 to-blue-900",
      features: ["No Photo", "Academic Style", "Formal Layout"],
      rating: 4.8,
      users: 10200,
      timeToFill: "6 min",
      description: "Inspired by Harvard CV format"
    },
    {
      id: 6,
      name: "Tech Modern",
      category: "without-photo",
      style: "modern",
      color: "cyan",
      previewColor: "from-cyan-500 to-blue-600",
      features: ["No Photo", "Tech Focused", "Skill Highlight"],
      rating: 4.9,
      users: 18700,
      timeToFill: "7 min",
      description: "Perfect for IT professionals"
    },

    // Modern Templates
    {
      id: 7,
      name: "Neo Gradient",
      category: "modern",
      style: "modern",
      color: "gradient",
      previewColor: "from-emerald-500 to-teal-600",
      features: ["Modern Design", "Gradient Accents", "Visual Impact"],
      rating: 4.8,
      users: 6700,
      timeToFill: "9 min",
      description: "Contemporary design with gradient touches"
    },
    {
      id: 8,
      name: "Sidebar Plus",
      category: "modern",
      style: "modern",
      color: "indigo",
      previewColor: "from-indigo-500 to-purple-600",
      features: ["Sidebar Layout", "Skills Focus", "Two-Column"],
      rating: 4.7,
      users: 4300,
      timeToFill: "8 min",
      description: "Unique sidebar design"
    },

    // Professional Templates
    {
      id: 9,
      name: "Executive Suite",
      category: "professional",
      style: "professional",
      color: "dark",
      previewColor: "from-slate-700 to-slate-900",
      features: ["Executive Style", "Premium Layout", "Leadership Focus"],
      rating: 4.9,
      users: 5200,
      timeToFill: "10 min",
      description: "For senior executives and leaders"
    },
    {
      id: 10,
      name: "Legal Standard",
      category: "professional",
      style: "professional",
      color: "stone",
      previewColor: "from-stone-500 to-stone-700",
      features: ["Legal Format", "Traditional", "Court Approved"],
      rating: 4.8,
      users: 3100,
      timeToFill: "8 min",
      description: "Perfect for legal professionals"
    },

    // Creative Templates
    {
      id: 11,
      name: "Portfolio Master",
      category: "creative",
      style: "creative",
      color: "rose",
      previewColor: "from-rose-500 to-orange-600",
      features: ["Portfolio Ready", "Visual Heavy", "Project Showcase"],
      rating: 4.7,
      users: 2800,
      timeToFill: "12 min",
      description: "Best for creative professionals"
    },
    {
      id: 12,
      name: "Design Flow",
      category: "creative",
      style: "creative",
      color: "amber",
      previewColor: "from-amber-500 to-orange-600",
      features: ["Creative Layout", "Design Focus", "Unique Flow"],
      rating: 4.8,
      users: 3400,
      timeToFill: "11 min",
      description: "For designers and artists"
    },
  ]

  const filteredTemplates = selectedCategory === "all" 
    ? templates 
    : templates.filter(t => t.category === selectedCategory || t.style === selectedCategory)

  const stats = [
    { label: "Total Templates", value: templates.length, icon: Layout },
    { label: "Active Users", value: "84K+", icon: Users },
    { label: "Avg Rating", value: "4.8", icon: Star },
    { label: "Success Rate", value: "92%", icon: TrendingUp },
  ]

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white dark:from-[#0A0A0A] dark:to-[#0A0A0A] transition-colors duration-500">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-4">
            <Layout size={14} />
            Resume Templates
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Choose Your <span className="bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Perfect Template</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Professionally designed templates optimized for ATS systems. Stand out from the crowd.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 md:mb-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white/60 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10 p-3 text-center">
              <stat.icon size={18} className="mx-auto mb-1 text-blue-500" />
              <p className="text-lg font-bold text-slate-900 dark:text-white">{stat.value}</p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat.id
                  ? "bg-blue-500 text-white shadow-md"
                  : "bg-white/50 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-blue-500/10"
              }`}
            >
              <cat.icon size={14} />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              onMouseEnter={() => setHoveredTemplate(template.id)}
              onMouseLeave={() => setHoveredTemplate(null)}
              className="group relative bg-white/80 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {/* Template Preview */}
              <div className={`relative h-48 overflow-hidden bg-linear-to-br ${template.previewColor}`}>
                <div className={`absolute inset-0 bg-linear-to-br ${template.previewColor} opacity-90`} />
                
                {/* Template Type Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2 py-1 rounded-full text-[10px] font-medium bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 backdrop-blur-sm">
                    {template.category === "with-photo" ? "📸 With Photo" : 
                     template.category === "without-photo" ? "👤 No Photo" :
                     template.style === "modern" ? "✨ Modern" :
                     template.style === "professional" ? "💼 Pro" : "🎨 Creative"}
                  </span>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-medium bg-yellow-500/90 text-white backdrop-blur-sm">
                    <Star size={10} fill="white" />
                    {template.rating}
                  </span>
                </div>

                {/* Template Name Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white text-center px-4">
                    {template.name}
                  </h3>
                </div>

                {/* Hover Actions */}
                <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-3 transition-all duration-300 ${
                  hoveredTemplate === template.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <button
                    onClick={() => router.push(`/dashboard/templates/preview/${template.id}`)}
                    className="px-4 py-2 rounded-lg bg-white text-slate-800 font-medium text-sm hover:bg-gray-100 transition-colors"
                  >
                    <Eye size={14} className="inline mr-1" />
                    Preview
                  </button>
                  <button
                    onClick={() => router.push(`/dashboard/create?template=${template.id}`)}
                    className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-colors"
                  >
                    <FileText size={14} className="inline mr-1" />
                    Use Template
                  </button>
                </div>
              </div>

              {/* Template Info */}
              <div className="p-4">
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">{template.name}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3 line-clamp-2">
                  {template.description}
                </p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {template.features.slice(0,3).map((feature, i) => (
                    <span key={i} className="text-[9px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400">
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-1">
                    <Users size={10} />
                    <span>{template.users.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={10} />
                    <span>{template.timeToFill}</span>
                  </div>
                  <button
                    onClick={() => router.push(`/dashboard/create?template=${template.id}`)}
                    className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                  >
                    Use Now →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredTemplates.length === 0 && (
          <div className="text-center py-16">
            <Layout size={48} className="mx-auto mb-4 text-slate-400" />
            <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">No templates found</h3>
            <p className="text-slate-500">Try a different category</p>
          </div>
        )}

        {/* Premium Banner */}
        <div className="mt-12 md:mt-16 bg-linear-to-r from-blue-600 to-indigo-600 rounded-2xl p-6 md:p-8 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            Need a Custom Template?
          </h3>
          <p className="text-blue-100 mb-4 max-w-md mx-auto">
            Get a personalized resume template designed just for you
          </p>
          <button
            onClick={() => router.push("/contact")}
            className="px-6 py-2 rounded-xl bg-white text-blue-600 font-semibold hover:shadow-lg transition-all"
          >
            Contact Us
          </button>
        </div>

        {/* Bottom Spacer for Mobile */}
        <div className="h-16 md:h-0"></div>
      </div>
    </div>
  )
}