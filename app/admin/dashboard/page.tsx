"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Package, ShoppingCart, TrendingUp, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface DashboardStats {
  totalProducts: number
  totalOrders: number
  totalRevenue: number
  totalCustomers: number
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<DashboardStats>({
    totalProducts: 0,
    totalOrders: 0,
    totalRevenue: 0,
    totalCustomers: 0,
  })

  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("giftly_products") || "[]")
    setStats({
      totalProducts: products.length,
      totalOrders: Math.floor(Math.random() * 100) + 10,
      totalRevenue: Math.floor(Math.random() * 50000) + 5000,
      totalCustomers: Math.floor(Math.random() * 1000) + 100,
    })
  }, [])

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-serif text-3xl font-bold text-foreground mb-2">Dashboard Overview</h2>
        <p className="text-muted-foreground">Welcome to your Giftly admin dashboard</p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Total Products</p>
              <p className="font-serif text-3xl font-bold text-foreground">{stats.totalProducts}</p>
            </div>
            <div className="p-3 bg-accent/10 rounded-lg">
              <Package className="w-6 h-6 text-accent" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Total Orders</p>
              <p className="font-serif text-3xl font-bold text-foreground">{stats.totalOrders}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <ShoppingCart className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Revenue</p>
              <p className="font-serif text-3xl font-bold text-foreground">
                ${(stats.totalRevenue / 1000).toFixed(1)}k
              </p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Total Customers</p>
              <p className="font-serif text-3xl font-bold text-foreground">{stats.totalCustomers}</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="p-8">
        <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Quick Actions</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/admin/products/create">
            <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg">
              Create New Product
            </Button>
          </Link>
          <Link href="/admin/products">
            <Button variant="outline" className="w-full rounded-lg bg-transparent">
              View All Products
            </Button>
          </Link>
          <Link href="/">
            <Button variant="outline" className="w-full rounded-lg bg-transparent">
              View Store
            </Button>
          </Link>
        </div>
      </Card>

      {/* Recent Activity */}
      <Card className="p-8">
        <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Getting Started</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-4 pb-4 border-b">
            <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-accent font-bold">1</span>
            </div>
            <div>
              <p className="font-medium text-foreground">Add Your First Product</p>
              <p className="text-sm text-muted-foreground">
                Click on "Add New Product" to create your first product listing
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 pb-4 border-b">
            <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-accent font-bold">2</span>
            </div>
            <div>
              <p className="font-medium text-foreground">Upload Product Images</p>
              <p className="text-sm text-muted-foreground">Add high-quality images when creating or editing products</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-accent font-bold">3</span>
            </div>
            <div>
              <p className="font-medium text-foreground">Manage Your Inventory</p>
              <p className="text-sm text-muted-foreground">
                Edit, update, or delete products from the Manage Products section
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
