import type { PropertyListItem, PropertyDetails } from '~/types/property.types'

export const getPropertyList = (data: PropertyDetails[]): PropertyListItem[] => {
  return data.map(({ id, slug, title, image, price, location, bedrooms, bathrooms }) => ({
    id,
    slug,
    title,
    image,
    price,
    location,
    bedrooms,
    bathrooms
  }))
}
