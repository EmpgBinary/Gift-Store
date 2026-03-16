"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/lib/cart-context"
import { ShoppingCart } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { getProducts, type Product } from "@/lib/product-storage"

export const defaultProducts = [
  {
    id: "1",
    name: "Custom Photo Mug",
    price: 25,
    image: "/custom-photo-mug-on-brown-background.jpg",
    href: "/gifts/custom-photo-mug",
    description: "Personalize with your favorite photo",
  },
  {
    id: "2",
    name: "Engraved Bracelet",
    price: 45,
    image: "/engraved-bracelet-on-white-background.jpg",
    href: "/gifts/engraved-bracelet",
    description: "Add a special message or date",
  },
  {
    id: "3",
    name: "Personalized Phone Case",
    price: 20,
    image: "/personalized-phone-case-on-gray-background.jpg",
    href: "/gifts/personalized-phone-case",
    description: "Custom design for your device",
  },
  {
    id: "4",
    name: "Customized T-Shirt",
    price: 30,
    image: "/customized-t-shirt-on-beige-background.jpg",
    href: "/gifts/customized-t-shirt",
    description: "Create your unique design",
  },
  {
    id: "5",
    name: "Photo Album",
    price: 50,
    image: "/photo-album-on-cream-background.jpg",
    href: "/gifts/photo-album",
    description: "Preserve your precious memories",
  },
  {
    id: "6",
    name: "Personalized Keychain",
    price: 15,
    image: "/personalized-keychain-on-white-background.jpg",
    href: "/gifts/personalized-keychain",
    description: "Carry a reminder everywhere",
  },
  {
    id: "7",
    name: "Customized Water Bottle",
    price: 22,
    image: "/customized-water-bottle-on-peach-background.jpg",
    href: "/gifts/customized-water-bottle",
    description: "Stay hydrated in style",
  },
  {
    id: "8",
    name: "Engraved Pen",
    price: 18,
    image: "/engraved-pen-on-white-background.jpg",
    href: "/gifts/engraved-pen",
    description: "A professional touch",
  },
]

export const products = defaultProducts

export function ProductGrid() {
  const { addItem } = useCart()
  const { toast } = useToast()
  const [products, setProducts] = useState<(Product & { href: string })[]>([])

  useEffect(() => {
    const adminProducts = getProducts()
    if (adminProducts.length > 0) {
      // Map admin products to include href for links
      const productsWithHref = adminProducts.map((p) => ({
        ...p,
        href: `/gifts/${p.id}`,
      }))
      setProducts(productsWithHref)
    } else {
      // Fallback to default products if none exist in admin
      setProducts(defaultProducts)
    }
  }, [])

  const handleAddToCart = (product: (typeof products)[0], e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    })

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card
          key={product.id}
          className="group overflow-hidden border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg flex flex-col"
        >
          <Link href={product.href} className="flex-1">
            <div className="relative aspect-square overflow-hidden bg-muted/30">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium text-foreground mb-1 group-hover:text-accent transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-2">{product.description}</p>
              <p className="text-lg font-semibold text-foreground">${product.price}</p>
            </div>
          </Link>
          <div className="p-4 pt-0">
            <Button
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full"
              onClick={(e) => handleAddToCart(product, e)}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </Card>
      ))}
    </div>
  )
}
