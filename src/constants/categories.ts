export const DEFAULT_CATEGORIES = [
  { id: '1', name: 'Men', slug: 'men' },
  { id: '2', name: 'Women', slug: 'women' },
  { id: '3', name: 'Kids', slug: 'kids' },
  { id: '4', name: 'Accessories', slug: 'accessories' },
  { id: '5', name: 'Footwear', slug: 'footwear' },
] as const

export const AVAILABLE_SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'] as const

export const AVAILABLE_COLORS = [
  'Black',
  'White',
  'Navy',
  'Beige',
  'Olive',
  'Charcoal',
  'Burgundy',
] as const
