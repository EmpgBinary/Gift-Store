"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getProducts, deleteProduct, type Product } from "@/lib/product-storage"
import Link from "next/link"
import { Edit2, Trash2, Eye } from "lucide-react"
import Image from "next/image"

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)

  useEffect(() => {
    const loadedProducts = getProducts()
    setProducts(loadedProducts)
    setLoading(false)
  }, [])

  const handleDelete = (id: string) => {
    deleteProduct(id)
    setProducts(products.filter((p) => p.id !== id))
    setDeleteConfirm(null)
  }

  if (loading) {
    return <div className="text-center py-12">Loading products...</div>
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-serif text-3xl font-bold text-foreground mb-2">Manage Products</h2>
          <p className="text-muted-foreground">Total products: {products.length}</p>
        </div>
        <Link href="/admin/products/create">
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full">Add New Product</Button>
        </Link>
      </div>

      {products.length === 0 ? (
        <Card className="p-12 text-center">
          <p className="text-muted-foreground mb-6">No products yet. Create your first product to get started.</p>
          <Link href="/admin/products/create">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full">
              Create First Product
            </Button>
          </Link>
        </Card>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4 px-4 font-semibold text-foreground">Image</th>
                <th className="text-left py-4 px-4 font-semibold text-foreground">Name</th>
                <th className="text-left py-4 px-4 font-semibold text-foreground">Category</th>
                <th className="text-left py-4 px-4 font-semibold text-foreground">Price</th>
                <th className="text-left py-4 px-4 font-semibold text-foreground">Personalizable</th>
                <th className="text-right py-4 px-4 font-semibold text-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b hover:bg-muted/30 transition">
                  <td className="py-4 px-4">
                    {product.image && (
                      <div className="relative w-10 h-10 rounded">
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                    )}
                  </td>
                  <td className="py-4 px-4">
                    <p className="font-medium text-foreground">{product.name}</p>
                    <p className="text-xs text-muted-foreground">{product.description.substring(0, 50)}...</p>
                  </td>
                  <td className="py-4 px-4 text-foreground">{product.category}</td>
                  <td className="py-4 px-4 font-semibold text-foreground">${product.price}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${product.personalizable ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`}
                    >
                      {product.personalizable ? "Yes" : "No"}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={`/admin/products/${product.id}/edit`}>
                        <Button size="sm" variant="outline" className="rounded-lg bg-transparent">
                          <Edit2 className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Link href={`/gifts/${product.id}`}>
                        <Button size="sm" variant="outline" className="rounded-lg bg-transparent">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Button
                        size="sm"
                        variant="outline"
                        className="rounded-lg bg-transparent border-destructive text-destructive hover:bg-destructive/10"
                        onClick={() => setDeleteConfirm(product.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="p-6 max-w-sm">
            <h3 className="font-semibold text-lg text-foreground mb-4">Delete Product?</h3>
            <p className="text-muted-foreground mb-6">
              This action cannot be undone. Are you sure you want to delete this product?
            </p>
            <div className="flex gap-4">
              <Button variant="outline" className="flex-1 bg-transparent" onClick={() => setDeleteConfirm(null)}>
                Cancel
              </Button>
              <Button
                className="flex-1 bg-destructive hover:bg-destructive/90 text-white"
                onClick={() => handleDelete(deleteConfirm)}
              >
                Delete
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
