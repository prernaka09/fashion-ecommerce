import type { Product } from '../types'

import womenDresses from '../assets/images/women-dresses.jpg'
import womenTops from '../assets/images/women-tops.jpg'
import womenShirts from '../assets/images/women-shirts.jpg'
import womenJeans from '../assets/images/women-jeans.jpg'
import womenTrousers from '../assets/images/women-trousers.jpg'
import womenSkirts from '../assets/images/women-skirts.jpg'
import womenCoords from '../assets/images/women-coords.jpg'
import womenJackets from '../assets/images/women-jackets.jpg'
import womenEthnic from '../assets/images/women-ethnic.jpg'
import womenActivewear from '../assets/images/women-activewear.jpg'
import womenShoes from '../assets/images/women-shoes.jpg'
import womenHandbags from '../assets/images/women-handbags.jpg'
import womenAccessories from '../assets/images/women-accessories.jpg'
import womenJewellery from '../assets/images/women-jewellery.jpg'
import menTshirts from '../assets/images/men-tshirts.jpg'
import menShirts from '../assets/images/men-shirts.jpg'
import menJeans from '../assets/images/men-jeans.jpg'
import menTrousers from '../assets/images/men-trousers.jpg'
import menShorts from '../assets/images/men-shorts.jpg'
import menJackets from '../assets/images/men-jackets.jpg'
import menHoodies from '../assets/images/men-hoodies.jpg'
import menSweaters from '../assets/images/men-sweaters.jpg'
import menEthnic from '../assets/images/men-ethnic.jpg'
import menActivewear from '../assets/images/men-activewear.jpg'
import menShoes from '../assets/images/men-shoes.jpg'
import menWatches from '../assets/images/men-watches.jpg'
import menBags from '../assets/images/men-bags.jpg'
import menAccessories from '../assets/images/men-accessories.jpg'

export interface StoreCategory {
  name: string
  slug: string
  image: string
}

export const womenCategories: StoreCategory[] = [
  { name: 'Dresses', slug: 'dresses', image: womenDresses },
  { name: 'Tops', slug: 'tops', image: womenTops },
  { name: 'Shirts', slug: 'shirts', image: womenShirts },
  { name: 'Jeans', slug: 'jeans', image: womenJeans },
  { name: 'Trousers', slug: 'trousers', image: womenTrousers },
  { name: 'Skirts', slug: 'skirts', image: womenSkirts },
  { name: 'Co-ords', slug: 'co-ords', image: womenCoords },
  { name: 'Jackets', slug: 'jackets', image: womenJackets },
  { name: 'Ethnic Wear', slug: 'ethnic-wear', image: womenEthnic },
  { name: 'Activewear', slug: 'activewear', image: womenActivewear },
  { name: 'Shoes', slug: 'shoes', image: womenShoes },
  { name: 'Handbags', slug: 'handbags', image: womenHandbags },
  { name: 'Accessories', slug: 'accessories', image: womenAccessories },
  { name: 'Jewellery', slug: 'jewellery', image: womenJewellery },
]

export const menCategories: StoreCategory[] = [
  { name: 'T-Shirts', slug: 't-shirts', image: menTshirts },
  { name: 'Shirts', slug: 'shirts', image: menShirts },
  { name: 'Jeans', slug: 'jeans', image: menJeans },
  { name: 'Trousers', slug: 'trousers', image: menTrousers },
  { name: 'Shorts', slug: 'shorts', image: menShorts },
  { name: 'Jackets', slug: 'jackets', image: menJackets },
  { name: 'Hoodies', slug: 'hoodies', image: menHoodies },
  { name: 'Sweaters', slug: 'sweaters', image: menSweaters },
  { name: 'Ethnic Wear', slug: 'ethnic-wear', image: menEthnic },
  { name: 'Activewear', slug: 'activewear', image: menActivewear },
  { name: 'Shoes', slug: 'shoes', image: menShoes },
  { name: 'Watches', slug: 'watches', image: menWatches },
  { name: 'Bags', slug: 'bags', image: menBags },
  { name: 'Accessories', slug: 'accessories', image: menAccessories },
]

