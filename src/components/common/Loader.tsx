import React from 'react'
import Spinner from './Spinner'
import './Loader.css'

export interface LoaderProps {
  text?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export const Loader: React.FC<LoaderProps> = ({
  text = 'Loading...',
  size = 'md',
  className = '',
}) => {
  return (
    <div className={`full-loader-container ${className}`}>
      <Spinner size={size} />
      {text && <p className="loader-text">{text}</p>}
    </div>
  )
}

export default Loader
