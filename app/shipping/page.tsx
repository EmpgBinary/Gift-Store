"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Truck, Clock, Globe, AlertCircle } from "lucide-react"

export default function ShippingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-accent/10 to-background">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">Shipping Information</h1>
            <p className="text-lg text-muted-foreground">
              Learn about our shipping options, delivery times, and tracking information.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 md:px-6">
          <div className="container max-w-4xl mx-auto space-y-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-muted/30 p-8 rounded-lg border border-border/40">
                <Truck className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold text-lg mb-3 text-foreground">Standard Shipping</h3>
                <p className="text-muted-foreground mb-2">5-7 business days</p>
                <p className="text-sm text-muted-foreground">Free on orders over $50</p>
              </div>
              <div className="bg-muted/30 p-8 rounded-lg border border-border/40">
                <Clock className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold text-lg mb-3 text-foreground">Express Shipping</h3>
                <p className="text-muted-foreground mb-2">2-3 business days</p>
                <p className="text-sm text-muted-foreground">$15 flat rate</p>
              </div>
              <div className="bg-muted/30 p-8 rounded-lg border border-border/40">
                <Globe className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold text-lg mb-3 text-foreground">International Shipping</h3>
                <p className="text-muted-foreground mb-2">10-15 business days</p>
                <p className="text-sm text-muted-foreground">Calculated at checkout</p>
              </div>
              <div className="bg-muted/30 p-8 rounded-lg border border-border/40">
                <AlertCircle className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold text-lg mb-3 text-foreground">Personalization Time</h3>
                <p className="text-muted-foreground mb-2">Add 3-5 business days</p>
                <p className="text-sm text-muted-foreground">For custom personalization</p>
              </div>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg border border-border/40">
              <h2 className="font-serif text-2xl font-bold mb-6 text-foreground">Shipping Policy</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  All orders are carefully packaged and shipped from our fulfillment center. Personalized items require
                  additional processing time to ensure quality and accuracy.
                </p>
                <p>
                  Once your order ships, you'll receive a tracking number via email. You can use this number to monitor
                  your package's progress.
                </p>
                <p>
                  We ship to most countries worldwide. International orders may be subject to customs duties and taxes,
                  which are the responsibility of the recipient.
                </p>
                <p>
                  For orders containing multiple items, all items will be shipped together when possible. If items ship
                  separately, you'll receive multiple tracking numbers.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
