import React from 'react'
import '../../pages/pages.css'

export const DashboardPage: React.FC = () => {
  return (
    <div>
      <header className="page-header">
        <h1 className="page-title">Admin Dashboard</h1>
        <p className="page-subtitle">Overview of sales, inventory status, and recent activity</p>
      </header>

      <div className="placeholder-card">
        <h3 className="placeholder-card__title">Admin Metrics & Analytics Architecture</h3>
        <p className="placeholder-card__desc">
          Ready for sales statistics, revenue figures, order count summaries, and low-stock alerts.
        </p>
      </div>
    </div>
  )
}

export default DashboardPage
