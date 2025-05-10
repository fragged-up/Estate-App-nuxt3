import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

const getProperties = async () => {
  const collectionRef = collection(db, "properties");
  const querySnapshot = await getDocs(collectionRef);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    location: doc.data().location,
    areaSqFt: doc.data().areaSqFt,
    buildYear: doc.data().buildYear,
    propertyType: doc.data().propertyType,
    price: doc.data().price,
  }));
};

const fetchAndProcessProperties = async () => {
  const properties = await getProperties();
  if (properties && properties.length > 0) {
    const prices = properties.map(prop => prop.price).filter(price => typeof price === 'number');
    if (prices.length > 0) {
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);
      console.log("Minimum Price:", minPrice);
      console.log("Maximum Price:", maxPrice);

    } else {
      console.log("No price information available in the properties.");
    }
    return properties;
  } else {
    console.log("No properties found.");
    return [];
  }
};

fetchAndProcessProperties();









// Example of how to use the function:
getProperties()
  .then(properties => {
    console.log("Properties:", properties);
  })
  .catch(error => {
    console.error("Error fetching properties:", error);
  });
