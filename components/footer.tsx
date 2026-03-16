import Link from "next/link"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30 mt-20">
      <div className="container px-4 md:px-6 py-16">
        {/* Newsletter Section */}
        <div className="mb-16 pb-16 border-b border-border/40">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Be the first to hear about special offers and discounts
            </h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter and get exclusive deals on personalized gifts.
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6 font-medium">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/shipping" className="hover:text-foreground transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-foreground transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="hover:text-foreground transition-colors">
                  Track Order
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-foreground transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* FAQ */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">FAQ</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/faq/personalization" className="hover:text-foreground transition-colors">
                  How to Personalize
                </Link>
              </li>
              <li>
                <Link href="/faq/delivery" className="hover:text-foreground transition-colors">
                  Delivery Times
                </Link>
              </li>
              <li>
                <Link href="/faq/quality" className="hover:text-foreground transition-colors">
                  Quality Guarantee
                </Link>
              </li>
              <li>
                <Link href="/faq/bulk-orders" className="hover:text-foreground transition-colors">
                  Bulk Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-foreground transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Giftly. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">We accept:</span>
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" className="text-blue-600">
              <path d="M9.012 0c-1.264.02-2.341.937-2.341 2.206v19.588c0 1.269 1.077 2.206 2.341 2.206h13.976c1.264 0 2.341-.937 2.341-2.206V2.206C25.329.937 24.252 0 22.988 0H9.012zm3.06 4.5h4.512c.84 0 1.512.672 1.512 1.5s-.672 1.5-1.512 1.5h-4.512c-.84 0-1.512-.672-1.512-1.5s.672-1.5 1.512-1.5zm0 4.5h4.512c.84 0 1.512.672 1.512 1.5s-.672 1.5-1.512 1.5h-4.512c-.84 0-1.512-.672-1.512-1.5s.672-1.5 1.512-1.5zm0 4.5h4.512c.84 0 1.512.672 1.512 1.5s-.672 1.5-1.512 1.5h-4.512c-.84 0-1.512-.672-1.512-1.5s.672-1.5 1.512-1.5z" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  )
}
