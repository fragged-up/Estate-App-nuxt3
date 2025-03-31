import type {Id, PropertyId } from '../types'



export const getPropertyById = (data: PropertyId[] ,id: Id): PropertyId | undefined => {
  return data.find((p) => p.id.toString() === id.toString())
}
