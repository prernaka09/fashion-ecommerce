import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminSidebar from './AdminSidebar'
import AdminHeader from './AdminHeader'
import './AdminLayout.css'

export const AdminLayout: React.FC = () => {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <div className="admin-layout__main">
        <AdminHeader />
        <main className="admin-layout__content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
