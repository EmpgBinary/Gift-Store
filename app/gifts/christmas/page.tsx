"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/product-grid"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"
import { getRandomImage } from "@/lib/image-service"

export default function ChristmasGiftsPage() {
  const [christmasImage, setChristmasImage] = useState("")

  useEffect(() => {
    const loadImage = async () => {
      const image = await getRandomImage("christmas personalized gifts holiday")
      setChristmasImage(image)
    }
    loadImage()
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-red-50 to-green-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
                Christmas Gift Ideas
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                Make this Christmas unforgettable with personalized gifts that show how much you care. From custom
                ornaments to engraved keepsakes, find the perfect present for everyone on your list.
              </p>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8"
                asChild
              >
                <Link href="#gifts">Browse Christmas Gifts</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Christmas Gifts */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto mb-16">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <img
                  src={christmasImage || "/placeholder.svg"}
                  alt="Christmas personalized gifts"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  Personalized Christmas Magic
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  Christmas is about creating memories and celebrating the people we love. Our personalized Christmas
                  gifts add a special touch that shows you've put thought and care into every present.
                </p>
                <ul className="space-y-3 mb-8 text-muted-foreground">
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span>Custom ornaments with names and dates</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span>Personalized stockings and decorations</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span>Engraved photo frames for holiday memories</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span>Custom mugs and drinkware for cozy nights</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section id="gifts" className="py-16 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12 text-foreground text-center">
              Our Christmas Collection
            </h2>
            <ProductGrid />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Don't wait until the last minute
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Personalized gifts take time to create. Order now to ensure your gifts arrive before Christmas.
              </p>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8"
                asChild
              >
                <Link href="/gifts">Shop All Gifts</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
