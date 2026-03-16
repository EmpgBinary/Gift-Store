"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { getRandomImage } from "@/lib/image-service"

export default function RecipientsPage() {
  const recipientData = [
    {
      name: "For Her",
      description: "Thoughtful gifts she'll treasure forever",
      query: "elegant gifts women jewelry personalized",
      href: "/gifts?recipient=her",
      icon: "👩",
    },
    {
      name: "For Him",
      description: "Personalized gifts he'll actually use",
      query: "gifts for men masculine personalized",
      href: "/gifts?recipient=him",
      icon: "👨",
    },
    {
      name: "For Kids",
      description: "Fun and memorable gifts for children",
      query: "gifts for kids colorful fun toys",
      href: "/gifts?recipient=kids",
      icon: "👶",
    },
    {
      name: "For Couples",
      description: "Celebrate their love together",
      query: "gifts for couples romantic love",
      href: "/gifts?recipient=couples",
      icon: "💑",
    },
    {
      name: "For Mom",
      description: "Show mom your appreciation",
      query: "gifts for mom flowers appreciation",
      href: "/gifts?recipient=mom",
      icon: "🌸",
    },
    {
      name: "For Dad",
      description: "Gifts that honor his role",
      query: "gifts for dad tools masculine practical",
      href: "/gifts?recipient=dad",
      icon: "🔧",
    },
    {
      name: "For Friends",
      description: "Celebrate your friendship",
      query: "friendship gifts celebration fun",
      href: "/gifts?recipient=friends",
      icon: "🤝",
    },
    {
      name: "For Coworkers",
      description: "Professional yet personal gifts",
      query: "office gifts coworkers professional",
      href: "/gifts?recipient=coworkers",
      icon: "💼",
    },
    {
      name: "For Grandparents",
      description: "Gifts filled with love and memories",
      query: "gifts for grandparents sentimental memories",
      href: "/gifts?recipient=grandparents",
      icon: "👴",
    },
  ]

  const [recipients, setRecipients] = useState(recipientData.map((r) => ({ ...r, image: "" })))

  useEffect(() => {
    const loadImages = async () => {
      const imagesPromises = recipientData.map((recipient) =>
        getRandomImage(recipient.query).then((image) => ({ ...recipient, image })),
      )
      const loaded = await Promise.all(imagesPromises)
      setRecipients(loaded)
    }
    loadImages()
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-accent/5 to-background py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-accent mb-6 text-balance">
                Shop by Recipient
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty">
                Discover personalized gifts tailored for everyone in your life
              </p>
            </div>
          </div>
        </section>

        {/* Recipients Grid */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {recipients.map((recipient) => (
                <Link
                  key={recipient.name}
                  href={recipient.href}
                  className="group relative overflow-hidden rounded-2xl bg-muted/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <img
                      src={recipient.image || "/placeholder.svg"}
                      alt={recipient.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 text-4xl bg-white/90 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                      {recipient.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {recipient.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">{recipient.description}</p>
                    <Button variant="ghost" className="text-accent hover:text-accent/80 p-0 h-auto font-medium">
                      Shop {recipient.name} →
                    </Button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-accent/5 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-accent mb-4 text-balance">
                Not sure who you're shopping for?
              </h2>
              <p className="text-muted-foreground mb-8 text-pretty">
                Explore our complete collection and find the perfect personalized gift
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <Link href="/gifts">Browse All Gifts</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
