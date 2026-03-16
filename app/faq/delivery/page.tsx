"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export default function DeliveryFAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How long does delivery take?",
      answer:
        "Standard delivery takes 5-7 business days. Express delivery takes 2-3 business days. International orders take 10-15 business days. Add 3-5 business days for personalization processing.",
    },
    {
      question: "Do you deliver on weekends?",
      answer:
        "Most carriers deliver Monday through Friday. Some areas may have Saturday delivery available. Check your shipping confirmation for specific delivery dates.",
    },
    {
      question: "Can I choose a specific delivery date?",
      answer:
        "You can select your preferred delivery timeframe during checkout. We'll do our best to accommodate your request, though exact dates depend on carrier availability.",
    },
    {
      question: "What if my package doesn't arrive on time?",
      answer:
        "Contact us immediately if your package is late. We'll investigate with the carrier and either send a replacement or issue a refund.",
    },
    {
      question: "Can I have my gift delivered to a different address?",
      answer:
        "Yes! You can enter a different delivery address during checkout. This is perfect for sending gifts directly to recipients.",
    },
    {
      question: "Do you offer gift wrapping and cards?",
      answer:
        "Yes, we offer premium gift wrapping and personalized gift cards. You can add these options during checkout.",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-accent/10 to-background">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">Delivery FAQ</h1>
            <p className="text-lg text-muted-foreground">Find answers to your delivery and shipping questions.</p>
          </div>
        </section>

        <section className="py-16 px-4 md:px-6">
          <div className="container max-w-4xl mx-auto">
            <div className="space-y-4">
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
