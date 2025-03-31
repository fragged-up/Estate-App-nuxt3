import type { GetProperties, GetPropertyById } from "../types"

export const getPropertyById: GetPropertyById = (data, id) => {
  return data.find((p) => p.id.toString() === id.toString());
};


export const getProperties: GetProperties = (properties) => {
  return properties.map(({ imageGallery, ...rest }) => rest)
}