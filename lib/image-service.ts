const UNSPLASH_API_BASE = "https://api.unsplash.com"

interface UnsplashImage {
  id: string
  urls: {
    regular: string
    small: string
    thumb: string
  }
  alt_description: string
  user: {
    name: string
  }
}

export function getPlaceholderImage(query: string): string {
  const queries: { [key: string]: string } = {
    friendship: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80",
    romantic: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=800&q=80",
    birthday: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    christmas: "https://images.unsplash.com/photo-1513651857529-3a75c5f64d43?w=800&q=80",
    wedding: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    gift: "https://images.unsplash.com/photo-1513706267191-b455ec1808a0?w=800&q=80",
    couple: "https://images.unsplash.com/photo-1518046695935-52a3668d3214?w=800&q=80",
    special: "https://images.unsplash.com/photo-1515562141207-6811bcdd56cd?w=800&q=80",
  }

  const key = query.toLowerCase().split(" ")[0]
  return queries[key] || "https://images.unsplash.com/photo-1513706267191-b455ec1808a0?w=800&q=80"
}

export async function getRandomImage(query: string): Promise<string> {
  try {
    const response = await fetch(`/api/images?query=${encodeURIComponent(query)}&type=random`)

    if (!response.ok) {
      return getPlaceholderImage(query)
    }

    const data = await response.json()
    return data.image || getPlaceholderImage(query)
  } catch (error) {
    return getPlaceholderImage(query)
  }
}

export async function searchImages(query: string, limit = 10): Promise<string[]> {
  try {
    const response = await fetch(`/api/images?query=${encodeURIComponent(query)}&type=search&limit=${limit}`)

    if (!response.ok) {
      return [getPlaceholderImage(query)]
    }

    const data = await response.json()
    return data.images || [getPlaceholderImage(query)]
  } catch (error) {
    return [getPlaceholderImage(query)]
  }
}
