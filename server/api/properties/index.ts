import { getProperties } from '~/server/utils/getProperties'
import { PROPERTIES_API } from '~/server/data'

export default defineEventHandler(() => {
  return getProperties(PROPERTIES_API)
})