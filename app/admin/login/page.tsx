"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { verifyAdminPassword, setAdminSession } from "@/lib/admin-auth"
import Link from "next/link"

export default function AdminLoginPage() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    setTimeout(() => {
      if (verifyAdminPassword(password)) {
        setAdminSession(true)
        router.push("/admin/dashboard")
      } else {
        setError("Invalid password. Try: admin123")
        setLoading(false)
      }
    }, 500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 shadow-lg">
        <div className="text-center mb-8">
          <h1 className="font-serif text-4xl font-bold text-foreground mb-3">Giftly Admin</h1>
          <p className="text-muted-foreground text-lg">Product Management Dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-3">Admin Password</label>
            <Input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              className="w-full h-12 text-base"
              autoFocus
            />
          </div>

          {error && (
            <div className="p-3 bg-destructive/10 border border-destructive/30 rounded-lg">
              <p className="text-destructive text-sm font-medium">{error}</p>
            </div>
          )}

          <Button
            type="submit"
            className="w-full h-12 bg-accent hover:bg-accent/90 text-white font-medium text-base rounded-lg"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login to Dashboard"}
          </Button>
        </form>

        <div className="text-center mt-8 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wide font-medium">Demo Credentials</p>
          <div className="bg-muted/50 p-4 rounded-lg mb-6">
            <p className="text-sm text-foreground font-mono">Password: admin123</p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center text-accent hover:underline text-sm font-medium transition"
          >
            ← Back to Store
          </Link>
        </div>
      </Card>
    </div>
  )
}
