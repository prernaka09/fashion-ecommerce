import { Heart, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { APP_CONFIG, ROUTES } from '../../constants'
import { Breadcrumb } from '../../components/common/Breadcrumb'
import { EmptyState } from '../../components/common/EmptyState'
import { Button } from '../../components/common/Button'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { removeFromCart, updateQuantity } from '../../store/slices/cartSlice'
import { addToWishlist } from '../../store/slices/wishlistSlice'
import './cart.css'

export function CartPage() {
  const {items,subtotal,totalItems}=useAppSelector((state)=>state.cart)
  const dispatch=useAppDispatch()
  const discount=items.reduce((sum,item)=>sum+(item.price-(item.discountPrice??item.price))*item.quantity,0)
  const delivery=subtotal>=7500?0:items.length?150:0
  const total=subtotal+delivery
  const money=(value:number)=>`${APP_CONFIG.CURRENCY}${value.toLocaleString('en-IN')}`
  const moveToWishlist=(item:typeof items[number])=>{dispatch(addToWishlist(item.product));dispatch(removeFromCart(item.id))}
  return <main className="container page-container cart-page"><Breadcrumb items={[{label:'Shopping bag'}]}/><div className="page-header"><span className="eyebrow">Almost yours</span><h1 className="page-title">Your bag <span>({totalItems})</span></h1></div>
    {!items.length?<EmptyState icon={<ShoppingBag size={34}/>} title="Your bag is taking a breather" description="When something feels like you, add it here and come back whenever you're ready." action={<Link to={ROUTES.SHOP}><Button>Explore the collection</Button></Link>}/>:<div className="cart-layout"><section className="cart-items" aria-label="Items in your bag">{items.map((item)=><article className="cart-item" key={item.id}><Link to={ROUTES.PRODUCT_DETAILS(item.productId)} className="cart-item__image"><img src={item.product.images[0]} alt={item.product.name}/></Link><div className="cart-item__details"><span className="eyebrow">{item.product.brand}</span><Link to={ROUTES.PRODUCT_DETAILS(item.productId)} className="cart-item__name">{item.product.name}</Link><p>Size: {item.size}<span> · </span>Colour: {item.color}</p><div className="cart-item__quantity"><button aria-label="Decrease quantity" onClick={()=>item.quantity===1?dispatch(removeFromCart(item.id)):dispatch(updateQuantity({id:item.id,quantity:item.quantity-1}))}><Minus size={13}/></button><span>{item.quantity}</span><button aria-label="Increase quantity" onClick={()=>dispatch(updateQuantity({id:item.id,quantity:item.quantity+1}))}><Plus size={13}/></button></div><div className="cart-item__actions"><button onClick={()=>moveToWishlist(item)}><Heart size={14}/> Save for later</button><button onClick={()=>dispatch(removeFromCart(item.id))}><Trash2 size={14}/> Remove</button></div></div><div className="cart-item__price"><strong>{money((item.discountPrice??item.price)*item.quantity)}</strong>{item.discountPrice&&<del>{money(item.price*item.quantity)}</del>}</div></article>)}</section>
      <aside className="order-summary"><h2>Order summary</h2><div><span>Subtotal ({totalItems} items)</span><span>{money(subtotal+discount)}</span></div>{discount>0&&<div><span>Item discount</span><span className="cart-savings">−{money(discount)}</span></div>}<div><span>Delivery</span><span>{delivery?money(delivery):'Complimentary'}</span></div><div className="order-summary__total"><strong>Total</strong><strong>{money(total)}</strong></div><p>Taxes included where applicable.</p><Link to={ROUTES.CHECKOUT}><Button fullWidth size="lg">Proceed to checkout</Button></Link><Link to={ROUTES.SHOP} className="continue-shopping">Continue shopping</Link>{subtotal<7500&&<small>Add {money(7500-subtotal)} more for complimentary delivery.</small>}</aside></div>}
  </main>
}
export default CartPage
