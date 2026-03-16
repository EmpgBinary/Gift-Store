import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tag } from "lucide-react"
import Image from "next/image"

export function OrderSummary() {
  const items = [
    {
      id: 1,
      name: "Personalized Photo Mug",
      quantity: 1,
      price: 25,
      image: "/custom-photo-mug-on-brown-background.jpg",
    },
    {
      id: 2,
      name: "Engraved Bracelet",
      quantity: 1,
      price: 45,
      image: "/engraved-bracelet-on-cord.jpg",
    },
  ]

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 5.0
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <div className="lg:sticky lg:top-8">
      <div className="bg-muted/30 rounded-lg border border-border p-6 space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-xl font-semibold mb-1">Order Summary</h2>
          <p className="text-sm text-muted-foreground">
            {items.length} {items.length === 1 ? "item" : "items"}
          </p>
        </div>

        {/* Items */}
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4">
              <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-sm mb-1 truncate">{item.name}</h3>
                <p className="text-xs text-muted-foreground mb-2">Qty: {item.quantity}</p>
                <p className="font-semibold">${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Promo Code */}
        <div className="pt-4 border-t border-border">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Input placeholder="Promo code" className="pl-9" />
              <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            </div>
            <Button variant="outline" size="default">
              Apply
            </Button>
          </div>
        </div>

        {/* Price Breakdown */}
        <div className="space-y-3 pt-4 border-t border-border">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Subtotal</span>
            <span className="font-medium">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Shipping</span>
            <span className="font-medium">${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Tax</span>
            <span className="font-medium">${tax.toFixed(2)}</span>
          </div>
        </div>

        {/* Total */}
        <div className="flex justify-between items-center pt-4 border-t-2 border-border">
          <span className="text-lg font-semibold">Total</span>
          <span className="text-2xl font-bold text-accent">${total.toFixed(2)}</span>
        </div>

        {/* Shipping Info */}
        <div className="pt-4 border-t border-border">
          <h3 className="text-sm font-semibold mb-2">Shipping to:</h3>
          <p className="text-sm text-muted-foreground">
            Sophia Carter
            <br />
            123 Maple Street
            <br />
            Anytown, CA 90210
          </p>
        </div>
      </div>

      {/* Help Text */}
      <p className="text-xs text-center text-muted-foreground mt-4">
        Need help?{" "}
        <a href="#" className="text-accent hover:underline">
          Contact support
        </a>
      </p>
    </div>
  )
}
