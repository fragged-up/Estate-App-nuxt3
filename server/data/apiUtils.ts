
// imageGallery,areaSqFt,description
import { PROPERTIES_API } from ".";
export const getProperties = (properties:any) => {
  const extractedProperties = properties.map((property: any) => {
    const { id, slug, image, title, summary, bedrooms, bathrooms, price, location } = property;
     const santizedId = id.toString();
 
    return {
      santizedId,
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



export const getPropertyById = (id:string) =>{
  const allProps = PROPERTIES_API.map((property)=>property)
  return allProps.filter((prop)=>prop.id.toString() ===id  ) 
  
}