"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category?: string
}

export function SearchPageContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const [results, setResults] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const searchProducts = () => {
      const allProducts: Product[] = []

      // Get products from all occasions
      const occasions = ["birthdays", "christmas", "graduations", "anniversaries", "weddings", "baby-showers"]
      occasions.forEach((occasion) => {
        const storedProducts = localStorage.getItem(`occasion_${occasion}`)
        if (storedProducts) {
          const products = JSON.parse(storedProducts)
          products.forEach((p: any) => {
            allProducts.push({ ...p, category: occasion })
          })
        }
      })

      // Also search from main gifts
      const mainProducts = localStorage.getItem("giftly_products")
      if (mainProducts) {
        const products = JSON.parse(mainProducts)
        products.forEach((p: any) => {
          allProducts.push({ ...p, category: "gifts" })
        })
      }

      // Filter by search query
      const filtered = allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase()),
      )

      setResults(filtered)
      setLoading(false)
    }

    if (query) {
      searchProducts()
    } else {
      setLoading(false)
    }
  }, [query])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-12 px-4 md:px-6 bg-accent/5">
          <div className="container">
            <h1 className="font-serif text-4xl font-bold mb-2">Search Results</h1>
            {query && (
              <p className="text-muted-foreground">
                Found {results.length} results for "{query}"
              </p>
            )}
          </div>
        </section>

        <section className="py-12 px-4 md:px-6">
          <div className="container">
            {loading ? (
              <p className="text-center text-muted-foreground">Searching...</p>
            ) : results.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-4">No products found matching your search</p>
                <Button asChild variant="outline">
                  <Link href="/gifts">Browse all gifts</Link>
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {results.map((product) => (
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
                      <span className="text-xs font-semibold text-accent uppercase">{product.category}</span>
                      <h3 className="font-semibold text-foreground mb-2 mt-1">{product.name}</h3>
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
