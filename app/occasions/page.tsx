"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { getRandomImage } from "@/lib/image-service"

export default function OccasionsPage() {
  const occasionData = [
    {
      name: "Birthdays",
      description: "Make their special day unforgettable",
      query: "birthday celebration gifts balloons",
      href: "/occasions/birthdays",
      color: "from-teal-500/20 to-teal-600/20",
    },
    {
      name: "Christmas",
      description: "Spread holiday cheer with thoughtful gifts",
      query: "christmas gifts holiday presents",
      href: "/occasions/christmas",
      color: "from-red-500/20 to-green-600/20",
    },
    {
      name: "Graduations",
      description: "Celebrate their achievements",
      query: "graduation gifts achievement celebration",
      href: "/occasions/graduations",
      color: "from-amber-500/20 to-orange-600/20",
    },
    {
      name: "Anniversaries",
      description: "Honor your love and commitment",
      query: "anniversary gifts love romance",
      href: "/occasions/anniversaries",
      color: "from-emerald-500/20 to-teal-600/20",
    },
    {
      name: "Weddings",
      description: "Perfect gifts for the happy couple",
      query: "wedding gifts celebration couple",
      href: "/occasions/weddings",
      color: "from-pink-500/20 to-rose-600/20",
    },
    {
      name: "Baby Showers",
      description: "Welcome the new arrival",
      query: "baby shower gifts newborn celebration",
      href: "/occasions/baby-showers",
      color: "from-blue-500/20 to-cyan-600/20",
    },
    {
      name: "Mother's Day",
      description: "Show mom how much you care",
      query: "mothers day gifts appreciation flowers",
      href: "/occasions/mothers-day",
      color: "from-pink-500/20 to-purple-600/20",
    },
    {
      name: "Father's Day",
      description: "Gifts dad will truly appreciate",
      query: "fathers day gifts appreciation",
      href: "/occasions/fathers-day",
      color: "from-blue-500/20 to-indigo-600/20",
    },
    {
      name: "Valentine's Day",
      description: "Express your love and affection",
      query: "valentines day gifts romantic love",
      href: "/occasions/valentines-day",
      color: "from-red-500/20 to-pink-600/20",
    },
  ]

  const [occasions, setOccasions] = useState(occasionData.map((o) => ({ ...o, image: "" })))

  useEffect(() => {
    const loadImages = async () => {
      const imagesPromises = occasionData.map((occasion) =>
        getRandomImage(occasion.query).then((image) => ({ ...occasion, image })),
      )
      const loaded = await Promise.all(imagesPromises)
      setOccasions(loaded)
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
                Shop by Occasion
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty">
                Find the perfect personalized gift for every special moment and celebration in life
              </p>
            </div>
          </div>
        </section>

        {/* Occasions Grid */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {occasions.map((occasion) => (
                <Link
                  key={occasion.name}
                  href={occasion.href}
                  className="group relative overflow-hidden rounded-2xl bg-muted/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${occasion.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />
                    <img
                      src={occasion.image || "/placeholder.svg"}
                      alt={occasion.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {occasion.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">{occasion.description}</p>
                    <Button variant="ghost" className="text-accent hover:text-accent/80 p-0 h-auto font-medium">
                      Shop {occasion.name} →
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
                Can't find the right occasion?
              </h2>
              <p className="text-muted-foreground mb-8 text-pretty">
                Browse our full collection of personalized gifts for any moment worth celebrating
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white">
                <Link href="/gifts">View All Gifts</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
