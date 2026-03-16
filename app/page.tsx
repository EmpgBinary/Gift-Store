"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Heart, Gift, Sparkles, Users } from "lucide-react"
import { useEffect, useState } from "react"
import { getRandomImage } from "@/lib/image-service"

export default function HomePage() {
  const [coupleImage, setCoupleImage] = useState("")
  const [romanticImage, setRomanticImage] = useState("")
  const [specialImage, setSpecialImage] = useState("")

  useEffect(() => {
    const loadImages = async () => {
      const couple = await getRandomImage("couple romantic gift celebration")
      const romantic = await getRandomImage("romantic dinner date gift")
      const special = await getRandomImage("personalized gift special moment")

      setCoupleImage(couple)
      setRomanticImage(romantic)
      setSpecialImage(special)
    }
    loadImages()
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-balance leading-[1.1] mb-8 text-foreground">
                Celebrate love, honor connections, cherish moments
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 text-balance leading-relaxed max-w-3xl mx-auto">
                Every relationship deserves to be celebrated. Every milestone honored. Every moment cherished. Giftly
                helps you express what words cannot—through thoughtfully personalized gifts that speak from the heart.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 text-base font-medium"
                  asChild
                >
                  <Link href="/gifts">Explore Gifts Items</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 text-base font-medium border-2 bg-transparent"
                  asChild
                >
                  <Link href="/occasions">Shop by Occasion</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Emotional Connection Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted">
                {coupleImage && (
                  <Image
                    src={coupleImage || "/placeholder.svg"}
                    alt="Couple celebrating with personalized gift"
                    fill
                    className="object-cover"
                    priority
                  />
                )}
              </div>
              <div>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
                  For the love that defines you
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  Whether it's the butterflies of a first date, the comfort of years together, or the joy of celebrating
                  an anniversary—your love story is unique. Our personalized gifts help you express the depth of your
                  feelings in ways that resonate long after the moment has passed.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                  From engraved jewelry that carries your special date to custom photo albums that preserve your journey
                  together, each gift becomes a tangible reminder of the bond you share.
                </p>
                <Button size="lg" variant="outline" className="rounded-full border-2 bg-transparent" asChild>
                  <Link href="/recipients?filter=couples">Shop for Couples</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Romantic Dates Section */}
        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div className="order-2 md:order-1">
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
                  Make every date unforgettable
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  The perfect date isn't just about the destination—it's about the thoughtfulness behind it. Surprise
                  your partner with a personalized gift that shows you've been paying attention to the little things
                  they love.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  A custom star map of the night you met. An engraved compass for the adventurer in your life. A
                  personalized recipe book filled with your favorite meals together. These aren't just gifts—they're
                  love letters in physical form.
                </p>
                <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                  Because the best dates are the ones where your partner feels truly seen, understood, and cherished.
                </p>
                <Button size="lg" variant="outline" className="rounded-full border-2 bg-transparent" asChild>
                  <Link href="/gifts?occasion=romantic">Romantic Gift Ideas</Link>
                </Button>
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden order-1 md:order-2 bg-muted">
                {romanticImage && (
                  <Image
                    src={romanticImage || "/placeholder.svg"}
                    alt="Romantic date setting"
                    fill
                    className="object-cover"
                    priority
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Make People Feel Special Section */}
        <section className="py-20 md:py-32 bg-[#FF1493]">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
                {specialImage && (
                  <Image
                    src={specialImage || "/placeholder.svg"}
                    alt="Make people feel special with personalized gifts"
                    fill
                    className="object-cover"
                    priority
                  />
                )}
              </div>
              <div>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
                  Make people feel special
                </h2>
                <p className="text-white leading-relaxed text-lg mb-6">
                  Life's most precious moments aren't about the price tag—they're about the thought behind the gift.
                  When you choose to personalize, you're saying "You matter to me." You're creating a moment that will
                  be remembered for years to come.
                </p>
                <p className="text-white leading-relaxed text-lg mb-8">
                  Whether it's a birthday, anniversary, or just because, our personalized gifts transform ordinary
                  moments into extraordinary memories. Each item is crafted with care, customized with love, and
                  delivered with the intention to make someone feel truly special.
                </p>
                <Button
                  size="lg"
                  className="bg-white hover:bg-white/90 text-[#FF1493] rounded-full font-semibold"
                  asChild
                >
                  <Link href="/gifts">Create a Special Gift</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Congratulations Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
                Celebrate their victories
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Life's milestones deserve more than a card. They deserve gifts that honor the journey, acknowledge the
                hard work, and celebrate the achievement.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Graduations</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Honor their dedication with personalized keepsakes that commemorate years of hard work
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Promotions</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Celebrate career milestones with elegant gifts that reflect their professional achievement
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">New Beginnings</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Mark life's fresh starts with meaningful gifts that inspire and encourage
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Weddings</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Toast to forever with personalized gifts that become family heirlooms
                </p>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8"
                asChild
              >
                <Link href="/occasions">Browse All Occasions</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Customer Reviews Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-16 text-foreground text-center">
                Loved by our customers
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    "I ordered a personalized photo mug for my mom's birthday and she absolutely loved it. The quality
                    is amazing and the personalization is perfect!"
                  </p>
                  <p className="font-semibold text-foreground">— Jennifer M.</p>
                </Card>

                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    "The engraved bracelet I got for my best friend was exactly what I was looking for. It arrived
                    quickly and beautifully packaged. Highly recommend!"
                  </p>
                  <p className="font-semibold text-foreground">— David K.</p>
                </Card>

                <Card className="p-8 hover:shadow-lg transition-shadow">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    "Giftly made it so easy to create a meaningful gift for my partner. The customization options are
                    endless and the final product exceeded my expectations."
                  </p>
                  <p className="font-semibold text-foreground">— Amanda T.</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-foreground mb-8 leading-relaxed">
                "The personalized photo album we ordered became the centerpiece of our anniversary celebration. Every
                page reminded us why we fell in love in the first place."
              </blockquote>
              <p className="text-muted-foreground font-medium">— Sarah & Michael, Together 10 Years</p>
            </div>
          </div>
        </section>

        {/* Why Personalization Matters */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-foreground text-center">
                Why personalization matters
              </h2>
              <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
                <p>
                  In a world of mass-produced everything, a personalized gift stands apart. It says "I see you. I know
                  you. I value you." It transforms a simple object into a vessel of meaning, carrying your emotions
                  across time and space.
                </p>
                <p>
                  When you engrave a name, add a special date, or customize a design, you're not just buying a
                  product—you're creating a memory. You're building a bridge between hearts. You're saying something
                  that matters.
                </p>
                <p>
                  That's why at Giftly, we pour our hearts into every item we create. Because we know that behind every
                  order is a story—a relationship worth celebrating, a moment worth preserving, a person worth honoring.
                </p>
                <p className="text-center pt-4">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8"
                    asChild
                  >
                    <Link href="/gifts">Start Creating Your Gift</Link>
                  </Button>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Ready to make someone's day?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Browse our collection of personalized gifts and find the perfect way to express what's in your heart.
              </p>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8 text-base"
                asChild
              >
                <Link href="/gifts">Shop All Gifts</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
