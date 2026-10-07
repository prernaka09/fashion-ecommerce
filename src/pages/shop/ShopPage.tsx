import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Filter, X } from 'lucide-react'
import { Breadcrumb } from '../../components/common/Breadcrumb'
import { SearchBar } from '../../components/common/SearchBar'
import { ProductGrid } from '../../components/product/ProductGrid'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import type { AppDispatch, RootState } from '../../store/store'
import { resetFilters, setCategory, setDiscount, setPriceRange, setRating, setSearchQuery, setSortBy, toggleBrand, toggleColor, toggleSize } from '../../store/slices/filterSlice'
import './shop.css'

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'One size']
const colors = ['Black', 'White', 'Sand', 'Blue', 'Olive', 'Tan']

export function ShopPage() {
  const { category: categoryParam, gender: genderParam } = useParams()
  const isGenderCollection = categoryParam === 'women' || categoryParam === 'men'
  const routeGender = genderParam ?? (isGenderCollection ? categoryParam : undefined)
  const routeCategory = genderParam ? categoryParam : isGenderCollection ? undefined : categoryParam
  const dispatch = useAppDispatch()
  const products = useAppSelector((state) => state.products.items)
  const filters = useAppSelector((state) => state.filters)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => { dispatch(setCategory(routeCategory ? decodeURIComponent(routeCategory).replace(/-/g, ' ') : '')) }, [dispatch, routeCategory])

  const brands = useMemo(() => [...new Set(products.map((product) => product.brand))], [products])
  const visibleProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const price = product.discountPrice ?? product.price
      const text = `${product.name} ${product.brand} ${product.category}`.toLowerCase()
      const normalizedCategory = filters.category.toLowerCase().replace(/-/g, ' ')
      const normalizedProductCategory = product.category.toLowerCase().replace(/-/g, ' ')
      return (!routeGender || product.gender?.toLowerCase() === routeGender.toLowerCase())
        && (!filters.category || normalizedProductCategory === normalizedCategory || normalizedProductCategory.includes(normalizedCategory))
        && (!filters.searchQuery || text.includes(filters.searchQuery.toLowerCase()))
        && (!filters.brands.length || filters.brands.includes(product.brand))
        && price <= filters.priceRange[1] && price >= filters.priceRange[0]
        && (!filters.sizes.length || filters.sizes.some((size) => product.sizes.includes(size)))
        && (!filters.colors.length || filters.colors.some((color) => product.colors.some((item) => item.toLowerCase() === color.toLowerCase())))
        && (!filters.rating || product.rating >= filters.rating)
        && (!filters.discount || (product.discountPercentage ?? 0) >= filters.discount)
    })
    return filtered.sort((a, b) => {
      if (filters.sortBy === 'price-asc') return (a.discountPrice ?? a.price) - (b.discountPrice ?? b.price)
      if (filters.sortBy === 'price-desc') return (b.discountPrice ?? b.price) - (a.discountPrice ?? a.price)
      if (filters.sortBy === 'rating') return b.rating - a.rating
      if (filters.sortBy === 'newest') return b.createdAt.localeCompare(a.createdAt)
      return b.reviewCount - a.reviewCount
    })
  }, [products, filters, routeGender])

  return <main className="container page-container shop-page">
    <Breadcrumb items={[{ label: 'Shop', path: '/shop' }, ...(routeGender ? [{ label: routeGender }] : []), ...(routeCategory ? [{ label: decodeURIComponent(routeCategory).replace(/-/g, ' ') }] : [])]} />
    <div className="shop-heading"><div><span className="eyebrow">The considered wardrobe</span><h1>{routeCategory ? decodeURIComponent(routeCategory).replace(/-/g, ' ') : routeGender ? `${routeGender} Collection` : 'Shop all'}</h1><p>Thoughtful pieces to make your own.</p></div><span className="shop-count">{visibleProducts.length} pieces</span></div>
    <div className="shop-toolbar"><SearchBar value={filters.searchQuery} onChange={(value) => dispatch(setSearchQuery(value))} placeholder="Search this collection" /><button className="filter-trigger" onClick={() => setDrawerOpen(true)}><Filter size={16}/> Filters</button><label className="sort-control">Sort by <select value={filters.sortBy} onChange={(event) => dispatch(setSortBy(event.target.value))}><option value="newest">Newest</option><option value="price-asc">Price: low to high</option><option value="price-desc">Price: high to low</option><option value="rating">Rating</option><option value="popular">Popularity</option></select></label></div>
    <div className="shop-layout"><aside className="filters-panel"><FilterFields {...{brands, filters, dispatch}} /></aside><section className="shop-results" aria-live="polite">{visibleProducts.length ? <ProductGrid products={visibleProducts} /> : <div className="shop-empty"><h2>No pieces found</h2><p>Try changing or clearing a few filters.</p><button className="text-link" onClick={() => dispatch(resetFilters())}>Clear all filters</button></div>}</section></div>
    {drawerOpen && <div className="filter-overlay" role="presentation" onClick={() => setDrawerOpen(false)}><aside className="filter-drawer" role="dialog" aria-modal="true" aria-label="Product filters" onClick={(event) => event.stopPropagation()}><header><h2>Filters</h2><button aria-label="Close filters" onClick={() => setDrawerOpen(false)}><X size={20}/></button></header><FilterFields {...{brands, filters, dispatch}} /><button className="filter-apply" onClick={() => setDrawerOpen(false)}>Show {visibleProducts.length} pieces</button></aside></div>}
  </main>
}

