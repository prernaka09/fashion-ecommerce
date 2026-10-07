export interface ApiResponse<T> {
  success: boolean
  message?: string
  data: T
}

export interface PaginatedResponse<T> {
  items: T[]
  totalItems: number
  currentPage: number
  totalPages: number
  pageSize: number
  hasNextPage: boolean
  hasPrevPage: boolean
}

export interface ProductFilterParams {
  category?: string
  brands?: string[]
  minPrice?: number
  maxPrice?: number
  sizes?: string[]
  colors?: string[]
  rating?: number
  sortBy?: 'popular' | 'newest' | 'price_asc' | 'price_desc' | 'rating'
  search?: string
  page?: number
  limit?: number
}
