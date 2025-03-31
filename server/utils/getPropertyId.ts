// utils/stripPropertyImages.ts

import { PropertyItem } from "../types"


  type PropertyWithoutImages = Omit<Property, 'propertyImages'>
  
  export function stripPropertyImages(property: Property): PropertyWithoutImages {
     
    const { propertyImages, ...rest } = property
    return rest
  }
  