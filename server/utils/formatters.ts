export const toSlug = (text: string): string =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

export const formatPrice = (price: number, currency: string = '₪'): string =>
  `${currency}${price.toLocaleString('en-US')}`;

export const formatArea = (areaSqFt: number): string => `${areaSqFt.toLocaleString('en-US')} sq ft`;


// usage : 

// import { formatPrice, formatArea, toSlug } from '~/utils/formatters'

// const price = formatPrice(850000) // → ₪850,000
// const area = formatArea(1800)     // → 1,800 sq ft
// const slug = toSlug('Luxury Beach Villa') // → luxury-beach-villa
