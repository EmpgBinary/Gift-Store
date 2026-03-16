"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/lib/cart-context"
import { useEffect, useState } from "react"

export default function OrderConfirmationPage() {
  const { items, totalPrice, clearCart } = useCart()
  const [orderNumber, setOrderNumber] = useState("")
  const [deliveryDate, setDeliveryDate] = useState("")

  useEffect(() => {
    // Generate order number and delivery date
    setOrderNumber("#" + Math.random().toString(36).substr(2, 9).toUpperCase())
    const date = new Date()
    date.setDate(date.getDate() + 7)
    setDeliveryDate(date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }))
  }, [])

  const shippingCost = 5
  const tax = totalPrice * 0.08
  const finalTotal = totalPrice + shippingCost + tax

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-muted/20">
        <div className="container px-4 md:px-6 py-12">
          <Card className="max-w-2xl mx-auto p-8 md:p-12">
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-accent" />
              </div>
            </div>

            {/* Thank You Message */}
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-center mb-4 text-[#E8A5B8]">
              Thank you for your order!
            </h1>
            <p className="text-center text-muted-foreground mb-8 text-balance">
              Your order has been placed and is being processed. You will receive an email confirmation shortly.
            </p>

            {/* Order Summary */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-foreground">Order Summary</h2>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Order Number</span>
                  <span className="font-medium text-foreground">{orderNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Estimated Delivery</span>
                  <span className="font-medium text-foreground">{deliveryDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Payment Method</span>
                  <span className="font-medium text-foreground">Secure Payment Processed</span>
                </div>
              </div>
            </div>

            {/* Items Ordered */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 text-foreground">Items Ordered</h2>
              <div className="space-y-4">
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
            </div>

            {/* Order Total */}
            <div className="mb-8 pt-6 border-t border-border">
              <h2 className="text-xl font-semibold mb-4 text-foreground">Order Total</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="text-foreground">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-foreground">${shippingCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="text-foreground">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-semibold pt-2 border-t border-border">
                  <span className="text-foreground">Total</span>
                  <span className="text-foreground">${finalTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-white rounded-full">
              <Link href="/gifts">Continue Shopping</Link>
            </Button>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
