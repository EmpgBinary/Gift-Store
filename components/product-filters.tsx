"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export function ProductFilters() {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-8">
      {/* Occasion Filter */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2 bg-muted/50 border-border/50">
            Occasion
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-48">
          <DropdownMenuItem>All Occasions</DropdownMenuItem>
          <DropdownMenuItem>Birthdays</DropdownMenuItem>
          <DropdownMenuItem>Christmas</DropdownMenuItem>
          <DropdownMenuItem>Graduations</DropdownMenuItem>
          <DropdownMenuItem>Anniversaries</DropdownMenuItem>
          <DropdownMenuItem>Weddings</DropdownMenuItem>
          <DropdownMenuItem>Baby Showers</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Recipient Filter */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2 bg-muted/50 border-border/50">
            Recipient
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-48">
          <DropdownMenuItem>All Recipients</DropdownMenuItem>
          <DropdownMenuItem>For Her</DropdownMenuItem>
          <DropdownMenuItem>For Him</DropdownMenuItem>
          <DropdownMenuItem>For Kids</DropdownMenuItem>
          <DropdownMenuItem>For Couples</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Price Filter */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2 bg-muted/50 border-border/50">
            Price
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-48">
          <DropdownMenuItem>All Prices</DropdownMenuItem>
          <DropdownMenuItem>Under $25</DropdownMenuItem>
          <DropdownMenuItem>$25 - $50</DropdownMenuItem>
          <DropdownMenuItem>$50 - $100</DropdownMenuItem>
          <DropdownMenuItem>Over $100</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Rating Filter */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="gap-2 bg-muted/50 border-border/50">
            Rating
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-48">
          <DropdownMenuItem>All Ratings</DropdownMenuItem>
          <DropdownMenuItem>4+ Stars</DropdownMenuItem>
          <DropdownMenuItem>3+ Stars</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* All Filters Button */}
      <Button className="gap-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full">All Filters</Button>
    </div>
  )
}
