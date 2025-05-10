import { collection, query, where, getDocs, orderBy, and } from 'firebase/firestore';
import { db } from './firebase';

export const getFilteredProperties = async ({
  location = '',
  propertyType = '',
  priceRange = [0, Infinity],
  areaRange = [0, Infinity],
  buildYear = 0,
}: {
  location?: string;
  propertyType?: string;
  priceRange?: number[];
  areaRange?: number[];
  buildYear?: number;
}) => {
  const filters: any[] = [];

  if (location) {
    filters.push(where('location.city', '==', location));
  }

  if (propertyType) {
    filters.push(where('type', '==', propertyType));
  }

  if (priceRange && priceRange.length === 2) {
    const [minPrice, maxPrice] = priceRange;
    filters.push(where('price', '>=', minPrice));
    filters.push(where('price', '<=', maxPrice));
  }

  if (areaRange && areaRange.length === 2) {
    const [minArea, maxArea] = areaRange;
    filters.push(where('areaSqFt', '>=', minArea));
    filters.push(where('areaSqFt', '<=', maxArea));
  }

  if (buildYear) {
    filters.push(where('buildYear', '>=', buildYear));
  }

  const q = filters.length > 0 ? query(collection(db, 'properties'), ...filters) : collection(db, 'properties');

  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
