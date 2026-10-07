import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { ROUTES } from '../../constants'
import '../../pages/pages.css'

export const AddProductPage: React.FC = () => {
  return (
    <div>
      <div style={{ marginBottom: '1.5rem' }}>
        <Link
          to={ROUTES.ADMIN.PRODUCTS}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: 'var(--text-xs)',
            color: 'var(--color-gray-medium)',
            textTransform: 'uppercase',
          }}
        >
          <ArrowLeft size={14} /> Back to Products
        </Link>
      </div>

      <header className="page-header">
        <h1 className="page-title">Add New Product</h1>
        <p className="page-subtitle">Create a new item with images, sizing, color variants, and stock</p>
      </header>

      <div className="placeholder-card">
        <h3 className="placeholder-card__title">Product Creation Form Architecture</h3>
        <p className="placeholder-card__desc">
          Structured for title, slug, price, discount, brand, category, media upload, and variant generation.
        </p>
      </div>
    </div>
  )
}

export default AddProductPage
