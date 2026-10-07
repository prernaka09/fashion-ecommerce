import React, { useState } from 'react'
import { Search, X } from 'lucide-react'
import './SearchBar.css'

export interface SearchBarProps {
  placeholder?: string
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  onSearch?: (value: string) => void
  className?: string
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search fashion, brands and categories...',
  value,
  defaultValue = '',
  onChange,
  onSearch,
  className = '',
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue)
  const isControlled = value !== undefined
  const currentValue = isControlled ? value : internalValue

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextVal = e.target.value
    if (!isControlled) setInternalValue(nextVal)
    onChange?.(nextVal)
  }

  const handleClear = () => {
    if (!isControlled) setInternalValue('')
    onChange?.('')
    onSearch?.('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      onSearch?.(currentValue)
    }
  }

  return (
    <div className={`search-bar ${className}`}>
      <span className="search-bar__icon">
        <Search size={18} />
      </span>
      <input
        type="text"
        value={currentValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="search-bar__input"
        aria-label="Search"
      />
      {currentValue && (
        <button
          type="button"
          onClick={handleClear}
          className="search-bar__clear"
          aria-label="Clear search"
        >
          <X size={16} />
        </button>
      )}
    </div>
  )
}

export default SearchBar
