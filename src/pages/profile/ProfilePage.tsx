import React from 'react'
import { Breadcrumb } from '../../components/common/Breadcrumb'
import { useAuth } from '../../hooks'
import '../pages.css'

export const ProfilePage: React.FC = () => {
  const { user } = useAuth()

  return (
    <div className="container page-container">
      <Breadcrumb items={[{ label: 'User Profile' }]} />
      <header className="page-header">
        <h1 className="page-title">My Profile</h1>
        <p className="page-subtitle">Manage personal details, contact info, and addresses</p>
      </header>

      <div className="placeholder-card">
        <h3 className="placeholder-card__title">User Account Architecture</h3>
        <p className="placeholder-card__desc">
          Current user: {user ? `${user.name} (${user.email})` : 'Guest / Authenticated Session'}
        </p>
      </div>
    </div>
  )
}

export default ProfilePage
