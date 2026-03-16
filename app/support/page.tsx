"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MessageSquare, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SupportPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-accent/10 to-background">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">Customer Support</h1>
            <p className="text-lg text-muted-foreground">
              We're here to help. Reach out to us through any of these channels.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 md:px-6">
          <div className="container max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-muted/30 p-8 rounded-lg border border-border/40">
                <Mail className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold text-lg mb-3 text-foreground">Email Support</h3>
                <p className="text-muted-foreground mb-4">Send us an email and we'll respond within 24 hours.</p>
                <a href="mailto:support@giftly.com" className="text-accent hover:text-accent/80 font-medium">
                  support@giftly.com
                </a>
              </div>

              <div className="bg-muted/30 p-8 rounded-lg border border-border/40">
                <Phone className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold text-lg mb-3 text-foreground">Phone Support</h3>
                <p className="text-muted-foreground mb-4">Call us Monday-Friday, 9am-6pm EST.</p>
                <a href="tel:+15551234567" className="text-accent hover:text-accent/80 font-medium">
                  +1 (555) 123-4567
                </a>
              </div>

              <div className="bg-muted/30 p-8 rounded-lg border border-border/40">
                <MessageSquare className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold text-lg mb-3 text-foreground">Live Chat</h3>
                <p className="text-muted-foreground mb-4">Chat with our support team in real-time.</p>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">Start Chat</Button>
              </div>

              <div className="bg-muted/30 p-8 rounded-lg border border-border/40">
                <Clock className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold text-lg mb-3 text-foreground">Support Hours</h3>
                <div className="text-muted-foreground space-y-1 text-sm">
                  <p>Monday - Friday: 9am - 6pm EST</p>
                  <p>Saturday: 10am - 4pm EST</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 p-8 rounded-lg border border-border/40">
              <h2 className="font-serif text-2xl font-bold mb-6 text-foreground">Common Issues</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">How do I change my order?</h3>
                  <p className="text-muted-foreground">
                    Contact us immediately if you need to make changes. We can help if your order hasn't shipped yet.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Can I cancel my order?</h3>
                  <p className="text-muted-foreground">
                    Yes, you can cancel within 24 hours of placing your order for a full refund.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">What if my item arrives damaged?</h3>
                  <p className="text-muted-foreground">
                    Contact us with photos of the damage and we'll send a replacement immediately.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">How do I update my shipping address?</h3>
                  <p className="text-muted-foreground">
                    Email us your order number and new address within 24 hours of placing your order.
                  </p>
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
