"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { saveProduct, type Product } from "@/lib/product-storage"
import { Upload } from "lucide-react"

export default function CreateProductPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "mugs",
    image: "",
    personalizable: true,
    occasion: "general", // Added occasion field
  })

  const occasions = [
    { value: "general", label: "General / All Gifts" },
    { value: "birthdays", label: "Birthdays" },
    { value: "christmas", label: "Christmas" },
    { value: "graduations", label: "Graduations" },
    { value: "anniversaries", label: "Anniversaries" },
    { value: "weddings", label: "Weddings" },
    { value: "baby-showers", label: "Baby Showers" },
    { value: "mothers-day", label: "Mother's Day" },
    { value: "fathers-day", label: "Father's Day" },
    { value: "valentines-day", label: "Valentine's Day" },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    })
  }

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    try {
      const formDataObj = new FormData()
      formDataObj.append("file", file)

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formDataObj,
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      console.log("[v0] Upload response:", data)

      if (data.image) {
        setFormData({ ...formData, image: data.image })
        alert("Image uploaded successfully!")
      } else if (data.error) {
        throw new Error(data.error)
      }
    } catch (error) {
      console.error("[v0] Upload failed:", error)
      alert("Failed to upload image: " + String(error))
    } finally {
      setUploading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    if (!formData.name || !formData.description || !formData.price) {
      alert("Please fill in all required fields")
      setLoading(false)
      return
    }

    const newProduct: Product = {
      id: Date.now().toString(),
      name: formData.name,
      description: formData.description,
      price: Number.parseFloat(formData.price),
      category: formData.category,
      image: formData.image,
      personalizable: formData.personalizable,
      occasion: formData.occasion, // Save occasion field
      createdAt: new Date().toISOString(),
    }

    saveProduct(newProduct)
    router.push("/admin/products")
  }

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <h2 className="font-serif text-3xl font-bold text-foreground mb-2">Create New Product</h2>
        <p className="text-muted-foreground">Add a new personalized gift to your catalog</p>
      </div>

      <Card className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Product Name *</label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g., Personalized Photo Mug"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Description *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe your product..."
              className="w-full border border-input rounded-lg px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              rows={4}
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Price ($) *</label>
              <Input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="29.99"
                step="0.01"
                min="0"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border border-input rounded-lg px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              >
                <option value="mugs">Mugs</option>
                <option value="jewelry">Jewelry</option>
                <option value="albums">Photo Albums</option>
                <option value="apparel">Apparel</option>
                <option value="accessories">Accessories</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Destination / Occasion</label>
            <select
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
              className="w-full border border-input rounded-lg px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {occasions.map((occ) => (
                <option key={occ.value} value={occ.value}>
                  {occ.label}
                </option>
              ))}
            </select>
            <p className="text-xs text-muted-foreground mt-2">
              Choose where this product will be displayed. "General / All Gifts" makes it appear on the main gifts page.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Product Image *</label>
            <div className="flex flex-col gap-3">
              <label className="flex items-center justify-center gap-2 border-2 border-dashed border-accent/50 rounded-lg p-6 cursor-pointer hover:bg-accent/5 transition">
                <Upload className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Click to upload image from computer</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  disabled={uploading}
                  className="hidden"
                />
              </label>
            </div>
            {formData.image && (
              <div className="mt-4 relative aspect-square max-w-xs rounded-lg overflow-hidden border">
                <img
                  src={formData.image || "/placeholder.svg"}
                  alt="Product preview"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="personalizable"
              checked={formData.personalizable}
              onChange={handleChange}
              id="personalizable"
              className="w-4 h-4 rounded border-input cursor-pointer"
            />
            <label htmlFor="personalizable" className="cursor-pointer">
              <span className="text-sm font-medium">This product is personalizable</span>
              <p className="text-xs text-muted-foreground">Allow customers to customize this item</p>
            </label>
          </div>

          <div className="flex gap-4 pt-6">
            <Button
              type="button"
              variant="outline"
              className="flex-1 bg-transparent"
              onClick={() => router.push("/admin/products")}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
              disabled={loading || !formData.image}
            >
              {loading ? "Creating..." : "Create Product"}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}
