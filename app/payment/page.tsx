import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PaymentForm } from "@/components/payment-form"
import { OrderSummary } from "@/components/order-summary"

export default function PaymentPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <div className="container px-4 md:px-6 py-8 lg:py-12">
          {/* Breadcrumb */}
          <div className="mb-8 text-sm text-muted-foreground">
            <span>Cart</span>
            <span className="mx-2">/</span>
            <span>Checkout</span>
            <span className="mx-2">/</span>
            <span className="font-medium text-foreground">Payment</span>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-[1fr_400px] gap-8 lg:gap-12">
            {/* Payment Form */}
            <div>
              <PaymentForm />
            </div>

            {/* Order Summary Sidebar */}
            <div>
              <OrderSummary />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
