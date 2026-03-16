"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export default function PersonalizationFAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What personalization options are available?",
      answer:
        "We offer a wide range of personalization options including custom text, names, dates, photos, and monograms. Each product page shows the specific personalization options available for that item.",
    },
    {
      question: "Can I upload my own images for personalization?",
      answer:
        "Yes! Most of our products allow you to upload your own images. Images should be high-resolution (at least 300 DPI) for best results. Supported formats include JPG, PNG, and PDF.",
    },
    {
      question: "How do I preview my personalized gift before ordering?",
      answer:
        "Our design tool allows you to see a real-time preview of your personalized gift. You can make adjustments until you're completely satisfied before placing your order.",
    },
    {
      question: "Can I change my personalization after ordering?",
      answer:
        "If your order hasn't started processing yet, we can make changes. Contact us immediately with your order number and the changes you'd like to make.",
    },
    {
      question: "What if I'm not happy with the personalization?",
      answer:
        "If there's an error on our part, we'll remake the item at no charge. If you simply change your mind, we can offer an exchange with a small fee.",
    },
    {
      question: "Are there any restrictions on personalization text?",
      answer:
        "We don't allow offensive language or copyrighted material. Most other text is fine, including names, dates, and personal messages.",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-accent/10 to-background">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">Personalization FAQ</h1>
            <p className="text-lg text-muted-foreground">Learn everything about personalizing your Giftly gifts.</p>
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
