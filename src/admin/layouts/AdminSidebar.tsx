import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import {
  LayoutDashboard,
  Package,
  PlusCircle,
  FolderTree,
  ShoppingBag,
  Users,
  TicketPercent,
  Star,
  RotateCcw,
  ArrowLeft,
} from 'lucide-react'
import { APP_CONFIG, ROUTES } from '../../constants'
import './AdminSidebar.css'

export const AdminSidebar: React.FC = () => {
  const navItems = [
    { to: ROUTES.ADMIN.DASHBOARD, label: 'Dashboard', icon: LayoutDashboard, end: true },
    { to: ROUTES.ADMIN.PRODUCTS, label: 'Products', icon: Package },
    { to: ROUTES.ADMIN.ADD_PRODUCT, label: 'Add Product', icon: PlusCircle },
    { to: ROUTES.ADMIN.CATEGORIES, label: 'Categories', icon: FolderTree },
    { to: ROUTES.ADMIN.ORDERS, label: 'Orders', icon: ShoppingBag },
    { to: ROUTES.ADMIN.USERS, label: 'Users', icon: Users },
    { to: ROUTES.ADMIN.COUPONS, label: 'Coupons', icon: TicketPercent },
    { to: ROUTES.ADMIN.REVIEWS, label: 'Reviews', icon: Star },
    { to: ROUTES.ADMIN.RETURNS, label: 'Returns & Refunds', icon: RotateCcw },
  ]

  return (
    <aside className="admin-sidebar">
      <div className="admin-sidebar__brand">
        <span className="admin-sidebar__logo">{APP_CONFIG.NAME}</span>
        <span className="admin-sidebar__tag">Admin</span>
      </div>

      <nav className="admin-sidebar__nav">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `admin-sidebar__link ${isActive ? 'admin-sidebar__link--active' : ''}`
              }
            >
              <Icon size={16} />
              <span>{item.label}</span>
            </NavLink>
          )
        })}
      </nav>

      <div className="admin-sidebar__footer">
        <Link to={ROUTES.HOME} className="admin-sidebar__link">
          <ArrowLeft size={16} />
          <span>Storefront</span>
        </Link>
      </div>
    </aside>
  )
}

export default AdminSidebar
