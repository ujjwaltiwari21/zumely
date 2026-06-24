"use client"

import { useState, useEffect } from "react"
import { createClient } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [mounted, setMounted] = useState(false)

  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    console.log("Login data:", data)
    console.log("Login error:", error)

    if (error) {
      setLoading(false)
      alert(error.message)
      return
    }

    router.refresh()

    setTimeout(() => {
      router.push("/dashboard")
    }, 100)
  }

  if (!mounted) return null

  return (
    <div className="w-full max-w-sm mx-auto p-6 sm:p-8 border rounded-2xl bg-white dark:bg-slate-950 shadow-2xl border-slate-200 dark:border-slate-800">
      <form onSubmit={handleLogin} className="space-y-4">
        <div className="text-center mb-4 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Welcome Back
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 sm:mt-2">
            Enter your credentials to login
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          <Input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            className="h-10 sm:h-12 text-sm sm:text-base"
          />

          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              className="h-10 sm:h-12 pr-10 text-sm sm:text-base"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
            >
              {showPassword ? (
                <EyeOff size={18} className="sm:w-5 sm:h-5" />
              ) : (
                <Eye size={18} className="sm:w-5 sm:h-5" />
              )}
            </button>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            className="text-xs text-blue-600 hover:underline"
          >
            Forgot password?
          </button>
        </div>

        <Button
          disabled={loading}
          type="submit"
          className="w-full h-10 sm:h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all flex items-center justify-center text-sm sm:text-base"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4 animate-spin" />
              <span>Logging in...</span>
            </>
          ) : (
            "Login"
          )}
        </Button>

        <p className="text-center text-xs sm:text-sm text-slate-500 mt-3 sm:mt-4">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={() => router.push("/signup")}
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign up
          </button>
        </p>
      </form>
    </div>
  )
}