"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-accent/10 to-background">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground">Last updated: March 2025</p>
          </div>
        </section>

        <section className="py-16 px-4 md:px-6">
          <div className="container max-w-4xl mx-auto prose prose-invert max-w-none text-muted-foreground space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p>
                Giftly ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your information when you visit our website and
                use our services.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
              <p>We collect information in the following ways:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>
                  <strong>Personal Information:</strong> Name, email address, phone number, shipping address, billing
                  address, and payment information
                </li>
                <li>
                  <strong>Account Information:</strong> Username, password, and account preferences
                </li>
                <li>
                  <strong>Usage Data:</strong> Pages visited, time spent on pages, links clicked, and referral sources
                </li>
                <li>
                  <strong>Device Information:</strong> IP address, browser type, operating system, and device
                  identifiers
                </li>
                <li>
                  <strong>Cookies and Tracking:</strong> We use cookies and similar technologies to track your activity
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Process and fulfill your orders</li>
                <li>Send you order confirmations and updates</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send promotional emails and marketing communications</li>
                <li>Improve our website and services</li>
                <li>Prevent fraud and ensure security</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">4. Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share information
                with:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Service providers who assist us in operating our website and conducting our business</li>
                <li>Payment processors to process your transactions</li>
                <li>Shipping carriers to deliver your orders</li>
                <li>Law enforcement when required by law</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                over the Internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Request a copy of your data</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">7. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at privacy@giftly.com or call +1
                (555) 123-4567.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
