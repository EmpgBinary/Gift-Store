"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useCart } from "@/lib/cart-context"
import { useToast } from "@/hooks/use-toast"
import { products } from "@/components/product-grid"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Heart, Star } from "lucide-react"
import { useState } from "react"
import { notFound } from "next/navigation"

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.href === `/gifts/${params.slug}`)
  const [customization, setCustomization] = useState("")
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()
  const { toast } = useToast()

  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      customization: customization || undefined,
      quantity,
    })

    toast({
      title: "Added to cart",
      description: `${quantity} ${product.name}${quantity > 1 ? "s" : ""} added to your cart.`,
    })

    setCustomization("")
    setQuantity(1)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Product Image */}
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted/30">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            </div>

            {/* Product Details */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">(127 reviews)</span>
              </div>

              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
              <p className="text-2xl font-bold text-accent mb-6">${product.price.toFixed(2)}</p>

              <p className="text-muted-foreground leading-relaxed mb-8">
                {product.description}. Each item is carefully crafted with attention to detail, making it a perfect gift
                for your loved ones or a special treat for yourself. Personalize it to make it truly unique and
                memorable.
              </p>

              <Card className="p-6 mb-6">
                <h3 className="font-semibold mb-4">Personalization</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="customization">Add your custom text (optional)</Label>
                    <Textarea
                      id="customization"
                      placeholder="Enter your personalization text..."
                      value={customization}
                      onChange={(e) => setCustomization(e.target.value)}
                      className="mt-2"
                      rows={3}
                    />
                    <p className="text-xs text-muted-foreground mt-1">Max 100 characters</p>
                  </div>

                  <div>
                    <Label htmlFor="quantity">Quantity</Label>
                    <Input
                      id="quantity"
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
                      className="mt-2 w-24"
                    />
                  </div>
                </div>
              </Card>

              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline" className="rounded-full bg-transparent">
                  <Heart className="w-5 h-5" />
                </Button>
              </div>

              <div className="mt-8 space-y-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Free shipping</span>
                  <span className="text-muted-foreground">on orders over $50</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Easy returns</span>
                  <span className="text-muted-foreground">within 30 days</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Secure checkout</span>
                  <span className="text-muted-foreground">SSL encrypted</span>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-20">
            <h2 className="font-serif text-3xl font-bold mb-8">You might also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.slice(0, 4).map((relatedProduct) => (
                <Link key={relatedProduct.id} href={relatedProduct.href}>
                  <Card className="group overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative aspect-square overflow-hidden bg-muted/30">
                      <Image
                        src={relatedProduct.image || "/placeholder.svg"}
                        alt={relatedProduct.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium mb-1">{relatedProduct.name}</h3>
                      <p className="text-lg font-semibold text-accent">${relatedProduct.price}</p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
