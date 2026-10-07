import React from 'react'
import { Breadcrumb } from '../../components/common/Breadcrumb'
import { ROUTES } from '../../constants'
import '../pages.css'

export const CheckoutPage: React.FC = () => {
  return (
    <div className="container page-container">
      <Breadcrumb
        items={[
          { label: 'Cart', path: ROUTES.CART },
          { label: 'Checkout' },
        ]}
      />
      <header className="page-header">
        <h1 className="page-title">Checkout</h1>
        <p className="page-subtitle">Shipping address, order summary, and payment method</p>
      </header>

      <div className="placeholder-card">
        <h3 className="placeholder-card__title">Checkout Architecture</h3>
        <p className="placeholder-card__desc">
          Multi-step checkout workflow configured: Address Selection, Delivery Method,
          Coupon Application, Order Review, and Payment Integration.
        </p>
      </div>
    </div>
  )
}

export default CheckoutPage
