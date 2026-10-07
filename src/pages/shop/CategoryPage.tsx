import React from 'react'
import { useParams } from 'react-router-dom'
import { Breadcrumb } from '../../components/common/Breadcrumb'
import { ROUTES } from '../../constants'
import '../pages.css'

export const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>()
  const formattedCategory = category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Category'

  return (
    <div className="container page-container">
      <Breadcrumb
        items={[
          { label: 'Shop', path: ROUTES.SHOP },
          { label: formattedCategory },
        ]}
      />
      <header className="page-header">
        <h1 className="page-title">{formattedCategory} Collection</h1>
        <p className="page-subtitle">
          Explore tailored styles and essentials designed for {formattedCategory}.
        </p>
      </header>

      <div className="placeholder-card">
        <h3 className="placeholder-card__title">{formattedCategory} Products Foundation</h3>
        <p className="placeholder-card__desc">
          Category route active. Filtered products for "{category}" will be displayed here.
        </p>
      </div>
    </div>
  )
}

export default CategoryPage
