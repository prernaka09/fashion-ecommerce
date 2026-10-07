import React from 'react'
import { Breadcrumb } from '../../components/common/Breadcrumb'
import '../pages.css'

export const OrdersPage: React.FC = () => {
  return (
    <div className="container page-container">
      <Breadcrumb items={[{ label: 'Orders' }]} />
      <header className="page-header">
        <h1 className="page-title">My Orders</h1>
        <p className="page-subtitle">Track, return, or review past purchases</p>
      </header>

      <div className="placeholder-card">
        <h3 className="placeholder-card__title">Orders History & Tracking Architecture</h3>
        <p className="placeholder-card__desc">
          Order list status indicators (Pending, Shipped, Delivered), order tracking,
          and return request workflows are configured in Redux and services.
        </p>
      </div>
    </div>
  )
}

export default OrdersPage
