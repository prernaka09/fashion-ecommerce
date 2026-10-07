import { Heart, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { APP_CONFIG, ROUTES } from '../../constants'
import { addToCart } from '../../store/slices/cartSlice'
import { toggleWishlist } from '../../store/slices/wishlistSlice'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import type { Product } from '../../types'
import './ProductCard.css'

export interface ProductCardProps { product: Product; isWishlisted?: boolean; onToggleWishlist?: (product: Product) => void; className?: string }

export function ProductCard({ product, isWishlisted, onToggleWishlist, className = '' }: ProductCardProps) {
  const dispatch = useAppDispatch()
  const saved = useAppSelector((state) => state.wishlist.items.some((item) => item.id === product.id))
  const wishlisted = isWishlisted ?? saved
  const price = product.discountPrice ?? product.price
  const size = product.sizes[0] ?? 'One size'
  const color = product.colors[0] ?? 'Default'

  const handleWishlist = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (onToggleWishlist) onToggleWishlist(product)
    else dispatch(toggleWishlist(product))
  }

  const handleAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    dispatch(addToCart({ id: `${product.id}-${size}-${color}`, productId: product.id, product, size, color, quantity: 1, price: product.price, discountPrice: product.discountPrice }))
  }

  return (
    <article className={`product-card ${className}`}>
      <div className="product-card__image-wrapper">
        <Link to={ROUTES.PRODUCT_DETAILS(product.id)} aria-label={`View ${product.name}`}>
          <img src={product.images[0]} alt={product.name} className="product-card__image" loading="lazy" />
        </Link>
        {product.discountPercentage ? <span className="product-card__tag">-{product.discountPercentage}%</span> : null}
        <button type="button" className={`product-card__wishlist-btn ${wishlisted ? 'is-saved' : ''}`} onClick={handleWishlist} aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}>
          <Heart size={18} fill={wishlisted ? 'currentColor' : 'none'} />
        </button>
        <button type="button" className="product-card__quick-add" onClick={handleAdd}><ShoppingBag size={15} /> Quick add</button>
      </div>
      <div className="product-card__content">
        <span className="product-card__brand">{product.brand}</span>
        <Link to={ROUTES.PRODUCT_DETAILS(product.id)} className="product-card__name">{product.name}</Link>
        <div className="product-card__meta"><span aria-label={`${product.rating} out of 5 stars`}>★ {product.rating.toFixed(1)}</span><span>{product.reviewCount} reviews</span></div>
        <div className="product-card__price-row"><strong>{APP_CONFIG.CURRENCY}{price.toLocaleString('en-IN')}</strong>{price < product.price && <del>{APP_CONFIG.CURRENCY}{product.price.toLocaleString('en-IN')}</del>}</div>
      </div>
    </article>
  )
}

export default ProductCard

