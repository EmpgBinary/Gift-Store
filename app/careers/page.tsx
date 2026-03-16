"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Briefcase, Users, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CareersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-accent/10 to-background">
          <div className="container max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">Join Our Team</h1>
            <p className="text-lg text-muted-foreground">
              Help us create meaningful connections through personalized gifts. We're always looking for talented
              individuals to join our growing team.
            </p>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="py-16 px-4 md:px-6">
          <div className="container max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-12 text-center text-foreground">Why Work at Giftly?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-muted/30 p-8 rounded-lg border border-border/40">
                <Briefcase className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold text-lg mb-3 text-foreground">Meaningful Work</h3>
                <p className="text-muted-foreground">
                  Be part of a mission to help people celebrate life's special moments with personalized gifts.
                </p>
              </div>
              <div className="bg-muted/30 p-8 rounded-lg border border-border/40">
                <Users className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold text-lg mb-3 text-foreground">Great Team</h3>
                <p className="text-muted-foreground">
                  Work with passionate, creative individuals who are dedicated to excellence and innovation.
                </p>
              </div>
              <div className="bg-muted/30 p-8 rounded-lg border border-border/40">
                <Zap className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-semibold text-lg mb-3 text-foreground">Growth Opportunities</h3>
                <p className="text-muted-foreground">
                  Develop your skills and advance your career in a fast-growing, innovative company.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 px-4 md:px-6 bg-muted/30">
          <div className="container max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold mb-12 text-center text-foreground">Open Positions</h2>
            <div className="space-y-4">
              {[
                { title: "Product Designer", department: "Design" },
                { title: "Full Stack Developer", department: "Engineering" },
                { title: "Marketing Manager", department: "Marketing" },
                { title: "Customer Success Specialist", department: "Support" },
              ].map((job, idx) => (
                <div
                  key={idx}
                  className="bg-background p-6 rounded-lg border border-border/40 flex justify-between items-center"
                >
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{job.title}</h3>
                    <p className="text-sm text-muted-foreground">{job.department}</p>
                  </div>
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Apply Now</Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
