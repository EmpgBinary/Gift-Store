"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Heart, Users, Award, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-accent/10 to-background">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">About Giftly</h1>
            <p className="text-lg text-muted-foreground mb-8">
              We believe that the most meaningful gifts come from the heart. Giftly is dedicated to helping you
              celebrate life's special moments with personalized, thoughtfully crafted gifts.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-4 md:px-6">
          <div className="container max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Our Mission</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  At Giftly, our mission is to transform the way people give and receive gifts. We believe that
                  personalized gifts create lasting memories and strengthen the bonds between people.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Every item in our collection is carefully curated to ensure quality, creativity, and the ability to be
                  personalized in meaningful ways. We're committed to making gift-giving easier, more personal, and more
                  memorable.
                </p>
              </div>
              <div className="bg-accent/20 rounded-lg p-8 flex items-center justify-center h-64">
                <Heart className="w-24 h-24 text-accent" />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 md:px-6 bg-muted/30">
          <div className="container max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-12 text-center text-foreground">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-background p-8 rounded-lg border border-border/40">
                <Users className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold text-lg mb-3 text-foreground">Community First</h3>
                <p className="text-muted-foreground">
                  We believe in building a community of people who value meaningful connections and thoughtful
                  gift-giving.
                </p>
              </div>
              <div className="bg-background p-8 rounded-lg border border-border/40">
                <Award className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold text-lg mb-3 text-foreground">Quality Excellence</h3>
                <p className="text-muted-foreground">
                  Every product is held to the highest standards of quality, craftsmanship, and personalization.
                </p>
              </div>
              <div className="bg-background p-8 rounded-lg border border-border/40">
                <Heart className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold text-lg mb-3 text-foreground">Heartfelt Service</h3>
                <p className="text-muted-foreground">
                  We treat every customer with care and go the extra mile to ensure your gift is perfect.
                </p>
              </div>
              <div className="bg-background p-8 rounded-lg border border-border/40">
                <Globe className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold text-lg mb-3 text-foreground">Sustainability</h3>
                <p className="text-muted-foreground">
                  We're committed to sustainable practices and eco-friendly packaging for all our gifts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4 md:px-6">
          <div className="container max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-12 text-center text-foreground">Our Story</h2>
            <div className="prose prose-invert max-w-none text-muted-foreground space-y-4">
              <p>
                Giftly was founded with a simple idea: personalized gifts have the power to create unforgettable
                memories. What started as a passion project has grown into a thriving community of gift-givers who
                believe in the power of thoughtful, personalized presents.
              </p>
              <p>
                Today, we serve thousands of customers worldwide, helping them celebrate birthdays, anniversaries,
                weddings, and countless other special moments. Our team is dedicated to continuously improving our
                products and services to exceed your expectations.
              </p>
              <p>
                Whether you're celebrating a milestone or simply want to show someone how much they mean to you, Giftly
                is here to help you find the perfect personalized gift.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
