"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CookiesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-accent/10 to-background">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">Cookie Policy</h1>
            <p className="text-lg text-muted-foreground">Last updated: March 2025</p>
          </div>
        </section>

        <section className="py-16 px-4 md:px-6">
          <div className="container max-w-4xl mx-auto prose prose-invert max-w-none text-muted-foreground space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are stored on your device when you visit our website. They help us
                remember your preferences and improve your browsing experience. Cookies can be either "persistent"
                cookies or "session" cookies.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">2. Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Essential Cookies</h3>
                  <p>
                    These cookies are necessary for the website to function properly. They enable you to navigate the
                    site and use its features, such as accessing secure areas.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Performance Cookies</h3>
                  <p>
                    These cookies collect information about how you use our website, such as which pages you visit and
                    how long you spend on them. This helps us improve our website's performance.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Functional Cookies</h3>
                  <p>
                    These cookies remember your preferences and choices to provide a more personalized experience when
                    you visit our website.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Marketing Cookies</h3>
                  <p>
                    These cookies are used to track your activity across websites to display targeted advertisements
                    based on your interests.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">3. Third-Party Cookies</h2>
              <p>
                We may allow third-party service providers to place cookies on your device for analytics, advertising,
                and other purposes. These third parties have their own privacy policies governing their use of cookies.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">4. How to Control Cookies</h2>
              <p>
                You can control and/or delete cookies as you wish. You can delete all cookies that are already on your
                device and you can set most browsers to prevent them from being placed. However, if you do this, you may
                have to manually adjust some preferences every time you visit our website.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">5. Browser Settings</h2>
              <p>
                Most web browsers allow you to control cookies through their settings preferences. You can typically
                find these settings in the "Options" or "Preferences" menu of your browser. For more information about
                managing cookies, visit:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>
                  <a href="https://www.allaboutcookies.org" className="text-accent hover:text-accent/80">
                    www.allaboutcookies.org
                  </a>
                </li>
                <li>
                  <a href="https://www.youronlinechoices.eu" className="text-accent hover:text-accent/80">
                    www.youronlinechoices.eu
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">6. Changes to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other
                operational, legal, or regulatory reasons. We will notify you of any material changes by posting the
                updated policy on our website.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">7. Contact Us</h2>
              <p>
                If you have questions about our use of cookies, please contact us at privacy@giftly.com or call +1 (555)
                123-4567.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
