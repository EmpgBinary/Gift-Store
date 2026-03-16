"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

const occasions = [
  { name: "Birthdays", slug: "birthdays" },
  { name: "Christmas", slug: "christmas" },
  { name: "Graduations", slug: "graduations" },
  { name: "Anniversaries", slug: "anniversaries" },
  { name: "Weddings", slug: "weddings" },
  { name: "Baby Showers", slug: "baby-showers" },
]

export default function AdminOccasionsPage() {
  const [occasionCount, setOccasionCount] = useState<Record<string, number>>({})

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto px-4 md:px-6 py-12">
        <h1 className="font-serif text-4xl font-bold mb-8 text-foreground">Manage Occasions</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {occasions.map((occasion) => (
            <Link
              key={occasion.slug}
              href={`/admin/occasions/${occasion.slug}`}
              className="bg-muted/50 rounded-lg p-6 border border-border/40 hover:border-accent hover:shadow-lg transition-all"
            >
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">{occasion.name}</h2>
              <p className="text-muted-foreground mb-6">
                Products: <span className="font-semibold text-foreground">{occasionCount[occasion.slug] || 0}</span>
              </p>
              <Button className="w-full bg-accent hover:bg-accent/90">Manage Products</Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
