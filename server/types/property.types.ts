export type Nullable<T> = T | null
export type Optional<T> = T | undefined
export type Id = string | number
export type PropertyListItem = {
    id: Id
    slug: string
    title: string
    image: string
    price: number
    location: string
    bedrooms: number
    bathrooms: number
}
export type PropertyImage = {
    id?: number
    path: string
}
export type PropertyId = PropertyListItem & {
    description: string
    areaSqFt: number
    imageGallery: PropertyImage[]
}



export type MaybePropertyId = PropertyId | undefined
export type GetPropertyById = (data: PropertyId[], id: Id) => MaybePropertyId
export type GetProperties = (properties: PropertyId[]) => PropertyListItem[]




