"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CreditCard, Lock, Shield } from "lucide-react"
import { useRouter } from "next/navigation"
import { useCart } from "@/lib/cart-context"

export function PaymentForm() {
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [cardNumber, setCardNumber] = useState("")
  const [expiryDate, setExpiryDate] = useState("")
  const [cvv, setCvv] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const router = useRouter()
  const { totalPrice, clearCart } = useCart()

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ""
    const parts = []

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }

    if (parts.length) {
      return parts.join(" ")
    } else {
      return value
    }
  }

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "")
    if (v.length >= 2) {
      return v.slice(0, 2) + "/" + v.slice(2, 4)
    }
    return v
  }

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value)
    setCardNumber(formatted)
  }

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatExpiryDate(e.target.value)
    setExpiryDate(formatted)
  }

  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value.replace(/[^0-9]/gi, "").slice(0, 4)
    setCvv(v)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    clearCart()
    router.push("/order-confirmation")
  }

  const handlePayPalPayment = async () => {
    setIsProcessing(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))
    clearCart()
    router.push("/order-confirmation")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-2">Complete your purchase</h1>
        <p className="text-muted-foreground">Enter your payment details to finalize your order</p>
      </div>

      {/* Payment Method Selection */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground font-semibold text-sm">
            1
          </span>
          <h2 className="text-xl font-semibold">Select payment method</h2>
        </div>

        <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
          <div className="flex items-center space-x-3 border-2 border-border rounded-lg p-4 hover:border-accent transition-colors cursor-pointer">
            <RadioGroupItem value="card" id="card" />
            <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer flex-1">
              <CreditCard className="w-5 h-5" />
              <span className="font-medium">Credit or Debit Card</span>
            </Label>
            <div className="flex gap-2">
              <div className="w-10 h-6 bg-muted rounded flex items-center justify-center text-xs font-semibold">
                VISA
              </div>
              <div className="w-10 h-6 bg-muted rounded flex items-center justify-center text-xs font-semibold">MC</div>
              <div className="w-10 h-6 bg-muted rounded flex items-center justify-center text-xs font-semibold">
                AMEX
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3 border-2 border-border rounded-lg p-4 hover:border-accent transition-colors cursor-pointer">
            <RadioGroupItem value="paypal" id="paypal" />
            <Label htmlFor="paypal" className="cursor-pointer flex-1 flex items-center gap-2">
              <svg className="w-20 h-5" viewBox="0 0 101 32" fill="none">
                <path
                  d="M12.237 2.8H4.421a.9.9 0 00-.889.76L.029 26.96a.54.54 0 00.533.62h3.88a.9.9 0 00.889-.76l.967-6.14a.9.9 0 01.889-.76h2.047c4.256 0 6.716-2.06 7.357-6.14.288-1.78.011-3.18-.823-4.16-.916-1.08-2.544-1.66-4.702-1.66zm.742 6.06c-.355 2.32-2.128 2.32-3.843 2.32h-.976l.685-4.34a.54.54 0 01.533-.46h.448c1.168 0 2.271 0 2.839.66.34.4.437 1 .314 1.82z"
                  fill="#139AD6"
                />
                <path
                  d="M35.632 8.8h-3.893a.54.54 0 00-.533.46l-.137.86-.217-.32c-.673-.98-2.173-1.3-3.67-1.3-3.433 0-6.363 2.6-6.933 6.24-.297 1.82.126 3.56 1.158 4.78 1.003 1.12 2.435 1.58 4.14 1.58 2.928 0 4.552-1.88 4.552-1.88l-.139.86a.54.54 0 00.533.62h3.505a.9.9 0 00.889-.76l1.676-10.62a.54.54 0 00-.533-.62zm-5.429 6.04c-.297 1.76-1.699 2.94-3.49 2.94-.896 0-1.614-.28-2.074-.84-.458-.56-.631-1.36-.485-2.24.28-1.74 1.705-2.96 3.467-2.96.874 0 1.586.28 2.057.84.473.56.659 1.36.525 2.26z"
                  fill="#263B80"
                />
                <path
                  d="M55.003 8.8h-3.91a.9.9 0 00-.745.4l-4.3 6.32-1.822-6.08a.9.9 0 00-.862-.64h-3.844a.54.54 0 00-.51.72l3.434 10.08-3.23 4.56a.54.54 0 00.442.86h3.907a.9.9 0 00.742-.38l10.373-14.98a.54.54 0 00-.442-.86z"
                  fill="#263B80"
                />
                <path
                  d="M67.008 2.8h-7.816a.9.9 0 00-.889.76l-3.503 22.4a.54.54 0 00.533.62h4.05a.63.63 0 00.622-.54l.995-6.3a.9.9 0 01.889-.76h2.047c4.256 0 6.716-2.06 7.357-6.14.288-1.78.011-3.18-.823-4.16-.916-1.08-2.544-1.66-4.702-1.66zm.742 6.06c-.355 2.32-2.128 2.32-3.843 2.32h-.976l.685-4.34a.54.54 0 01.533-.46h.448c1.168 0 2.271 0 2.839.66.34.4.437 1 .314 1.82z"
                  fill="#139AD6"
                />
                <path
                  d="M90.403 8.8h-3.893a.54.54 0 00-.533.46l-.137.86-.217-.32c-.673-.98-2.173-1.3-3.67-1.3-3.433 0-6.363 2.6-6.933 6.24-.297 1.82.126 3.56 1.158 4.78 1.003 1.12 2.435 1.58 4.14 1.58 2.928 0 4.552-1.88 4.552-1.88l-.139.86a.54.54 0 00.533.62h3.505a.9.9 0 00.889-.76l1.676-10.62a.54.54 0 00-.533-.62zm-5.429 6.04c-.297 1.76-1.699 2.94-3.49 2.94-.896 0-1.614-.28-2.074-.84-.458-.56-.631-1.36-.485-2.24.28-1.74 1.705-2.96 3.467-2.96.874 0 1.586.28 2.057.84.473.56.659 1.36.525 2.26z"
                  fill="#263B80"
                />
                <path
                  d="M95.088 3.08l-3.548 22.88a.54.54 0 00.533.62h3.38a.9.9 0 00.889-.76l3.503-22.4a.54.54 0 00-.533-.62h-3.691a.54.54 0 00-.533.46z"
                  fill="#263B80"
                />
              </svg>
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Card Details */}
      {paymentMethod === "card" && (
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground font-semibold text-sm">
              2
            </span>
            <h2 className="text-xl font-semibold">Enter card details</h2>
          </div>

          <div className="space-y-4 bg-muted/30 p-6 rounded-lg border border-border">
            {/* Card Number */}
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <div className="relative">
                <Input
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  maxLength={19}
                  className="pl-10"
                  required
                />
                <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              </div>
            </div>

            {/* Expiry and CVV */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input
                  id="expiry"
                  placeholder="MM/YY"
                  value={expiryDate}
                  onChange={handleExpiryChange}
                  maxLength={5}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv">CVV</Label>
                <Input
                  id="cvv"
                  placeholder="123"
                  value={cvv}
                  onChange={handleCvvChange}
                  maxLength={4}
                  type="password"
                  required
                />
              </div>
            </div>

            {/* Cardholder Name */}
            <div className="space-y-2">
              <Label htmlFor="cardName">Cardholder Name</Label>
              <Input id="cardName" placeholder="Name on card" required />
            </div>
          </div>
        </div>
      )}

      {/* PayPal Section */}
      {paymentMethod === "paypal" && (
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground font-semibold text-sm">
              2
            </span>
            <h2 className="text-xl font-semibold">PayPal Checkout</h2>
          </div>

          <div className="bg-muted/30 p-8 rounded-lg border border-border text-center space-y-4">
            <svg className="w-32 h-8 mx-auto" viewBox="0 0 101 32" fill="none">
              <path
                d="M12.237 2.8H4.421a.9.9 0 00-.889.76L.029 26.96a.54.54 0 00.533.62h3.88a.9.9 0 00.889-.76l.967-6.14a.9.9 0 01.889-.76h2.047c4.256 0 6.716-2.06 7.357-6.14.288-1.78.011-3.18-.823-4.16-.916-1.08-2.544-1.66-4.702-1.66zm.742 6.06c-.355 2.32-2.128 2.32-3.843 2.32h-.976l.685-4.34a.54.54 0 01.533-.46h.448c1.168 0 2.271 0 2.839.66.34.4.437 1 .314 1.82z"
                fill="#139AD6"
              />
              <path
                d="M35.632 8.8h-3.893a.54.54 0 00-.533.46l-.137.86-.217-.32c-.673-.98-2.173-1.3-3.67-1.3-3.433 0-6.363 2.6-6.933 6.24-.297 1.82.126 3.56 1.158 4.78 1.003 1.12 2.435 1.58 4.14 1.58 2.928 0 4.552-1.88 4.552-1.88l-.139.86a.54.54 0 00.533.62h3.505a.9.9 0 00.889-.76l1.676-10.62a.54.54 0 00-.533-.62zm-5.429 6.04c-.297 1.76-1.699 2.94-3.49 2.94-.896 0-1.614-.28-2.074-.84-.458-.56-.631-1.36-.485-2.24.28-1.74 1.705-2.96 3.467-2.96.874 0 1.586.28 2.057.84.473.56.659 1.36.525 2.26z"
                fill="#263B80"
              />
              <path
                d="M55.003 8.8h-3.91a.9.9 0 00-.745.4l-4.3 6.32-1.822-6.08a.9.9 0 00-.862-.64h-3.844a.54.54 0 00-.51.72l3.434 10.08-3.23 4.56a.54.54 0 00.442.86h3.907a.9.9 0 00.742-.38l10.373-14.98a.54.54 0 00-.442-.86z"
                fill="#263B80"
              />
              <path
                d="M67.008 2.8h-7.816a.9.9 0 00-.889.76l-3.503 22.4a.54.54 0 00.533.62h4.05a.63.63 0 00.622-.54l.995-6.3a.9.9 0 01.889-.76h2.047c4.256 0 6.716-2.06 7.357-6.14.288-1.78.011-3.18-.823-4.16-.916-1.08-2.544-1.66-4.702-1.66zm.742 6.06c-.355 2.32-2.128 2.32-3.843 2.32h-.976l.685-4.34a.54.54 0 01.533-.46h.448c1.168 0 2.271 0 2.839.66.34.4.437 1 .314 1.82z"
                fill="#139AD6"
              />
              <path
                d="M90.403 8.8h-3.893a.54.54 0 00-.533.46l-.137.86-.217-.32c-.673-.98-2.173-1.3-3.67-1.3-3.433 0-6.363 2.6-6.933 6.24-.297 1.82.126 3.56 1.158 4.78 1.003 1.12 2.435 1.58 4.14 1.58 2.928 0 4.552-1.88 4.552-1.88l-.139.86a.54.54 0 00.533.62h3.505a.9.9 0 00.889-.76l1.676-10.62a.54.54 0 00-.533-.62zm-5.429 6.04c-.297 1.76-1.699 2.94-3.49 2.94-.896 0-1.614-.28-2.074-.84-.458-.56-.631-1.36-.485-2.24.28-1.74 1.705-2.96 3.467-2.96.874 0 1.586.28 2.057.84.473.56.659 1.36.525 2.26z"
                fill="#263B80"
              />
              <path
                d="M95.088 3.08l-3.548 22.88a.54.54 0 00.533.62h3.38a.9.9 0 00.889-.76l3.503-22.4a.54.54 0 00-.533-.62h-3.691a.54.54 0 00-.533.46z"
                fill="#263B80"
              />
            </svg>
            <p className="text-muted-foreground">
              You will be redirected to PayPal to complete your purchase securely.
            </p>
            <p className="text-sm text-muted-foreground">
              Total amount:{" "}
              <span className="font-semibold text-foreground">${(totalPrice + 5 + totalPrice * 0.08).toFixed(2)}</span>
            </p>
          </div>
        </div>
      )}

      {/* Billing Address */}
      {paymentMethod === "card" && (
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground font-semibold text-sm">
              3
            </span>
            <h2 className="text-xl font-semibold">Billing address</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3 border-2 border-accent rounded-lg p-4 bg-accent/5">
              <input type="radio" id="same-address" name="billing" defaultChecked className="w-4 h-4" />
              <Label htmlFor="same-address" className="cursor-pointer flex-1">
                Same as shipping address
              </Label>
            </div>

            <div className="flex items-center space-x-3 border-2 border-border rounded-lg p-4 hover:border-accent transition-colors cursor-pointer">
              <input type="radio" id="different-address" name="billing" className="w-4 h-4" />
              <Label htmlFor="different-address" className="cursor-pointer flex-1">
                Use a different billing address
              </Label>
            </div>
          </div>
        </div>
      )}

      {/* Security Notice */}
      <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg border border-border">
        <Shield className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
        <div className="space-y-1">
          <p className="text-sm font-medium">Secure Payment</p>
          <p className="text-xs text-muted-foreground">
            Your payment information is encrypted and secure. We never store your card details.
          </p>
        </div>
      </div>

      {/* Submit Button */}
      {paymentMethod === "card" ? (
        <Button type="submit" size="lg" className="w-full text-base font-semibold" disabled={isProcessing}>
          <Lock className="w-4 h-4 mr-2" />
          {isProcessing ? "Processing Payment..." : "Complete Purchase"}
        </Button>
      ) : (
        <Button
          type="button"
          size="lg"
          className="w-full text-base font-semibold bg-[#0070BA] hover:bg-[#005EA6]"
          onClick={handlePayPalPayment}
          disabled={isProcessing}
        >
          {isProcessing ? "Redirecting to PayPal..." : "Continue with PayPal"}
        </Button>
      )}

      {/* Trust Badges */}
      <div className="flex items-center justify-center gap-6 pt-4 border-t border-border">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Shield className="w-4 h-4" />
          <span>SSL Encrypted</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Lock className="w-4 h-4" />
          <span>PCI Compliant</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Shield className="w-4 h-4" />
          <span>Money Back Guarantee</span>
        </div>
      </div>
    </form>
  )
}
