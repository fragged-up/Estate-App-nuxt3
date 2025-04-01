
// imageGallery,areaSqFt,description
import { PROPERTIES_API } from ".";
export const getProperties = (properties:any) => {
  const extractedProperties = properties.map((property: any) => {
    const { id, slug, image, title, summary, bedrooms, bathrooms, price, location } = property;
 
    return {
      id,
      slug,
      image,
      title,
      summary,
      bedrooms,
      bathrooms,
      price,
      location,
      tagline:title
    };
  });

  console.log(extractedProperties); 
  return extractedProperties; 
};



export const getPropertyById = (id:string | number) =>{
  const allProps = PROPERTIES_API.map((property)=>property)
  return allProps.find((prop)=>prop.id === Number(id)  ) 
  
}