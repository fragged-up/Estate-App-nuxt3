export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type ImageGallery = { path: string }[];

export interface Property {
  id: number;
  slug: string;
  image: string;
  title: string;
  summary: string;
  price: number;
  location: string;
  imageGallery?: ImageGallery;
  bedrooms?: string;
  bathrooms?: string;
  highlight?: string;
}


export type PropertyDetailsProps = Property & {
  description: string;
  areaSqFt: number;
  imageGallery: ImageGallery;
};

export const enum PropertyCardVariant {
  HomePage = 'homePage',
  PropertyPage = 'propertiesPage',
}

export interface PropertyCardProps {
  item: Property;
  variant: PropertyCardVariant;
}

export type GetPropertyById = (data: PropertyDetailsProps[], id: number ) => PropertyDetailsProps | undefined;
export type GetProperties = (properties: PropertyDetailsProps[]) => Property[];
