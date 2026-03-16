"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getProductById, saveProduct, type Product } from "@/lib/product-storage"
import { Upload } from "lucide-react"

export default function EditProductPage() {
  const router = useRouter()
  const params = useParams()
  const productId = params.id as string

  const [loading, setLoading] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [formData, setFormData] = useState<Product | null>(null)

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

  useEffect(() => {
    const product = getProductById(productId)
    if (product) {
      setFormData(product)
    } else {
      router.push("/admin/products")
    }
  }, [productId, router])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (!formData) return
    const { name, value, type } = e.target
    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : type === "number"
            ? Number.parseFloat(value)
            : value,
    })
  }

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || !formData) return

    setUploading(true)
    try {
      const formDataObj = new FormData()
      formDataObj.append("file", file)

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formDataObj,
      })

      const data = await response.json()
      if (data.image) {
        setFormData({ ...formData, image: data.image })
      }
    } catch (error) {
      console.error("Upload failed:", error)
      alert("Failed to upload image")
    } finally {
      setUploading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData) return

    setLoading(true)

    if (!formData.name || !formData.description || !formData.price) {
      alert("Please fill in all required fields")
      setLoading(false)
      return
    }

    saveProduct(formData)
    router.push("/admin/products")
  }

  if (!formData) {
    return <div className="text-center py-12">Loading...</div>
  }

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <h2 className="font-serif text-3xl font-bold text-foreground mb-2">Edit Product</h2>
        <p className="text-muted-foreground">Update product details and information</p>
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
              value={formData.occasion || "general"}
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
            <label className="block text-sm font-medium mb-2">Product Image</label>
            <div className="flex flex-col gap-3">
              <label className="flex items-center justify-center gap-2 border-2 border-dashed border-accent/50 rounded-lg p-6 cursor-pointer hover:bg-accent/5 transition">
                <Upload className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Click to upload new image</span>
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
              disabled={loading}
            >
              {loading ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  )
}
