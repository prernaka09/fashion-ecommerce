import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { CustomerLayout } from './components/layout'
import AdminLayout from './admin/layouts/AdminLayout'
import AdminLoginPage from './admin/pages/AdminLoginPage'
import { ROUTES } from './constants/routes'
import { HomePage } from './pages/home/HomePage'
import ShopPage from './pages/shop/ShopPage'
import SearchPage from './pages/shop/SearchPage'
import ProductDetailsPage from './pages/product/ProductDetailsPage'
import WishlistPage from './pages/wishlist/WishlistPage'
import CartPage from './pages/cart/CartPage'
import './pages/pages.css'

function PlaceholderPage() {
  const location = useLocation()
  const title = location.pathname.split('/').filter(Boolean).pop()?.replace(/-/g, ' ') ?? 'Home'
  return (
    <section className="container" style={{ paddingBlock: 'var(--space-16)' }}>
      <p className="text-accent uppercase" style={{ marginBottom: 'var(--space-3)' }}>Fashion Hub / {title}</p>
      <h1 style={{ textTransform: 'capitalize' }}>{title}</h1>
      <p className="text-muted" style={{ marginTop: 'var(--space-4)' }}>This page is part of the storefront foundation and is ready for its next development phase.</p>
    </section>
  )
}

function AdminPlaceholder() {
  const location = useLocation()
  const title = location.pathname.split('/').filter(Boolean).pop()?.replace(/-/g, ' ') ?? 'Dashboard'
  return <section><h1 style={{ textTransform: 'capitalize' }}>{title}</h1><p className="text-muted">Admin workspace foundation</p></section>
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CustomerLayout />}>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.SHOP} element={<ShopPage />} />
          <Route path="/category/:category" element={<ShopPage />} />
          <Route path="/category/:gender/:category" element={<ShopPage />} />
          <Route path={ROUTES.SEARCH} element={<SearchPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path={ROUTES.WISHLIST} element={<WishlistPage />} />
          <Route path={ROUTES.CART} element={<CartPage />} />
          <Route path={ROUTES.CHECKOUT} element={<PlaceholderPage />} />
          <Route path={ROUTES.LOGIN} element={<PlaceholderPage />} />
          <Route path={ROUTES.REGISTER} element={<PlaceholderPage />} />
          <Route path={ROUTES.PROFILE} element={<PlaceholderPage />} />
          <Route path={ROUTES.ORDERS} element={<PlaceholderPage />} />
          <Route path="/orders/:id" element={<PlaceholderPage />} />
          <Route path={ROUTES.PAYMENT_SUCCESS} element={<PlaceholderPage />} />
          <Route path={ROUTES.PAYMENT_FAILED} element={<PlaceholderPage />} />
        </Route>
        <Route path={ROUTES.ADMIN.LOGIN} element={<AdminLoginPage />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminPlaceholder />} />
          <Route path="products" element={<AdminPlaceholder />} />
          <Route path="products/add" element={<AdminPlaceholder />} />
          <Route path="products/edit/:id" element={<AdminPlaceholder />} />
          <Route path="orders" element={<AdminPlaceholder />} />
          <Route path="users" element={<AdminPlaceholder />} />
          <Route path="categories" element={<AdminPlaceholder />} />
          <Route path="coupons" element={<AdminPlaceholder />} />
          <Route path="reviews" element={<AdminPlaceholder />} />
          <Route path="returns" element={<AdminPlaceholder />} />
        </Route>
        <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
      </Routes>
    </BrowserRouter>
  )
}
