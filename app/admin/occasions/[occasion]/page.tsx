"use client"

import type React from "react"

import { useParams, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"

interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
}

export default function AdminOccasionDetailPage() {
  const params = useParams()
  const router = useRouter()
  const occasion = params.occasion as string
  const [products, setProducts] = useState<Product[]>([])
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  })
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string>("")

  useEffect(() => {
    const storedProducts = localStorage.getItem(`occasion_${occasion}`)
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts))
    }
  }, [occasion])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newProduct: Product = {
      id: Date.now().toString(),
      name: formData.name,
      description: formData.description,
      price: Number.parseFloat(formData.price),
      image: imagePreview || formData.image,
    }
    const updatedProducts = [...products, newProduct]
    setProducts(updatedProducts)
    localStorage.setItem(`occasion_${occasion}`, JSON.stringify(updatedProducts))
    setFormData({ name: "", description: "", price: "", image: "" })
    setImageFile(null)
    setImagePreview("")
    alert("Product added successfully!")
  }

  const handleDelete = (id: string) => {
    const updatedProducts = products.filter((p) => p.id !== id)
    setProducts(updatedProducts)
    localStorage.setItem(`occasion_${occasion}`, JSON.stringify(updatedProducts))
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto px-4 md:px-6 py-12">
        <h1 className="font-serif text-4xl font-bold mb-2 text-foreground capitalize">{occasion} Products</h1>
        <p className="text-muted-foreground mb-8">Manage products for this occasion</p>

        {/* Add Product Form */}
        <div className="bg-muted/30 p-8 rounded-lg border border-border/40 mb-12">
          <h2 className="font-serif text-2xl font-bold mb-6 text-foreground">Add New Product</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Product Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground"
                placeholder="E.g., Personalized Photo Mug"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground"
                placeholder="Describe the product"
                rows={4}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Price</label>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground"
                  placeholder="29.99"
                  step="0.01"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Upload Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground"
                />
              </div>
            </div>
            {imagePreview && (
              <div className="mt-4">
                <p className="text-sm font-medium text-foreground mb-2">Preview:</p>
                <img src={imagePreview || "/placeholder.svg"} alt="Preview" className="h-48 rounded-lg object-cover" />
              </div>
            )}
            <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white">
              Add Product
            </Button>
          </form>
        </div>

        {/* Products List */}
        <div>
          <h2 className="font-serif text-2xl font-bold mb-6 text-foreground">Products ({products.length})</h2>
          {products.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">No products added yet</p>
          ) : (
            <div className="space-y-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-muted/30 p-4 rounded-lg border border-border/40 flex items-start gap-4"
                >
                  {product.image && (
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-24 h-24 rounded object-cover"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{product.description}</p>
                    <p className="font-bold text-accent">${product.price.toFixed(2)}</p>
                  </div>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(product.id)}
                    className="bg-red-500 hover:bg-red-600"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
