import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"

export default function GiftsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-muted/30 py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-[#E8A5B8]">Personalized Gifts</h1>
            <p className="text-lg text-muted-foreground max-w-2xl text-balance">
              Find the perfect gift for any occasion. Browse our curated selection of personalized items.
            </p>
          </div>
        </section>

        {/* Filters and Products */}
        <section className="py-8">
          <div className="container px-4 md:px-6">
            <ProductFilters />
            <ProductGrid />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
