"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-accent/10 to-background">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">Terms of Service</h1>
            <p className="text-lg text-muted-foreground">Last updated: March 2025</p>
          </div>
        </section>

        <section className="py-16 px-4 md:px-6">
          <div className="container max-w-4xl mx-auto prose prose-invert max-w-none text-muted-foreground space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this
                agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on
                Giftly's website for personal, non-commercial transitory viewing only. This is the grant of a license,
                not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">3. Disclaimer</h2>
              <p>
                The materials on Giftly's website are provided on an 'as is' basis. Giftly makes no warranties,
                expressed or implied, and hereby disclaims and negates all other warranties including, without
                limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or
                non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">4. Limitations</h2>
              <p>
                In no event shall Giftly or its suppliers be liable for any damages (including, without limitation,
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability
                to use the materials on Giftly's website.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">5. Accuracy of Materials</h2>
              <p>
                The materials appearing on Giftly's website could include technical, typographical, or photographic
                errors. Giftly does not warrant that any of the materials on its website are accurate, complete, or
                current. Giftly may make changes to the materials contained on its website at any time without notice.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">6. Links</h2>
              <p>
                Giftly has not reviewed all of the sites linked to its website and is not responsible for the contents
                of any such linked site. The inclusion of any link does not imply endorsement by Giftly of the site. Use
                of any such linked website is at the user's own risk.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">7. Modifications</h2>
              <p>
                Giftly may revise these terms of service for its website at any time without notice. By using this
                website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">8. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of the United
                States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">9. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at legal@giftly.com or call +1
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
