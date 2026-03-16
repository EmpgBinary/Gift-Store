import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckoutForm } from "@/components/checkout-form"

export default function CheckoutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-muted/20">
        <div className="container px-4 md:px-6 py-8">
          {/* Breadcrumb */}
          <div className="mb-6 text-sm text-muted-foreground">
            <span>Cart</span>
            <span className="mx-2">/</span>
            <span className="font-medium text-accent">Checkout</span>
          </div>

          {/* Checkout Form */}
          <CheckoutForm />
        </div>
      </main>

      <Footer />
    </div>
  )
}
