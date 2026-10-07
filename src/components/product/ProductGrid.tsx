import React from 'react'
import type { Product } from '../../types'
import ProductCard from './ProductCard'
import './ProductGrid.css'

export interface ProductGridProps {
  products: Product[]
  wishlistedIds?: string[]
  onToggleWishlist?: (product: Product) => void
  compact?: boolean
  className?: string
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  wishlistedIds = [],
  onToggleWishlist,
  compact = false,
  className = '',
}) => {
  return (
    <div
      className={`product-grid ${compact ? 'product-grid--compact' : ''} ${className}`}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isWishlisted={onToggleWishlist ? wishlistedIds.includes(product.id) : undefined}
          onToggleWishlist={onToggleWishlist}
        />
      ))}
    </div>
  )
}

export default ProductGrid
