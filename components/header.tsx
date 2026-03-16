"use client"

import Link from "next/link"
import { Search, Heart, ShoppingBag } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useCart } from "@/lib/cart-context"
import React from "react"
import { useRouter } from "next/navigation"

export function Header() {
  const { totalItems } = useCart()
  const [currentUser, setCurrentUser] = React.useState<{ email: string; id: string } | null>(null)
  const [searchQuery, setSearchQuery] = React.useState("")
  const router = useRouter()

  React.useEffect(() => {
    const user = localStorage.getItem("giftly_current_user")
    if (user) {
      setCurrentUser(JSON.parse(user))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("giftly_current_user")
    setCurrentUser(null)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-accent"
            >
              <path
                d="M20 7h-4V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm10 15H4V9h16v11z"
                fill="currentColor"
              />
              <path d="M12 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="currentColor" />
            </svg>
            <span className="text-xl font-semibold text-accent">Giftly</span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-accent transition-colors">
            Home
          </Link>
          <Link href="/occasions" className="text-sm font-medium hover:text-accent transition-colors">
            Occasions
          </Link>
          <Link href="/recipients" className="text-sm font-medium hover:text-accent transition-colors">
            Recipients
          </Link>
          <Link href="/gifts" className="text-sm font-medium hover:text-accent transition-colors">
            Gifts
          </Link>
        </nav>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="hidden lg:flex items-center flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search gifts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-muted/50 border-border/50 rounded-full"
            />
          </div>
        </form>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden md:flex hover:text-accent">
            <Heart className="h-5 w-5" />
          </Button>
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="hover:text-accent relative">
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>
          {currentUser ? (
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground hidden sm:block">{currentUser.email}</span>
              <Button variant="ghost" size="sm" onClick={handleLogout} className="text-accent hover:text-accent/80">
                Logout
              </Button>
            </div>
          ) : (
            <Link href="/auth/login">
              <Button variant="default" size="sm" className="bg-accent hover:bg-accent/90">
                Sign In
              </Button>
            </Link>
          )}
          <Button variant="ghost" size="icon" className="rounded-full hover:text-accent">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="User"
              width={32}
              height={32}
              className="rounded-full"
            />
          </Button>
        </div>
      </div>
    </header>
  )
}
