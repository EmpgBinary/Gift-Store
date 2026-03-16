"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"
import { getRandomImage } from "@/lib/image-service"

const OCCASION_SLUG = "weddings"

export default function WeddingsPage() {
  const [products, setProducts] = useState<any[]>([])
  const [heroImage, setHeroImage] = useState("")

  useEffect(() => {
    const storedProducts = localStorage.getItem(`occasion_${OCCASION_SLUG}`)
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts))
    }
    getRandomImage("wedding gifts celebration couple").then(setHeroImage)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative h-96 md:h-[500px] overflow-hidden rounded-lg mx-4 md:mx-6 mt-6">
          <img src={heroImage || "/placeholder.svg"} alt="Weddings" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Wedding Gifts</h1>
            <p className="text-xl md:text-2xl max-w-2xl">Perfect gifts for the happy couple</p>
          </div>
        </section>

        <section className="py-16 px-4 md:px-6">
          <div className="container">
            {products.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">No wedding gifts available yet</p>
                <Button asChild variant="outline">
                  <Link href="/gifts">Browse all gifts</Link>
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-muted/50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground mb-2">{product.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-accent">${product.price}</span>
                        <Button size="sm" className="bg-accent hover:bg-accent/90">
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
