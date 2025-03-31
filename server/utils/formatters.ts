export const toSlug = (text: string): string =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

export const formatPrice = (price: number, currency: string = '₪'): string =>
  `${currency}${price.toLocaleString('en-US')}`;

export const formatArea = (areaSqFt: number): string => `${areaSqFt.toLocaleString('en-US')} sq ft`;
