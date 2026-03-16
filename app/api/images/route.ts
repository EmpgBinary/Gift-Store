import { type NextRequest, NextResponse } from "next/server"

const UNSPLASH_API_BASE = "https://api.unsplash.com"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get("query")
  const type = searchParams.get("type") // 'random' or 'search'

  if (!query) {
    return NextResponse.json({ error: "Query parameter required" }, { status: 400 })
  }

  const apiKey = process.env.UNSPLASH_API_KEY

  if (!apiKey) {
    console.log(
      "[v0] UNSPLASH_API_KEY not configured - using fallback images. To use dynamic images, set UNSPLASH_API_KEY in .env.local",
    )

    // Return a fallback response with a static image
    const fallbackImages: { [key: string]: string } = {
      "friendship gifts celebration fun": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
      "romantic date gifts love": "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&q=80",
      "birthday celebration party": "https://images.unsplash.com/photo-1513651857529-3a75c5f64d43?w=800&q=80",
      "christmas holiday gifts": "https://images.unsplash.com/photo-1543696867-6f3bbccf0b8b?w=800&q=80",
      "wedding celebration love": "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    }

    if (type === "search") {
      return NextResponse.json({ images: [fallbackImages[query] || fallbackImages["wedding celebration love"]] })
    } else {
      return NextResponse.json({ image: fallbackImages[query] || fallbackImages["wedding celebration love"] })
    }
  }

  try {
    let url: string

    if (type === "search") {
      const limit = searchParams.get("limit") || "10"
      url = `${UNSPLASH_API_BASE}/search/photos?query=${encodeURIComponent(query)}&per_page=${limit}&client_id=${apiKey}`
    } else {
      url = `${UNSPLASH_API_BASE}/photos/random?query=${encodeURIComponent(query)}&orientation=portrait&client_id=${apiKey}`
    }

    const response = await fetch(url, {
      cache: "force-cache",
      next: { revalidate: 86400 }, // Cache for 24 hours
    })

    if (!response.ok) {
      throw new Error(`Unsplash API error: ${response.statusText}`)
    }

    const data = await response.json()

    if (type === "search") {
      const images = data.results.map((img: any) => img.urls.regular)
      return NextResponse.json({ images })
    } else {
      return NextResponse.json({ image: data.urls.regular })
    }
  } catch (error) {
    console.error("[v0] Image fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch image" }, { status: 500 })
  }
}



// import { NextRequest, NextResponse } from "next/server"

// const UNSPLASH_API_BASE = "https://api.unsplash.com"

// export async function GET(request: NextRequest) {
//   const searchParams = request.nextUrl.searchParams
//   const query = searchParams.get("query")
//   const type = searchParams.get("type") // "single" | "search"
//   const limit = Number(searchParams.get("limit") || 10)

//   if (!query) {
//     return NextResponse.json(
//       { error: "Query parameter required" },
//       { status: 400 }
//     )
//   }

//   const apiKey = process.env.UNSPLASH_API_KEY

//   /* ---------------------------------------
//      FALLBACK (NO API KEY)
//   ----------------------------------------*/
//   if (!apiKey) {
//     const fallbackImages: Record<string, string[]> = {
//       "friendship gifts celebration fun": [
//         "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
//       ],
//       "romantic date gifts love": [
//         "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&q=80",
//       ],
//       "birthday celebration party": [
//         "https://images.unsplash.com/photo-1513651857529-3a75c5f64d43?w=800&q=80",
//       ],
//       "christmas holiday gifts": [
//         "https://images.unsplash.com/photo-1543696867-6f3bbccf0b8b?w=800&q=80",
//       ],
//       "wedding celebration love": [
//         "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
//       ],
//     }

//     const images =
//       fallbackImages[query] || fallbackImages["wedding celebration love"]

//     return NextResponse.json(
//       type === "search" ? { images } : { image: images[0] }
//     )
//   }

//   /* ---------------------------------------
//      UNSPLASH FETCH (SAFE)
//   ----------------------------------------*/
//   try {
//     const url = `${UNSPLASH_API_BASE}/search/photos?query=${encodeURIComponent(
//       query
//     )}&per_page=${type === "search" ? limit : 1}&orientation=portrait`

//     const response = await fetch(url, {
//       headers: {
//         Authorization: `Client-ID ${apiKey}`,
//       },
//       next: { revalidate: 86400 }, // cache 24 hours
//     })

//     if (!response.ok) {
//       throw new Error(`Unsplash API error: ${response.status}`)
//     }

//     const data = await response.json()
//     const images = data.results.map((img: any) => img.urls.regular)

//     return NextResponse.json(
//       type === "search"
//         ? { images }
//         : { image: images[0] || null }
//     )
//   } catch (error) {
//     console.error("[Unsplash API Error]", error)
//     return NextResponse.json(
//       { error: "Failed to fetch image" },
//       { status: 500 }
//     )
//   }
// }
