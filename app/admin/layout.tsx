"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { getAdminSession, setAdminSession } from "@/lib/admin-auth"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === "/admin/login") {
      setLoading(false)
      return
    }

    const admin = getAdminSession()
    setIsAdmin(admin)
    setLoading(false)

    if (!admin) {
      router.push("/admin/login")
    }
  }, [router, pathname])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    )
  }

  if (pathname === "/admin/login") {
    return children
  }

  if (!isAdmin) {
    return null
  }

  const handleLogout = () => {
    setAdminSession(false)
    router.push("/admin/login")
  }

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Admin Header */}
      <header className="bg-white border-b">
        <div className="container px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="font-serif text-2xl font-bold text-foreground">Giftly Admin</h1>
            <p className="text-sm text-muted-foreground">Product Management Dashboard</p>
          </div>
          <Button onClick={handleLogout} variant="outline">
            Logout
          </Button>
        </div>
      </header>

      {/* Admin Navigation */}
      <div className="container px-4 py-6">
        <div className="flex gap-4 mb-8">
          <Link href="/admin/dashboard">
            <Button variant="outline" className="rounded-full bg-transparent">
              Dashboard
            </Button>
          </Link>
          <Link href="/admin/products">
            <Button variant="outline" className="rounded-full bg-transparent">
              Manage Products
            </Button>
          </Link>
          <Link href="/admin/products/create">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full">
              Add New Product
            </Button>
          </Link>
        </div>

        {/* Main Content */}
        {children}
      </div>
    </div>
  )
}
