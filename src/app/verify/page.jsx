"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"

export default function VerifyPage() {
const router = useRouter()
const supabase = createClient()

const [email, setEmail] = useState("")
const [otp, setOtp] = useState("")
const [loading, setLoading] = useState(false)
const [mounted, setMounted] = useState(false)

useEffect(() => {
setMounted(true)

const savedEmail = localStorage.getItem("verifyEmail")

if (savedEmail) {
  setEmail(savedEmail)
} else {
  router.push("/signup")
}

}, [router])

const handleVerify = async (e) => {
e.preventDefault()
setLoading(true)

const { error } = await supabase.auth.verifyOtp({
  email,
  token: otp,
  type: "email",
})

setLoading(false)

if (error) {
  alert(error.message)
  return
}

localStorage.removeItem("verifyEmail")

alert("Email verified successfully! Please login.")

router.push("/login")

}

if (!mounted) return null

return ( <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-4"> <div className="w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl p-8">

```
    <div className="text-center mb-6">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
        Verify Email
      </h1>

      <p className="text-sm text-slate-500 mt-2">
        Enter the verification code sent to your email.
      </p>
    </div>

    <form onSubmit={handleVerify} className="space-y-4">

      <Input
        type="email"
        value={email}
        disabled
        className="h-12"
      />

      <Input
        type="text"
        placeholder="Enter verification code"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        required
        className="h-12"
      />

      <Button
        type="submit"
        disabled={loading}
        className="w-full h-12 bg-blue-600 hover:bg-blue-700"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Verifying...
          </>
        ) : (
          "Verify Email"
        )}
      </Button>

      <p className="text-center text-sm text-slate-500">
        Already verified?{" "}
        <button
          type="button"
          onClick={() => router.push("/login")}
          className="text-blue-600 hover:underline font-medium"
        >
          Login
        </button>
      </p>

    </form>
  </div>
</div>
)
}