function FilterFields({ brands, filters, dispatch }: { brands: string[]; filters: RootState['filters']; dispatch: AppDispatch }) {
  return <div className="filter-fields"><label className="filter-group"><span>Category</span><select value={filters.category} onChange={(event) => dispatch(setCategory(event.target.value))}><option value="">All categories</option>{['Women','Men','Kids','Dresses','Tops','Shirts','Jeans','Shoes','Accessories'].map((item)=><option key={item}>{item}</option>)}</select></label>
    <fieldset className="filter-group"><legend>Brand</legend>{brands.map((brand)=><label className="check-option" key={brand}><input type="checkbox" checked={filters.brands.includes(brand)} onChange={() => dispatch(toggleBrand(brand))}/>{brand}</label>)}</fieldset>
    <label className="filter-group"><span>Maximum price <b>₹{filters.priceRange[1].toLocaleString('en-IN')}</b></span><input type="range" min="1000" max="15000" step="500" value={filters.priceRange[1]} onChange={(event) => dispatch(setPriceRange([0, Number(event.target.value)]))}/><small>₹1,000 — ₹15,000</small></label>
    <fieldset className="filter-group"><legend>Size</legend><div className="filter-chips">{sizes.map((size)=><button type="button" className={filters.sizes.includes(size)?'selected':''} key={size} onClick={()=>dispatch(toggleSize(size))}>{size}</button>)}</div></fieldset>
    <fieldset className="filter-group"><legend>Color</legend><div className="filter-chips">{colors.map((color)=><button type="button" className={filters.colors.includes(color)?'selected':''} key={color} onClick={()=>dispatch(toggleColor(color))}>{color}</button>)}</div></fieldset>
    <label className="filter-group"><span>Customer rating</span><select value={filters.rating ?? ''} onChange={(event)=>dispatch(setRating(event.target.value ? Number(event.target.value) : null))}><option value="">Any rating</option><option value="4">4★ & above</option><option value="4.5">4.5★ & above</option></select></label>
    <label className="filter-group"><span>Discount</span><select value={filters.discount} onChange={(event)=>dispatch(setDiscount(Number(event.target.value)))}><option value="0">Any discount</option><option value="10">10% or more</option><option value="20">20% or more</option><option value="30">30% or more</option></select></label>
    <button type="button" className="filter-clear" onClick={()=>dispatch(resetFilters())}>Clear all</button>
  </div>
}

export default ShopPage
