import React from 'react'
import { Star } from 'lucide-react'
import './Rating.css'

export interface RatingProps {
  value: number
  max?: number
  reviewCount?: number
  size?: number
  showValue?: boolean
  className?: string
}

export const Rating: React.FC<RatingProps> = ({
  value,
  max = 5,
  reviewCount,
  size = 14,
  showValue = true,
  className = '',
}) => {
  return (
    <div className={`rating-box ${className}`} aria-label={`Rating ${value} out of ${max}`}>
      <div className="rating-stars">
        {Array.from({ length: max }, (_, index) => {
          const isFilled = index + 1 <= Math.round(value)
          return (
            <Star
              key={index}
              size={size}
              className={isFilled ? 'rating-star--filled' : 'rating-star--empty'}
            />
          )
        })}
      </div>
      {showValue && <span className="rating-value">{value.toFixed(1)}</span>}
      {reviewCount !== undefined && (
        <span className="rating-count">({reviewCount})</span>
      )}
    </div>
  )
}

export default Rating
