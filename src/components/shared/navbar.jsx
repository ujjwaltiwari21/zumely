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

  // Mobile Bottom Tab Items
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
      {/* Desktop Navbar - Apple Style */}
      <nav className="hidden md:block sticky top-0 z-50 w-full bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-14">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-7 h-7 bg-linear-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:scale-105 transition-transform">
                Z
              </div>
              <span className="text-lg font-semibold tracking-tight bg-linear-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                Zumely
              </span>
            </Link>

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

            <div className="flex items-center gap-2">
              <button className="relative p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200">
                <Bell size={18} strokeWidth={1.5} className="text-slate-600 dark:text-slate-400" />
                {notifications > 0 && (
                  <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-red-500 text-white text-[8px] font-bold rounded-full flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </button>

              <button className="relative p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200">
                <MessageCircle size={18} strokeWidth={1.5} className="text-slate-600 dark:text-slate-400" />
                {messages > 0 && (
                  <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-red-500 text-white text-[8px] font-bold rounded-full flex items-center justify-center">
                    {messages}
                  </span>
                )}
              </button>

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
                        <Button size="sm" className="bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-md rounded-xl text-xs px-4">
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

      {/* Mobile View - NO BLACK SPACE AT TOP */}
      <div className="md:hidden">
        {/* Top Header - NO extra space at top */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 shadow-lg">
          <div className="flex justify-between items-center px-4 py-2.5">
            <Link href="/" className="flex items-center gap-1.5">
              <div className="w-7 h-7 bg-linear-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xs shadow-md">
                Z
              </div>
              <span className="text-sm font-bold bg-linear-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
                Zumely
              </span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 active:scale-95 transition-all duration-200"
            >
              {mobileMenuOpen ? (
                <X size={18} className="text-slate-600 dark:text-slate-400" />
              ) : (
                <Menu size={18} className="text-slate-600 dark:text-slate-400" />
              )}
            </button>
          </div>
        </div>

        {/* Content Spacer - ONLY for content below navbar */}
        <div className="h-12" />

        {/* Glassmorphism Bottom Tab Bar */}
        {!keyboardVisible && (
          <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-2xl border-t border-white/20 dark:border-white/10 rounded-t-2xl shadow-2xl safe-bottom">
            <div className="flex justify-around items-center px-1 py-1.5">
              {mobileTabItems.map((item) => {
                const isActive = item.active
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "text-blue-600 dark:text-blue-400"
                        : "text-slate-500 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400"
                    }`}
                  >
                    <item.icon size={20} strokeWidth={isActive ? 2.5 : 1.8} />
                    <span className={`text-[9px] font-medium ${isActive ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'opacity-70'}`}>
                      {item.label}
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        )}

        {/* Bottom Safe Area Spacer */}
        {!keyboardVisible && <div className="h-14" />}
      </div>

      {/* Mobile Bottom Sheet Menu */}
      <div 
        className={`fixed inset-x-0 bottom-0 z-50 transform transition-all duration-300 ease-out md:hidden ${
          mobileMenuOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div 
          className={`absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setMobileMenuOpen(false)}
        />
        
        <div className="relative bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl rounded-t-3xl shadow-2xl border-t border-white/20 dark:border-white/10 max-h-[85vh] overflow-y-auto">
          <div className="sticky top-0 bg-transparent pt-3 pb-1 flex justify-center">
            <div className="w-10 h-1 bg-slate-300 dark:bg-slate-600 rounded-full"></div>
          </div>

          <div className="px-4 py-3 border-b border-slate-100/50 dark:border-slate-800/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                <User size={18} className="text-white" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm text-slate-800 dark:text-white">
                  {user?.email?.split('@')[0] || 'Guest User'}
                </p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate max-w-45">
                  {user?.email || 'Sign in to access features'}
                </p>
              </div>
              <ChevronRight size={16} className="text-slate-400" />
            </div>
          </div>

          <div className="px-4 py-3 border-b border-slate-100/50 dark:border-slate-800/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <Sparkles size={16} className="text-slate-600 dark:text-slate-400" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-slate-800 dark:text-white">Appearance</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">Light / Dark mode</p>
                </div>
              </div>
              <ThemeToggle />
            </div>
          </div>

          <div className="p-3 space-y-1">
            <Link
              href="/profile"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 text-sm"
            >
              <User size={18} />
              <span>View Profile</span>
            </Link>

            <Link
              href="/settings"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 text-sm"
            >
              <Settings size={18} />
              <span>Settings & Privacy</span>
            </Link>

            <Link
              href="/help"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 text-sm"
            >
              <HelpCircle size={18} />
              <span>Help & Support</span>
            </Link>
          </div>

          <div className="p-3 pt-1 pb-6 border-t border-slate-100/50 dark:border-slate-800/50">
            {!loading && (
              <>
                {user ? (
                  <Button
                    onClick={handleLogout}
                    variant="outline"
                    className="w-full gap-2 border-red-200 dark:border-red-900/30 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-xl py-3 text-sm"
                  >
                    <LogOut size={16} />
                    Sign Out
                  </Button>
                ) : (
                  <div className="space-y-2">
                    <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                      <Button variant="outline" className="w-full rounded-xl py-3 text-sm">
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                      <Button className="w-full bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rounded-xl py-3 text-sm shadow-lg">
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