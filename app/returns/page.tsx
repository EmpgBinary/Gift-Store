"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RotateCcw, CheckCircle, AlertCircle } from "lucide-react"

export default function ReturnsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-accent/10 to-background">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">Returns & Exchanges</h1>
            <p className="text-lg text-muted-foreground">
              We want you to be completely satisfied with your purchase. Learn about our return and exchange policy.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 md:px-6">
          <div className="container max-w-4xl mx-auto space-y-12">
            <div className="bg-muted/30 p-8 rounded-lg border border-border/40">
              <div className="flex items-start gap-4 mb-6">
                <RotateCcw className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h2 className="font-serif text-2xl font-bold mb-4 text-foreground">Return Policy</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      We offer a 30-day return policy on all non-personalized items. Personalized items can be returned
                      within 14 days if there's a defect or error on our part.
                    </p>
                    <p>
                      Items must be in original condition with all packaging and tags intact. Returns must be initiated
                      within the specified timeframe from the delivery date.
                    </p>
                    <p>
                      Once we receive and inspect your return, refunds will be processed within 5-7 business days to
                      your original payment method.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg border border-border/40">
              <div className="flex items-start gap-4 mb-6">
                <CheckCircle className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h2 className="font-serif text-2xl font-bold mb-4 text-foreground">Exchange Process</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      If you'd like to exchange an item for a different size, color, or product, we're happy to help.
                      Exchanges are free for defective items.
                    </p>
                    <p>
                      For non-defective exchanges, a $5 exchange fee applies. Simply contact our support team with your
                      order number and the item you'd like to exchange.
                    </p>
                    <p>
                      We'll provide you with a prepaid return label. Once we receive your return, we'll ship your new
                      item within 2-3 business days.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg border border-border/40">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h2 className="font-serif text-2xl font-bold mb-4 text-foreground">Non-Returnable Items</h2>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>Personalized items with custom text or images (unless defective)</li>
                    <li>Items that show signs of wear or damage from customer use</li>
                    <li>Items without original packaging or tags</li>
                    <li>Sale or clearance items marked as final sale</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
