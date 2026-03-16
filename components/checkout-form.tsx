"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useCart } from "@/lib/cart-context"

export function CheckoutForm() {
  const [isProcessing, setIsProcessing] = useState(false)
  const router = useRouter()
  const { items, totalPrice } = useCart()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    router.push("/payment")
  }

  const shippingCost = 5
  const taxRate = 0.08
  const tax = totalPrice * taxRate
  const finalTotal = totalPrice + shippingCost + tax

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
      <h1 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-accent">Checkout</h1>

      {/* 1. Shipping Information */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-foreground">1. Shipping Information</h2>
        <Card className="p-6 space-y-4">
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" placeholder="Enter your full name" className="mt-1.5" required />
          </div>

          <div>
            <Label htmlFor="address">Address</Label>
            <Input id="address" placeholder="Enter your address" className="mt-1.5" required />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="city">City</Label>
              <Input id="city" placeholder="City" className="mt-1.5" required />
            </div>
            <div>
              <Label htmlFor="state">State</Label>
              <Input id="state" placeholder="State" className="mt-1.5" required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="zipCode">Zip Code</Label>
              <Input id="zipCode" placeholder="Zip Code" className="mt-1.5" required />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="(555) 123-4567" className="mt-1.5" required />
            </div>
          </div>
        </Card>
      </div>

      {/* 2. Order Review */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-foreground">2. Order Review</h2>
        <Card className="p-6">
          <div className="space-y-4 mb-6">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-muted/30 flex-shrink-0">
                  <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                  {item.customization && (
                    <p className="text-xs text-muted-foreground">Customization: {item.customization}</p>
                  )}
                </div>
                <div className="text-right">
                  <p className="font-medium text-foreground">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-border pt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="text-foreground">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Shipping</span>
              <span className="text-foreground">${shippingCost.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Tax</span>
              <span className="text-foreground">${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-semibold pt-2 border-t border-border">
              <span className="text-foreground">Total</span>
              <span className="text-accent">${finalTotal.toFixed(2)}</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Submit Button */}
      <Button type="submit" size="lg" disabled={isProcessing} className="w-full text-base font-medium">
        {isProcessing ? "Processing..." : "Continue to Payment"}
      </Button>
    </form>
  )
}
