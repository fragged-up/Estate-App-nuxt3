import { getPropertyList } from '~/server/utils/getPropertyList'
import { propertyList } from '~/server/data/propertyList'

export default defineEventHandler(() => {
  return getPropertyList(propertyList)
})