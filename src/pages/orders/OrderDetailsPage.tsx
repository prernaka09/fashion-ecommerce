import React from 'react'
import { useParams } from 'react-router-dom'
import { Breadcrumb } from '../../components/common/Breadcrumb'
import { ROUTES } from '../../constants'
import '../pages.css'

export const OrderDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  return (
    <div className="container page-container">
      <Breadcrumb
        items={[
          { label: 'Orders', path: ROUTES.ORDERS },
          { label: `Order #${id || ''}` },
        ]}
      />
      <header className="page-header">
        <h1 className="page-title">Order Details</h1>
        <p className="page-subtitle">Order Reference: #{id}</p>
      </header>

      <div className="placeholder-card">
        <h3 className="placeholder-card__title">Order Breakdown Architecture</h3>
        <p className="placeholder-card__desc">
          Prepared to display purchased items, shipping address, payment status,
          delivery tracking updates, and invoice download.
        </p>
      </div>
    </div>
  )
}

export default OrderDetailsPage
