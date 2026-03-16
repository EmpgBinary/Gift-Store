"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export default function QualityFAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What is your quality guarantee?",
      answer:
        "We guarantee that all our products are made with high-quality materials and craftsmanship. If you receive a defective item, we'll replace it free of charge.",
    },
    {
      question: "How do you ensure product quality?",
      answer:
        "Every product goes through rigorous quality control before shipping. We inspect materials, personalization accuracy, and packaging to ensure excellence.",
    },
    {
      question: "What materials are used in your products?",
      answer:
        "We use premium materials including high-quality ceramics, metals, leather, and eco-friendly packaging. Specific materials vary by product.",
    },
    {
      question: "Are your products durable?",
      answer:
        "Yes, our products are designed to last. Most items come with care instructions to help you maintain them for years to come.",
    },
    {
      question: "Do you use eco-friendly materials?",
      answer:
        "We're committed to sustainability. Many of our products use eco-friendly materials, and all our packaging is recyclable or compostable.",
    },
    {
      question: "What if I receive a defective product?",
      answer:
        "Contact us immediately with photos of the defect. We'll send a replacement or issue a refund at no cost to you.",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-accent/10 to-background">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">Quality Guarantee</h1>
            <p className="text-lg text-muted-foreground">Learn about our commitment to quality and durability.</p>
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
