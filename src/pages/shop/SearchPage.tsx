import { useEffect, useMemo, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Breadcrumb } from '../../components/common/Breadcrumb'
import { SearchBar } from '../../components/common/SearchBar'
import { EmptyState } from '../../components/common/EmptyState'
import { ProductGrid } from '../../components/product/ProductGrid'
import { useDebounce } from '../../hooks/useDebounce'
import { useAppSelector } from '../../store/hooks'
import '../home/storefront.css'
import './search.css'

export function SearchPage() {
  const [params,setParams]=useSearchParams()
  const [term,setTerm]=useState(params.get('q')??'')
  const query=useDebounce(term.trim(),250)
  const products=useAppSelector((state)=>state.products.items)
  useEffect(()=>{setParams(query?{q:query}:{},{replace:true})},[query,setParams])
  const results=useMemo(()=>products.filter((item)=>`${item.name} ${item.brand} ${item.category}`.toLowerCase().includes(query.toLowerCase())),[products,query])
  const suggestions=useMemo(()=>query?products.filter((item)=>item.name.toLowerCase().includes(query.toLowerCase())).slice(0,3):[],[products,query])

  return <main className="container page-container search-page"><Breadcrumb items={[{label:'Search'}]}/><div className="search-page__heading"><span className="eyebrow">Find your next favourite</span><h1>Search</h1><SearchBar value={term} onChange={setTerm} placeholder="Try ‘linen’, ‘shirt’ or ‘Fashion Hub’"/></div>
    {suggestions.length>0&&term.length>1&&<div className="search-suggestions"><span>Suggestions</span>{suggestions.map((item)=><Link key={item.id} to={`/product/${item.id}`}>{item.name}<small>{item.brand}</small></Link>)}</div>}
    {query?<><div className="search-results__heading"><h2>Results for “{query}”</h2><span>{results.length} pieces</span></div>{results.length?<ProductGrid products={results}/>:<EmptyState title="No pieces found" description="Try a different search, or browse the full collection."/>}</>:<div className="search-popular"><span className="eyebrow">Popular right now</span><div>{['Linen','Shirt','Dress','Leather'].map((item)=><button key={item} onClick={()=>setTerm(item)}>{item}<span>↗</span></button>)}</div></div>}
  </main>
}
export default SearchPage