type ProductSeed = [name: string, category: string, image: string, price: number]
const womenProducts: ProductSeed[] = [
  ['Draped Midi Dress', 'Dresses', womenDresses, 6990],
  ['Everyday Cotton Top', 'Tops', womenTops, 3290],
  ['Sculpted Cotton Shirt', 'Shirts', womenShirts, 4290],
  ['Relaxed Denim Jean', 'Jeans', womenJeans, 5490],
  ['Linen Tailored Trouser', 'Trousers', womenTrousers, 4990],
  ['Fluid Pleated Skirt', 'Skirts', womenSkirts, 3890],
  ['Soft Knit Co-ord Set', 'Co-ords', womenCoords, 7490],
  ['Linen Everyday Jacket', 'Jackets', womenJackets, 8990],
  ['Embroidered Festive Set', 'Ethnic Wear', womenEthnic, 8290],
  ['Studio Stretch Leggings', 'Activewear', womenActivewear, 2990],
  ['Minimal Leather Sneaker', 'Shoes', womenShoes, 6490],
  ['Everyday Carryall Tote', 'Handbags', womenHandbags, 7990],
  ['Everyday Metal Hair Clips', 'Accessories', womenAccessories, 1590],
  ['Sculpted Gold Hoops', 'Jewellery', womenJewellery, 2490],
]
const menProducts: ProductSeed[] = [
  ['Heavyweight Cotton Tee', 'T-Shirts', menTshirts, 2490],
  ['Oxford Everyday Shirt', 'Shirts', menShirts, 4290],
  ['Straight Fit Denim', 'Jeans', menJeans, 5490],
  ['Pleated Tailored Trouser', 'Trousers', menTrousers, 4990],
  ['Relaxed Weekend Short', 'Shorts', menShorts, 2990],
  ['Utility Field Jacket', 'Jackets', menJackets, 8990],
  ['Relaxed Fleece Hoodie', 'Hoodies', menHoodies, 4990],
  ['Soft Structure Knit', 'Sweaters', menSweaters, 4990],
  ['Textured Festive Kurta', 'Ethnic Wear', menEthnic, 5990],
  ['Studio Training Tee', 'Activewear', menActivewear, 2690],
  ['Minimal Leather Sneaker', 'Shoes', menShoes, 6490],
  ['Classic Steel Watch', 'Watches', menWatches, 9990],
  ['Compact Weekender Bag', 'Bags', menBags, 6990],
  ['Everyday Leather Belt', 'Accessories', menAccessories, 2490],
]

function makeProducts(seeds: ProductSeed[], gender: 'Women' | 'Men'): Product[] {
  return seeds.map(([name, category, image, price], index) => {
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
    const discountPercentage = index % 3 === 0 ? 15 : undefined
    return {
      id: `${gender.toLowerCase()}-${slug}`,
      name,
      slug,
      description: `A considered ${category.toLowerCase()} essential, designed for comfort, versatility and everyday wear.`,
      category,
      gender,
      brand: index % 3 === 0 ? 'Fashion Hub Studio' : index % 3 === 1 ? 'Form & Fold' : 'Common Ground',
      images: [image],
      price,
      ...(discountPercentage ? { discountPercentage, discountPrice: Math.round(price * (1 - discountPercentage / 100)) } : {}),
      sizes: category === 'Watches' || category === 'Handbags' ? ['One size'] : gender === 'Women' ? ['XS', 'S', 'M', 'L'] : ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Sand'],
      stock: 12 + index,
      rating: 4.4 + (index % 6) / 10,
      reviewCount: 18 + index * 3,
      createdAt: `2026-10-${String(1 + index).padStart(2, '0')}`,
    }
  })
}

export const catalog: Product[] = [...makeProducts(womenProducts, 'Women'), ...makeProducts(menProducts, 'Men')]
