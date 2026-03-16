"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Search, Package, Truck, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function TrackOrderPage() {
  const [trackingNumber, setTrackingNumber] = useState("")
  const [tracked, setTracked] = useState(false)

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault()
    if (trackingNumber.trim()) {
      setTracked(true)
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-accent/10 to-background">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">Track Your Order</h1>
            <p className="text-lg text-muted-foreground">
              Enter your tracking number to see the status of your shipment.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 md:px-6">
          <div className="container max-w-4xl mx-auto">
            <div className="bg-muted/30 p-8 rounded-lg border border-border/40 mb-12">
              <form onSubmit={handleTrack} className="flex gap-2">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    placeholder="Enter your tracking number"
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Track
                </Button>
              </form>
            </div>

            {tracked && (
              <div className="bg-muted/30 p-8 rounded-lg border border-border/40">
                <h2 className="font-serif text-2xl font-bold mb-8 text-foreground">Order Status</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <CheckCircle className="w-8 h-8 text-accent mb-2" />
                      <div className="w-1 h-12 bg-accent/30"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Order Confirmed</h3>
                      <p className="text-sm text-muted-foreground">March 20, 2025</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <CheckCircle className="w-8 h-8 text-accent mb-2" />
                      <div className="w-1 h-12 bg-accent/30"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Processing</h3>
                      <p className="text-sm text-muted-foreground">March 21, 2025</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <Package className="w-8 h-8 text-accent mb-2" />
                      <div className="w-1 h-12 bg-accent/30"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Shipped</h3>
                      <p className="text-sm text-muted-foreground">March 23, 2025</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <Truck className="w-8 h-8 text-muted-foreground mb-2" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Out for Delivery</h3>
                      <p className="text-sm text-muted-foreground">Expected March 26, 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-12 bg-muted/30 p-8 rounded-lg border border-border/40">
              <h2 className="font-serif text-2xl font-bold mb-6 text-foreground">Tracking Tips</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Your tracking number is included in your shipping confirmation email</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Updates are typically available within 24 hours of shipment</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>International orders may take longer to update in the tracking system</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>Contact support if your tracking number isn't working after 24 hours</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
