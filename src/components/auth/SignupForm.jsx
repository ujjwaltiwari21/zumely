"use client"

import { useState, useEffect } from "react"
import { createClient } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from "lucide-react"

export function SignupForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [otp, setOtp] = useState("")
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState("signup")
  const [mounted, setMounted] = useState(false)
  
  const supabase = createClient()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSignup = async (e) => {
    e.preventDefault()
    setLoading(true)

    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    setLoading(false)

    if (error) {
      alert(error.message)
    } else {
      alert("Verification code sent to your email!")
      setStep("verify")
    }
  }

  const handleVerify = async (e) => {
    e.preventDefault()
    setLoading(true)

    const { error } = await supabase.auth.verifyOtp({
      email,
      token: otp,
      type: 'signup',
    })

    setLoading(false)

    if (error) {
      alert(error.message)
    } else {
      alert("Success! Your account is verified.")
      window.location.href = "/dashboard"
    }
  }

  if (!mounted) return null

  return (
    <div className="w-full max-w-sm mx-auto p-8 border rounded-2xl bg-white dark:bg-slate-950 shadow-2xl border-slate-200 dark:border-slate-800">
      {step === "signup" ? (
        <form onSubmit={handleSignup} className="space-y-4">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold tracking-tight">Create Account</h2>
            <p className="text-sm text-slate-500 mt-2">Enter details to get a 6-digit code</p>
          </div>

          <div className="space-y-4">
            <Input 
              type="email" 
              placeholder="Email (e.g. name@example.com)" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              className="h-12"
            />
            
            <div className="relative">
              <Input 
                type={showPassword ? "text" : "password"} 
                placeholder="Create a password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
                className="h-12 pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <Button 
            disabled={loading} 
            type="submit" 
            className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-bold transition-all"
          >
            {loading ? "Sending..." : "Get Verification Code"}
          </Button>
        </form>
      ) : (
        <form onSubmit={handleVerify} className="space-y-4">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold tracking-tight">Verify OTP</h2>
            <p className="text-sm text-slate-500 mt-2">Check your inbox for the code sent to {email}</p>
          </div>

          <Input 
            type="text" 
            placeholder="Enter 6-digit code" 
            value={otp} 
            onChange={(e) => setOtp(e.target.value)} 
            required 
            maxLength={6}
            className="h-14 text-center text-2xl tracking-[0.5em] font-black border-2 border-blue-100"
          />

          <Button 
            disabled={loading} 
            type="submit" 
            className="w-full h-12 bg-green-600 hover:bg-green-700 text-white font-bold transition-all"
          >
            {loading ? "Verifying..." : "Verify & Continue"}
          </Button>

          <button 
            type="button" 
            onClick={() => setStep("signup")}
            className="w-full text-xs text-blue-600 hover:underline mt-2"
          >
            Wrong email? Go back
          </button>
        </form>
      )}

      <p className="text-center text-xs text-slate-500 mt-6 px-4 leading-relaxed">
        By continuing, you agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  )
}