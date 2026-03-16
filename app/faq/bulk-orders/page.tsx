"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function BulkOrdersFAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What qualifies as a bulk order?",
      answer:
        "Bulk orders typically start at 10+ items. For larger quantities, we offer special pricing and customization options.",
    },
    {
      question: "Do you offer discounts for bulk orders?",
      answer: "Yes! We offer tiered discounts based on order quantity. Contact our sales team for a custom quote.",
    },
    {
      question: "Can I customize each item differently in a bulk order?",
      answer:
        "Absolutely. You can personalize each item individually, or keep them the same. Our team will work with you to make it easy.",
    },
    {
      question: "What's the minimum order for bulk pricing?",
      answer:
        "Bulk pricing starts at 10 items. For orders under 10, standard pricing applies. Contact us for special requests.",
    },
    {
      question: "How long does a bulk order take?",
      answer:
        "Bulk orders typically take 2-3 weeks depending on complexity and personalization. Rush options are available.",
    },
    {
      question: "Who should I contact for bulk orders?",
      answer: "Email our sales team at bulk@giftly.com or call +1 (555) 123-4567 ext. 2 for bulk order inquiries.",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-accent/10 to-background">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">Bulk Orders FAQ</h1>
            <p className="text-lg text-muted-foreground">
              Information about ordering in bulk for corporate gifts, events, and more.
            </p>
          </div>
        </section>

        <section className="py-16 px-4 md:px-6">
          <div className="container max-w-4xl mx-auto">
            <div className="space-y-4 mb-12">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-muted/30 rounded-lg border border-border/40 overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full px-6 py-4 flex justify-between items-center hover:bg-muted/50 transition-colors"
                  >
                    <h3 className="font-semibold text-foreground text-left">{faq.question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-accent transition-transform ${openIndex === idx ? "rotate-180" : ""}`}
                    />
                  </button>
                  {openIndex === idx && (
                    <div className="px-6 py-4 border-t border-border/40 bg-muted/20">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-accent/20 p-8 rounded-lg border border-accent/40 text-center">
              <h2 className="font-serif text-2xl font-bold mb-4 text-foreground">Ready for a Bulk Order?</h2>
              <p className="text-muted-foreground mb-6">
                Contact our sales team for a custom quote and personalized assistance.
              </p>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Request a Quote</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
