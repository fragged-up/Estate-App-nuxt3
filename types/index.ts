export type Nullable<T> = T | null
export type Optional<T> = T | undefined
export type ImageGallery = {path:string}


export type Property = {
    id: number | string
    slug: string
    image:string
    title: string
    summary:string
    bedrooms?: null | number
    bathrooms?: null | number
    price: number
    location: string
    tagLine: string | null | undefined
}

export type PropertyId = Property & {
    description: string
    areaSqFt: number
    imageGallery: ImageGallery[]
}



export type MaybePropertyId = PropertyId | undefined
export type GetPropertyById = (data: PropertyId[], id: number | string) => MaybePropertyId
export type GetProperties = (properties: PropertyId[]) => Property[]



