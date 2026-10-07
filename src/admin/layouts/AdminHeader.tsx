import React from 'react'
import { LogOut, UserCircle } from 'lucide-react'
import { useAuth } from '../../hooks'
import { Button } from '../../components/common/Button'
import './AdminHeader.css'

export const AdminHeader: React.FC = () => {
  const { user, logout } = useAuth()

  return (
    <header className="admin-header">
      <div className="admin-header__title">Administration Console</div>

      <div className="admin-header__actions">
        <div className="admin-header__user-info">
          <UserCircle size={18} />
          <span>{user?.name || 'Administrator'}</span>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={logout}
          leftIcon={<LogOut size={14} />}
        >
          Logout
        </Button>
      </div>
    </header>
  )
}

export default AdminHeader
