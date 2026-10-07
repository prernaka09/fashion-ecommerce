import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import './CustomerLayout.css'

export const CustomerLayout: React.FC = () => {
  return (
    <div className="customer-layout">
      <Navbar />
      <main className="customer-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default CustomerLayout
