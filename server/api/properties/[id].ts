// server/api/properties/[id].ts
import { getPropertyById } from '~/server/utils/getPropertyById'
import { getPropertyDetails } from ~/

export default defineEventHandler((event) => {
  const raw = event.context.params?.id || ''
  const id = raw.split('-').pop()

  if (!id) {
    throw createError({ statusCode: 400, message: 'Missing property ID' })
  }

  const property = getPropertyById(id)

  if (!property) {
    throw createError({ statusCode: 404, message: 'Property not found' })
  }

  return property
})
