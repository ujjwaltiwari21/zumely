"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { createClient } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./ThemeToggle"
import { 
  LogOut, 
  User, 
  LayoutDashboard, 
  Menu, 
  X,
  Settings,
  Bell,
  Bookmark,
  Briefcase,
  MessageCircle,
  HelpCircle,
  Award,
  FileText,
  TrendingUp,
  Star,
  Home,
  Search,
  GraduationCap,
  Users,
  Calendar,
  Video,
  Mail,
  BarChart3,
  Sparkles,
  ChevronRight,
  Compass,
  Clock,
  Heart
} from "lucide-react"

export function Navbar() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [notifications, setNotifications] = useState(3)
  const [messages, setMessages] = useState(2)
  const [mounted, setMounted] = useState(false)
  const [keyboardVisible, setKeyboardVisible] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const supabase = createClient()
  const authListenerRef = useRef(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Detect keyboard visibility on mobile
  useEffect(() => {
    if (typeof window !== 'undefined' && window.visualViewport) {
      const handleResize = () => {
        const viewportHeight = window.visualViewport?.height || window.innerHeight
        const windowHeight = window.innerHeight
        setKeyboardVisible(viewportHeight < windowHeight - 100)
      }
      window.visualViewport.addEventListener('resize', handleResize)
      return () => window.visualViewport?.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (!mounted) return

    const getUser = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser()
        setUser(user)
      } catch (error) {
        console.error("Auth error:", error)
        setUser(null)
      } finally {
        setLoading(false)
      }
    }

    getUser()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })

    authListenerRef.current = subscription

    return () => {
      if (authListenerRef.current) {
        authListenerRef.current.unsubscribe()
      }
    }
  }, [supabase.auth, mounted])

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut()
      router.refresh()
      router.push("/login")
      setMobileMenuOpen(false)
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  // Desktop Navigation Items
  const desktopNavItems = [
    { icon: Home, label: "Home", href: "/", active: pathname === "/" },
    { icon: Briefcase, label: "Jobs", href: "/jobs", active: pathname === "/jobs" },
    { icon: Users, label: "Network", href: "/network", active: pathname === "/network" },
    { icon: Calendar, label: "Interviews", href: "/interviews", active: pathname === "/interviews" },
    { icon: GraduationCap, label: "Courses", href: "/courses", active: pathname === "/courses" },
    { icon: User, label: "Profile", href: "/profile", active: pathname === "/profile" },
  ]

  // Mobile Bottom Tab Items - Glassmorphism Style (Courses instead of Saved)
  const mobileTabItems = [
    { icon: Home, label: "Home", href: "/", active: pathname === "/" },
    { icon: Search, label: "Explore", href: "/explore", active: pathname === "/explore" },
    { icon: Briefcase, label: "Jobs", href: "/jobs", active: pathname === "/jobs" },
    { icon: GraduationCap, label: "Courses", href: "/courses", active: pathname === "/courses" },
    { icon: User, label: "Profile", href: "/profile", active: pathname === "/profile" },
  ]

  if (!mounted) {
    return null
  }

  return (
    <>
      {/* Desktop Navbar - ThemeToggle VISIBLE here */}
      <nav className="hidden md:block sticky top-0 z-50 w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-14">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-7 h-7 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:scale-105 transition-transform">
                Z
              </div>
              <span className="text-lg font-semibold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                Zumely
              </span>
            </Link>

            {/* Desktop Navigation Icons */}
            <div className="flex items-center gap-1">
              {desktopNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative group p-2.5 rounded-xl transition-all duration-200 ${
                    item.active
                      ? "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400"
                      : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  <item.icon size={20} strokeWidth={1.5} />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-slate-800 dark:bg-slate-700 text-white text-[10px] font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>

            {/* Right Side Actions - ThemeToggle KEPT HERE for desktop */}
            <div className="flex items-center gap-2">
              {/* Notifications */}
              <button className="relative p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200">
                <Bell size={18} strokeWidth={1.5} className="text-slate-600 dark:text-slate-400" />
                {notifications > 0 && (
                  <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-red-500 text-white text-[8px] font-bold rounded-full flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </button>

              {/* Messages */}
              <button className="relative p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200">
                <MessageCircle size={18} strokeWidth={1.5} className="text-slate-600 dark:text-slate-400" />
                {messages > 0 && (
                  <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-red-500 text-white text-[8px] font-bold rounded-full flex items-center justify-center">
                    {messages}
                  </span>
                )}
              </button>

              {/* THEME TOGGLE - Visible on Desktop */}
              <ThemeToggle />

              <div className="w-px h-5 bg-slate-200 dark:bg-slate-700 mx-1" />

              {!loading && (
                <>
                  {user ? (
                    <div className="flex items-center gap-2">
                      <Link href="/dashboard">
                        <Button variant="ghost" size="sm" className="gap-1.5 text-slate-600 dark:text-slate-400 rounded-xl">
                          <LayoutDashboard size={16} />
                          <span className="text-xs">Dashboard</span>
                        </Button>
                      </Link>
                      <Button 
                        onClick={handleLogout}
                        variant="outline" 
                        size="sm"
                        className="border-red-200 dark:border-red-900/30 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 gap-1.5 rounded-xl text-xs"
                      >
                        <LogOut size={14} />
                        Logout
                      </Button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Link href="/login">
                        <Button variant="ghost" size="sm" className="text-slate-600 dark:text-slate-400 rounded-xl text-xs">
                          Sign in
                        </Button>
                      </Link>
                      <Link href="/signup">
                        <Button size="sm" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-md rounded-xl text-xs px-4">
                          Get Started
                        </Button>
                      </Link>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile View */}
      <div className="md:hidden">
        {/* Top Header with Menu Button - THEME TOGGLE REMOVED from header */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 rounded-b-3xl shadow-lg">
          <div className="flex justify-between items-center px-5 py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg">
                Z
              </div>
              <span className="text-base font-bold bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                Zumely
              </span>
            </Link>

            {/* Right Side Icons - NO THEME TOGGLE HERE */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex items-center justify-center w-10 h-10 rounded-2xl bg-slate-100 dark:bg-slate-800 active:scale-95 transition-all duration-200 shadow-sm"
              >
                {mobileMenuOpen ? (
                  <X size={22} className="text-slate-600 dark:text-slate-400" />
                ) : (
                  <Menu size={22} className="text-slate-600 dark:text-slate-400" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Main Content Spacer */}
        <div className="h-16" />

        {/* Glassmorphism Bottom Tab Bar - Premium Blur Effect */}
        {!keyboardVisible && (
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-2xl border-t border-white/20 dark:border-white/10 rounded-t-2xl shadow-2xl safe-bottom">
            <div className="flex justify-around items-center px-2 py-2">
              {mobileTabItems.map((item) => {
                const isActive = item.active
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-200 group ${
                      isActive
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400"
                    }`}
                  >
                    <div className={`relative transition-all duration-200 ${isActive ? 'scale-110' : 'scale-100'}`}>
                      <item.icon 
                        size={22} 
                        strokeWidth={isActive ? 2.5 : 1.8}
                        className="transition-all"
                      />
                      {isActive && (
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full"></div>
                      )}
                    </div>
                    <span className={`text-[10px] font-medium transition-all ${isActive ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'opacity-70'}`}>
                      {item.label}
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}

        {/* Bottom Safe Area Spacer */}
        {!keyboardVisible && <div className="h-16" />}
      </div>

      {/* Mobile Bottom Sheet Menu - ThemeToggle INSIDE here */}
      <div 
        className={`fixed inset-x-0 bottom-0 z-50 transform transition-all duration-300 ease-out md:hidden ${
          mobileMenuOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {/* Backdrop with blur */}
        <div 
          className={`absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Bottom Sheet Content - Glassmorphism */}
        <div className="relative bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl rounded-t-3xl shadow-2xl border-t border-white/20 dark:border-white/10 max-h-[85vh] overflow-y-auto">
          {/* Handle Bar */}
          <div className="sticky top-0 bg-transparent pt-4 pb-2 flex justify-center">
            <div className="w-12 h-1.5 bg-slate-300 dark:bg-slate-600 rounded-full"></div>
          </div>

          {/* User Profile Section */}
          <div className="px-5 py-4 border-b border-slate-100/50 dark:border-slate-800/50">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                <User size={22} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-slate-800 dark:text-white">
                  {user?.email?.split('@')[0] || 'Guest User'}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 truncate max-w-[200px]">
                  {user?.email || 'Sign in to access features'}
                </p>
              </div>
              <ChevronRight size={18} className="text-slate-400" />
            </div>
          </div>

          {/* THEME TOGGLE INSIDE MENU - Moved here for mobile */}
          <div className="px-5 py-4 border-b border-slate-100/50 dark:border-slate-800/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <Sparkles size={20} className="text-slate-600 dark:text-slate-400" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-white">Appearance</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Switch between light and dark mode</p>
                </div>
              </div>
              <ThemeToggle />
            </div>
          </div>

          {/* Menu Items */}
          <div className="p-4 space-y-1">
            <Link
              href="/profile"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
            >
              <User size={20} />
              <span className="font-medium">View Profile</span>
            </Link>

            <Link
              href="/settings"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
            >
              <Settings size={20} />
              <span className="font-medium">Settings & Privacy</span>
            </Link>

            <Link
              href="/help"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
            >
              <HelpCircle size={20} />
              <span className="font-medium">Help & Support</span>
            </Link>
          </div>

          {/* Auth Actions */}
          <div className="p-4 pt-2 pb-8 border-t border-slate-100/50 dark:border-slate-800/50">
            {!loading && (
              <>
                {user ? (
                  <Button
                    onClick={handleLogout}
                    variant="outline"
                    className="w-full gap-2 border-red-200 dark:border-red-900/30 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-2xl py-5"
                  >
                    <LogOut size={18} />
                    Sign Out
                  </Button>
                ) : (
                  <div className="space-y-3">
                    <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                      <Button variant="outline" className="w-full rounded-2xl py-5">
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                      <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-2xl py-5 shadow-lg">
                        Create Free Account
                      </Button>
                    </Link>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
        
        .safe-bottom {
          padding-bottom: env(safe-area-inset-bottom, 0px);
        }
        
        .overflow-y-auto {
          scrollbar-width: thin;
          -webkit-overflow-scrolling: touch;
        }
      `}</style>
    </>
  )
}