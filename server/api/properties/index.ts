import { getProperties } from '~/server/data/apiUtils'
import { PROPERTIES_API } from '~/server/data'

export default defineEventHandler(() => {
  return PROPERTIES_API
})