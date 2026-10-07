import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { ShoppingBag, Heart, User as UserIcon, Menu, X, Shield, Search } from 'lucide-react'
import { APP_CONFIG, ROUTES } from '../../constants'
import { useAppSelector } from '../../store/hooks'
import { SearchBar } from '../common/SearchBar'
import './Navbar.css'

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  const { totalItems } = useAppSelector((state) => state.cart)
  const wishlistItems = useAppSelector((state) => state.wishlist.items)
  const { isAuthenticated, user } = useAppSelector((state) => state.auth)

  const handleSearch = (term: string) => {
    if (term.trim()) {
      navigate(`${ROUTES.SEARCH}?q=${encodeURIComponent(term.trim())}`)
    }
  }

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        {/* Mobile menu toggle */}
        <button
          type="button"
          className="navbar__mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Brand Logo */}
        <Link to={ROUTES.HOME} className="navbar__brand">
          {APP_CONFIG.NAME}
        </Link>

        {/* Desktop Nav Links */}
        <nav className="navbar__nav">
          <NavLink
            to={ROUTES.HOME}
            className={({ isActive }) =>
              `navbar__link ${isActive ? 'navbar__link--active' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to={ROUTES.SHOP}
            className={({ isActive }) =>
              `navbar__link ${isActive ? 'navbar__link--active' : ''}`
            }
          >
            Shop
          </NavLink>
          <NavLink
            to={ROUTES.CATEGORY('women')}
            className={({ isActive }) =>
              `navbar__link ${isActive ? 'navbar__link--active' : ''}`
            }
          >
            Women
          </NavLink>
          <NavLink
            to={ROUTES.CATEGORY('men')}
            className={({ isActive }) =>
              `navbar__link ${isActive ? 'navbar__link--active' : ''}`
            }
          >
            Men
          </NavLink>
          <NavLink
            to={ROUTES.CATEGORY('accessories')}
            className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
          >
            Categories
          </NavLink>
        </nav>

        {/* Search Bar */}
        <div className="navbar__search">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* Action Icons */}
        <div className="navbar__actions">
          <Link to={ROUTES.SEARCH} className="navbar__action-btn navbar__mobile-search" aria-label="Search"><Search size={20} /></Link>
          {user?.role === 'admin' && (
            <Link
              to={ROUTES.ADMIN.DASHBOARD}
              className="navbar__action-btn"
              title="Admin Panel"
            >
              <Shield size={20} />
            </Link>
          )}

          <Link
            to={ROUTES.WISHLIST}
            className="navbar__action-btn"
            aria-label="Wishlist"
          >
            <Heart size={20} />
            {wishlistItems.length > 0 && (
              <span className="navbar__badge">{wishlistItems.length}</span>
            )}
          </Link>

          <Link to={ROUTES.CART} className="navbar__action-btn" aria-label="Shopping Cart">
            <ShoppingBag size={20} />
            {totalItems > 0 && <span className="navbar__badge">{totalItems}</span>}
          </Link>

          <Link
            to={isAuthenticated ? ROUTES.PROFILE : ROUTES.LOGIN}
            className="navbar__action-btn"
            aria-label="Account"
          >
            <UserIcon size={20} />
          </Link>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="navbar__mobile-drawer">
          <div style={{ marginBottom: '1rem' }}>
            <SearchBar
              onSearch={(term) => {
                handleSearch(term)
                setMobileMenuOpen(false)
              }}
            />
          </div>
          <Link
            to={ROUTES.HOME}
            className="navbar__mobile-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to={ROUTES.SHOP}
            className="navbar__mobile-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            All Products
          </Link>
          <Link
            to={ROUTES.CATEGORY('women')}
            className="navbar__mobile-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Women
          </Link>
          <Link
            to={ROUTES.CATEGORY('men')}
            className="navbar__mobile-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Men
          </Link>
          <Link
            to={ROUTES.CATEGORY('accessories')}
            className="navbar__mobile-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            Accessories
          </Link>
          <Link
            to={ROUTES.ORDERS}
            className="navbar__mobile-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            My Orders
          </Link>
        </div>
      )}
    </header>
  )
}

export default Navbar
