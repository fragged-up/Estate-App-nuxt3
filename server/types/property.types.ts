export type Nullable<T> = T | null
export type Optional<T> = T | undefined
export type ImageGallery = {path:string}
export type Property = {
    id: number | string
    slug: string
    image:string
    title: string
    summary:string
    bedrooms: number
    bathrooms: number
    price: number
    location: string
    tagline?:string | null | undefined
}

export type PropertyId = Property & {
    description: string
    areaSqFt: number
    imageGallery: ImageGallery[]
}


export type MaybePropertyId = PropertyId | undefined
export type GetPropertyById = (data: PropertyId, id: string | number) => MaybePropertyId
export type GetProperties = (properties: Property) => Property




