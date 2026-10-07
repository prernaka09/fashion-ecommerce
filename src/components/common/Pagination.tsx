import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import './Pagination.css'

export interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className = '',
}) => {
  if (totalPages <= 1) return null

  const getPageNumbers = () => {
    const pages: (number | string)[] = []
    const delta = 1

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        pages.push(i)
      } else if (pages[pages.length - 1] !== '...') {
        pages.push('...')
      }
    }
    return pages
  }

  return (
    <nav className={`pagination ${className}`} aria-label="Pagination">
      <button
        type="button"
        className="pagination__btn"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        aria-label="Previous page"
      >
        <ChevronLeft size={16} />
      </button>

      {getPageNumbers().map((page, idx) => {
        if (page === '...') {
          return (
            <span key={`dots-${idx}`} className="pagination__ellipsis">
              ...
            </span>
          )
        }
        const pageNum = page as number
        return (
          <button
            key={pageNum}
            type="button"
            className={`pagination__btn ${
              pageNum === currentPage ? 'pagination__btn--active' : ''
            }`}
            onClick={() => onPageChange(pageNum)}
            aria-current={pageNum === currentPage ? 'page' : undefined}
          >
            {pageNum}
          </button>
        )
      })}

      <button
        type="button"
        className="pagination__btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        aria-label="Next page"
      >
        <ChevronRight size={16} />
      </button>
    </nav>
  )
}

export default Pagination
