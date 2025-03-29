import { collageProperties } from './data'

export default defineEventHandler(async (event) => {
  const { propertyName } = event.context.params as { propertyName: string }

  const property = collageProperties.find(
    (p) => p.propertyName.toLowerCase() === propertyName.toLowerCase()
  )

  if (!property) {
    throw createError({
      statusCode: 404,
      statusMessage: `Property '${propertyName}' not found.`,
    })
  }

  return property
})
