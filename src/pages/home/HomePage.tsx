import { ArrowRight, Check, Camera } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/common/Button'
import { ProductGrid } from '../../components/product/ProductGrid'
import { catalog, menCategories, womenCategories } from '../../constants/catalog'
import { ROUTES } from '../../constants'
import './storefront.css'

export function HomePage() {
  return <div className="home-page">
    <section className="home-hero">
      <div className="home-hero__image" role="img" aria-label="Modern neutral fashion collection" />
      <div className="home-hero__shade" />
      <div className="home-hero__content"><span className="eyebrow">The autumn / winter edit</span><h1>Wear what<br />moves you.</h1><p>Considered pieces for every version of your everyday.</p><div className="home-hero__actions"><Link to={ROUTES.SHOP}><Button size="lg" rightIcon={<ArrowRight size={16} />}>Shop now</Button></Link><Link to="/category/women" className="text-link text-link--light">Explore the collection</Link></div></div>
      <span className="home-hero__index">01 — 03</span>
    </section>

    <section className="store-section container"><div className="section-heading"><div><span className="eyebrow">Find your point of view</span><h2>Shop women’s fashion</h2></div><Link className="text-link" to="/category/women">View all <ArrowRight size={15} /></Link></div><div className="category-grid">{womenCategories.map((category, index) => <Link className="category-tile" to={`/category/women/${category.slug}`} key={category.name}><img src={category.image} alt={`${category.name} for women`} loading="lazy" /><span className="category-tile__index">{String(index + 1).padStart(2, '0')}</span><span className="category-tile__name">{category.name}<ArrowRight size={16} /></span></Link>)}</div></section>

    <section className="store-section container store-section--gender"><div className="section-heading"><div><span className="eyebrow">Everyday, considered</span><h2>Shop men’s fashion</h2></div><Link className="text-link" to="/category/men">View all <ArrowRight size={15} /></Link></div><div className="category-grid">{menCategories.map((category, index) => <Link className="category-tile" to={`/category/men/${category.slug}`} key={category.name}><img src={category.image} alt={`${category.name} for men`} loading="lazy" /><span className="category-tile__index">{String(index + 1).padStart(2, '0')}</span><span className="category-tile__name">{category.name}<ArrowRight size={16} /></span></Link>)}</div></section>

    <section className="store-section store-section--muted"><div className="container"><div className="section-heading"><div><span className="eyebrow">The pieces everyone is talking about</span><h2>Trending now</h2></div><Link className="text-link" to={ROUTES.SHOP}>Shop all <ArrowRight size={15} /></Link></div><ProductGrid products={catalog.slice(0, 8)} /></div></section>

    <section className="home-promo"><div className="home-promo__copy"><span className="eyebrow">Made for the in-between</span><h2>Good clothes.<br />Longer stories.</h2><p>Thoughtful fabric, easy silhouettes and the details that make getting dressed feel like you.</p><Link to={ROUTES.SHOP}><Button variant="outline" rightIcon={<ArrowRight size={16} />}>Discover the edit</Button></Link></div><div className="home-promo__image" role="img" aria-label="Neutral wardrobe essentials" /></section>

    <section className="store-section container"><div className="section-heading"><div><span className="eyebrow">Just landed</span><h2>New arrivals</h2></div><Link className="text-link" to={ROUTES.SHOP}>See everything <ArrowRight size={15} /></Link></div><ProductGrid products={[...catalog].sort((a,b)=>b.createdAt.localeCompare(a.createdAt)).slice(0,8)} /></section>

    <section className="collection-band"><div><span className="eyebrow">The Fashion Hub collection</span><h2>Quietly distinctive.<br />Made to be lived in.</h2><Link className="text-link text-link--light" to={ROUTES.SHOP}>Explore the collection <ArrowRight size={15} /></Link></div><img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1100&q=85" alt="Fashion collection editorial" loading="lazy" /></section>

    <section className="store-section container"><div className="section-heading section-heading--center"><div><span className="eyebrow">A little more considered</span><h2>Good things, built in</h2></div></div><div className="benefits-grid">{[['01','Thoughtful by design','Well-made pieces chosen for their feel, fit and staying power.'],['02','Easy, always','Versatile forms that make getting dressed simpler.'],['03','Here to help','A real team ready when you need a hand.']].map(([n,title,desc])=><article key={n}><span>{n}</span><h3>{title}</h3><p>{desc}</p></article>)}</div></section>

    <Newsletter />
  </div>
}

function Newsletter() { return <section className="newsletter"><span className="eyebrow">Notes from Fashion Hub</span><h2>Good things in your inbox.</h2><p>New arrivals, considered edits and a little inspiration. No noise.</p><form onSubmit={(e)=>e.preventDefault()} className="newsletter__form"><label className="sr-only" htmlFor="newsletter-email">Email address</label><input id="newsletter-email" type="email" placeholder="Your email address" required /><button type="submit" aria-label="Subscribe"><Check size={17}/></button></form><small>By subscribing, you agree to receive occasional updates from Fashion Hub.</small><span className="newsletter__social"><Camera size={15}/> @fashionhub</span></section> }

export default HomePage
