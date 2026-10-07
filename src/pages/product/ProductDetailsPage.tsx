import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Heart, Minus, Plus, ShoppingBag, Truck } from 'lucide-react'
import { APP_CONFIG, ROUTES } from '../../constants'
import { catalog } from '../../constants/catalog'
import { Breadcrumb } from '../../components/common/Breadcrumb'
import { Button } from '../../components/common/Button'
import { ProductGrid } from '../../components/product/ProductGrid'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { addToCart } from '../../store/slices/cartSlice'
import { toggleWishlist } from '../../store/slices/wishlistSlice'
import './product-details.css'

export function ProductDetailsPage() {
  const { id } = useParams<{id:string}>()
  const product = useAppSelector((state) => state.products.items.find((item)=>item.id===id)) ?? catalog.find((item)=>item.id===id)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const wished = useAppSelector((state)=>state.wishlist.items.some((item)=>item.id===id))
  const [size,setSize] = useState('')
  const [color,setColor] = useState('')
  const [quantity,setQuantity] = useState(1)
  const [activeImage,setActiveImage] = useState(0)
  const [notice,setNotice] = useState('')

  const selectedSize = size || product?.sizes[0] || 'One size'
  const selectedColor = color || product?.colors[0] || 'Default'
  const images = useMemo(()=>product?.images ?? [],[product])

  if (!product) return <main className="container page-container"><h1>Piece not found</h1><p className="text-muted">This piece may have moved. Explore the latest collection instead.</p><Button onClick={()=>navigate(ROUTES.SHOP)}>Shop all</Button></main>

  const add = () => {
    dispatch(addToCart({id:`${product.id}-${selectedSize}-${selectedColor}`,productId:product.id,product,size:selectedSize,color:selectedColor,quantity,price:product.price,discountPrice:product.discountPrice}))
    setNotice('Added to your bag')
  }
  const buy = () => { add(); navigate(ROUTES.CART) }
  const currentPrice=product.discountPrice??product.price

  return <main className="container page-container product-detail-page">
    <Breadcrumb items={[{label:'Shop',path:ROUTES.SHOP},{label:product.category,path:ROUTES.CATEGORY(product.category.toLowerCase())},{label:product.name}]}/>
    <div className="product-detail"><div className="product-gallery"><div className="product-gallery__main"><img src={images[activeImage]} alt={product.name}/></div>{images.length>1&&<div className="product-gallery__thumbs">{images.map((image,index)=><button key={image} className={activeImage===index?'active':''} onClick={()=>setActiveImage(index)}><img src={image} alt={`${product.name} view ${index+1}`}/></button>)}</div>}</div>
      <div className="product-info"><span className="eyebrow">{product.brand}</span><h1>{product.name}</h1><div className="product-info__rating">★ {product.rating.toFixed(1)} <span>·</span> {product.reviewCount} reviews</div><div className="product-info__price"><strong>{APP_CONFIG.CURRENCY}{currentPrice.toLocaleString('en-IN')}</strong>{currentPrice<product.price&&<><del>{APP_CONFIG.CURRENCY}{product.price.toLocaleString('en-IN')}</del><span>{product.discountPercentage}% off</span></>}</div>
        <p className="product-info__description">{product.description}</p>
        {product.sizes.length>1&&<fieldset className="choice-group"><legend>Size <span>{selectedSize}</span></legend><div>{product.sizes.map((item)=><button key={item} className={selectedSize===item?'selected':''} onClick={()=>setSize(item)}>{item}</button>)}</div></fieldset>}
        {product.colors.length>1&&<fieldset className="choice-group"><legend>Color <span>{selectedColor}</span></legend><div>{product.colors.map((item)=><button key={item} className={selectedColor===item?'selected':''} onClick={()=>setColor(item)}>{item}</button>)}</div></fieldset>}
        <div className="product-info__quantity"><span>Quantity</span><div><button aria-label="Decrease quantity" onClick={()=>setQuantity(Math.max(1,quantity-1))}><Minus size={14}/></button><b>{quantity}</b><button aria-label="Increase quantity" onClick={()=>setQuantity(Math.min(product.stock,quantity+1))}><Plus size={14}/></button></div><small>{product.stock} available</small></div>
        <div className="product-info__actions"><Button size="lg" leftIcon={<ShoppingBag size={17}/>} onClick={add}>Add to bag</Button><Button size="lg" variant="outline" onClick={buy}>Buy now</Button><button className={`product-info__wishlist ${wished?'saved':''}`} aria-label={wished?'Remove from wishlist':'Add to wishlist'} onClick={()=>dispatch(toggleWishlist(product))}><Heart size={19} fill={wished?'currentColor':'none'}/></button></div>{notice&&<p className="product-info__notice" role="status">{notice}. <button onClick={()=>navigate(ROUTES.CART)}>View bag</button></p>}
        <div className="delivery-note"><Truck size={18}/><div><strong>Complimentary delivery</strong><span>Estimated in 3–5 business days</span></div></div>
      </div>
    </div>
    <section className="product-story"><div><span className="eyebrow">The details</span><h2>Made to feel like you.</h2></div><div><p>{product.description}</p><dl><div><dt>Category</dt><dd>{product.category}</dd></div><div><dt>Label</dt><dd>{product.brand}</dd></div><div><dt>Available sizes</dt><dd>{product.sizes.join(', ')}</dd></div><div><dt>Color options</dt><dd>{product.colors.join(', ')}</dd></div></dl></div></section>
    <section className="reviews-block"><div><span className="eyebrow">Notes from customers</span><h2>Reviews <span>({product.reviewCount})</span></h2><p className="reviews-block__score">★ {product.rating.toFixed(1)} <small>out of 5</small></p></div><div className="review-placeholder"><strong>Well loved, well worn.</strong><p>Customer reviews will appear here as this collection grows.</p></div></section>
    <section className="related-products"><div className="section-heading"><div><span className="eyebrow">A few more to explore</span><h2>You may also like</h2></div></div><ProductGrid products={catalog.filter((item)=>item.id!==product.id).slice(0,4)}/></section>
  </main>
}

export default ProductDetailsPage
