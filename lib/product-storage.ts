export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  image: string
  personalizable: boolean
  createdAt: string
  occasion?: string // 'general', 'birthdays', 'christmas', 'graduations', 'anniversaries', 'weddings', 'baby-showers', 'mothers-day', 'fathers-day', 'valentines-day'
}

export const getProducts = (): Product[] => {
  if (typeof window === "undefined") return []
  const products = localStorage.getItem("giftly_products")
  return products ? JSON.parse(products) : []
}

export const saveProduct = (product: Product): void => {
  if (typeof window === "undefined") return
  const products = getProducts()
  const index = products.findIndex((p) => p.id === product.id)

  if (index >= 0) {
    products[index] = product
  } else {
    products.push(product)
  }

  localStorage.setItem("giftly_products", JSON.stringify(products))
}

export const deleteProduct = (id: string): void => {
  if (typeof window === "undefined") return
  const products = getProducts().filter((p) => p.id !== id)
  localStorage.setItem("giftly_products", JSON.stringify(products))
}

export const getProductById = (id: string): Product | null => {
  const products = getProducts()
  return products.find((p) => p.id === id) || null
}

export const getProductsByOccasion = (occasion: string): Product[] => {
  if (typeof window === "undefined") return []
  const products = getProducts()
  if (occasion === "general") {
    return products.filter((p) => !p.occasion || p.occasion === "general")
  }
  return products.filter((p) => p.occasion === occasion)
}
