"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { getRandomImage } from "@/lib/image-service"
import { getProductsByOccasion, type Product } from "@/lib/product-storage"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import { useToast } from "@/hooks/use-toast"

export default function ValentinesDayPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [heroImage, setHeroImage] = useState("")
  const { addToCart } = useCart()
  const { toast } = useToast()

  useEffect(() => {
    const loadContent = async () => {
      const occasionProducts = getProductsByOccasion("valentines-day")
      setProducts(occasionProducts)
      const image = await getRandomImage("valentines day gifts romantic love roses")
      setHeroImage(image)
    }
    loadContent()
  }, [])

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    })
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-96 md:h-[500px] overflow-hidden">
          <img
            src={heroImage || "/placeholder.svg?height=500&width=1200&query=valentines+day"}
            alt="Valentine's Day"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">Valentine's Day Gifts</h1>
              <p className="text-xl md:text-2xl">Express your love with the perfect gift</p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            {products.length > 0 ? (
              <>
                <div className="mb-12">
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Valentine's Day Collection
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Share your love with these romantic and personalized gifts
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="group bg-white border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="relative aspect-square overflow-hidden bg-muted">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4 flex flex-col">
                        <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{product.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{product.description}</p>
                        <div className="mt-auto flex items-center justify-between">
                          <span className="font-bold text-accent">${product.price.toFixed(2)}</span>
                          <Button
                            size="sm"
                            onClick={() => handleAddToCart(product)}
                            className="bg-accent hover:bg-accent/90 text-white gap-2"
                          >
                            <ShoppingCart className="w-4 h-4" />
                            Add
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg mb-6">No Valentine's Day gifts available yet</p>
                <Button asChild className="bg-accent hover:bg-accent/90 text-white">
                  <Link href="/gifts">Browse All Gifts</Link>
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
