import { Heart, ShoppingBag, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Breadcrumb } from '../../components/common/Breadcrumb'
import { EmptyState } from '../../components/common/EmptyState'
import { ProductCard } from '../../components/product/ProductCard'
import { Button } from '../../components/common/Button'
import { ROUTES } from '../../constants'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { addToCart } from '../../store/slices/cartSlice'
import { removeFromWishlist } from '../../store/slices/wishlistSlice'
import './wishlist.css'

export function WishlistPage() {
  const items=useAppSelector((state)=>state.wishlist.items)
  const dispatch=useAppDispatch()
  const moveToBag=(product:typeof items[number])=>{const size=product.sizes[0]??'One size';const color=product.colors[0]??'Default';dispatch(addToCart({id:`${product.id}-${size}-${color}`,productId:product.id,product,size,color,quantity:1,price:product.price,discountPrice:product.discountPrice}));dispatch(removeFromWishlist(product.id))}
  return <main className="container page-container wishlist-page"><Breadcrumb items={[{label:'Wishlist'}]}/><div className="page-header"><span className="eyebrow">Your saved pieces</span><h1 className="page-title">Wishlist <span>({items.length})</span></h1></div>
    {!items.length?<EmptyState icon={<Heart size={34}/>} title="Nothing saved just yet" description="Keep the pieces you love close. Your wishlist is waiting for its first find." action={<Link to={ROUTES.SHOP}><Button>Explore the collection</Button></Link>}/>:<div className="wishlist-grid">{items.map((product)=><article className="wishlist-entry" key={product.id}><ProductCard product={product} isWishlisted/><div className="wishlist-entry__actions"><button onClick={()=>moveToBag(product)}><ShoppingBag size={15}/> Move to bag</button><button onClick={()=>dispatch(removeFromWishlist(product.id))}><Trash2 size={14}/> Remove</button></div></article>)}</div>}
  </main>
}
export default WishlistPage
