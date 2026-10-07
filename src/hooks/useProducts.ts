import { useAppDispatch, useAppSelector } from '../store/hooks'
import {
  setProducts,
  setSelectedProduct,
  setProductLoading,
  setProductError,
  setCurrentPage,
} from '../store/slices/productSlice'
import type { Product } from '../types'

export const useProducts = () => {
  const dispatch = useAppDispatch()
  const { items, selectedProduct, loading, error, totalItems, currentPage } =
    useAppSelector((state) => state.products)

  return {
    products: items,
    selectedProduct,
    loading,
    error,
    totalItems,
    currentPage,
    updateProducts: (items: Product[], totalItems?: number) =>
      dispatch(setProducts({ items, totalItems })),
    selectProduct: (product: Product | null) =>
      dispatch(setSelectedProduct(product)),
    setLoading: (loading: boolean) => dispatch(setProductLoading(loading)),
    setError: (error: string | null) => dispatch(setProductError(error)),
    setPage: (page: number) => dispatch(setCurrentPage(page)),
  }
}
