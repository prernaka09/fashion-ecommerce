export interface ProductVariant {
  id?: string
  size?: string
  color?: string
  stock: number
  price?: number
  sku?: string
}

export interface Product {
  id: string
  name: string
  slug: string
  description: string
  category: string
  gender?: 'Women' | 'Men'
  brand: string
  images: string[]
  price: number
  discountPrice?: number
  discountPercentage?: number
  sizes: string[]
  colors: string[]
  variants?: ProductVariant[]
  stock: number
  rating: number
  reviewCount: number
  createdAt: string
}
