import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

async function fetchCollection(collectionName: string) {
  try {
    const collectionRef = collection(db, collectionName);
    const querySnapshot = await getDocs(collectionRef);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error(`Error fetching ${collectionName}:`, error);
    return [];
  }
}

export async function useFilterOptions() {
  const locationOptions = await fetchCollection('locations');
  const propertyTypeOptions = await fetchCollection('propertyTypes');
  const pricingRangeOptions = await fetchCollection('pricingRanges');
  const propertySizeOptions = await fetchCollection('propertySizes');
  const buildYearOptions = await fetchCollection('buildYears');

  return {
    locationOptions,
    propertyTypeOptions,
    pricingRangeOptions,
    propertySizeOptions,
    buildYearOptions,
  };
}
