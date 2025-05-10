import { collection, getDocs } from 'firebase/firestore';
import { db } from '~/server/db/firebase';


export default defineEventHandler(async () => {
  try {
    const collectionRef = collection(db, 'properties');
    const querySnapshot = await getDocs(collectionRef);
    const properties = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      slug:doc.data().slug,
      location: doc.data().location,
      areaSqFt: doc.data().areaSqFt,
      buildYear: doc.data().buildYear,
      propertyType: doc.data().propertyType,
      price: doc.data().price,
    }));

    const prices = properties
      .map((prop) => prop.price)
      .filter((price) => typeof price === 'number');
    const minPrice = prices.length > 0 ? Math.min(...prices) : null;
    const maxPrice = prices.length > 0 ? Math.max(...prices) : null;

    return {
      properties,
      priceRange: {
        min: minPrice,
        max: maxPrice,
      },
    };
  } catch (error) {
    console.error('Error fetching properties:', error);
    return {
      error: 'Failed to fetch properties',
      properties: [],
      priceRange: { min: null, max: null },
    };
  }
});


