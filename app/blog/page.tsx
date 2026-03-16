"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Calendar, User } from "lucide-react"

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: "The Art of Personalized Gift-Giving",
      excerpt: "Discover how personalized gifts create lasting memories and strengthen relationships.",
      date: "March 15, 2025",
      author: "Sarah Johnson",
      category: "Tips & Tricks",
    },
    {
      id: 2,
      title: "Celebrating Love: Romantic Gift Ideas",
      excerpt: "Explore creative and romantic gift ideas to express your love and appreciation.",
      date: "March 10, 2025",
      author: "Emma Davis",
      category: "Inspiration",
    },
    {
      id: 3,
      title: "Making Milestones Special",
      excerpt: "Learn how to celebrate life's important moments with meaningful personalized gifts.",
      date: "March 5, 2025",
      author: "Michael Chen",
      category: "Celebrations",
    },
    {
      id: 4,
      title: "Corporate Gifting Guide",
      excerpt: "Best practices for choosing personalized gifts for your business relationships.",
      date: "February 28, 2025",
      author: "Lisa Anderson",
      category: "Business",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-accent/10 to-background">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">Giftly Blog</h1>
            <p className="text-lg text-muted-foreground">
              Tips, inspiration, and stories about the art of meaningful gift-giving.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16 px-4 md:px-6">
          <div className="container max-w-4xl mx-auto">
            <div className="grid gap-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-muted/30 p-8 rounded-lg border border-border/40 hover:border-accent/50 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <span className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                  </div>
                  <h2 className="font-serif text-2xl font-bold mb-3 text-foreground hover:text-accent transition-colors">
                    <Link href={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Link href={`/blog/${post.id}`} className="text-accent hover:text-accent/80 font-medium">
                    Read More →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
