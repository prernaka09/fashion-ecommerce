import React from 'react'
import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'
import { ROUTES } from '../../constants'
import { Button } from '../../components/common/Button'
import '../../pages/pages.css'

export const ProductListPage: React.FC = () => {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
        <div>
          <h1 className="page-title">Products</h1>
          <p className="page-subtitle">Manage catalog items, pricing, inventory, and variants</p>
        </div>
        <Link to={ROUTES.ADMIN.ADD_PRODUCT}>
          <Button variant="primary" leftIcon={<Plus size={16} />}>
            Add Product
          </Button>
        </Link>
      </div>

      <div className="placeholder-card">
        <h3 className="placeholder-card__title">Products Management Table</h3>
        <p className="placeholder-card__desc">
          Ready for data table rendering with search, category filtering, stock adjustments, and edit/delete actions.
        </p>
      </div>
    </div>
  )
}

export default ProductListPage
