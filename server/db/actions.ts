import type { Query, DocumentData } from 'firebase/firestore';
import { collection, addDoc, query, where, getDocs, setDoc, doc, deleteDoc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

interface Property {
  id: string;
  location: {
    city: string;
  };
  propertyType: string;
  price: number;
  areaSqFt: number;
  buildYear: number;
  // Add other property fields as needed
  [key: string]: any; // To allow for other dynamic properties
}

const propertiesCollection = collection(db, 'properties');

const mapSnapshotToData = (snapshot: any) => snapshot.docs.map((doc:any) => ({ id: doc.id, ...doc.data() })) as Property[];

export const getPropertiesByCity = async (city: string): Promise<Property[]> => {
  const q = query(propertiesCollection, where('location.city', '==', city));
  const snapshot = await getDocs(q);
  return mapSnapshotToData(snapshot);
};

export const getPropertiesByType = async (propertyType: string): Promise<Property[]> => {
  const q = query(propertiesCollection, where('propertyType', '==', propertyType));
  const snapshot = await getDocs(q);
  return mapSnapshotToData(snapshot);
};

export const getPropertiesByPriceRange = async (minPrice: number, maxPrice: number): Promise<Property[]> => {
  const q = query(propertiesCollection, where('price', '>=', minPrice), where('price', '<=', maxPrice));
  const snapshot = await getDocs(q);
  return mapSnapshotToData(snapshot);
};

export const getPropertiesByAreaRange = async (minArea: number, maxArea: number): Promise<Property[]> => {
  const q = query(propertiesCollection, where('areaSqFt', '>=', minArea), where('areaSqFt', '<=', maxArea));
  const snapshot = await getDocs(q);
  return mapSnapshotToData(snapshot);
};

export const getPropertiesByBuildYear = async (buildYear: number): Promise<Property[]> => {
  const q = query(propertiesCollection, where('buildYear', '==', buildYear));
  const snapshot = await getDocs(q);
  return mapSnapshotToData(snapshot);
};

export const getFilteredProperties = async ({
  city,
  propertyType,
  priceRange,
  areaRange,
  buildYear,
}: {
  city?: string;
  propertyType?: string;
  priceRange?: [number, number];
  areaRange?: [number, number];
  buildYear?: number;
}): Promise<Property[]> => {
  let q: Query<DocumentData> = propertiesCollection;

  if (city) {
    q = query(q, where('location.city', '==', city));
  }

  if (propertyType) {
    q = query(q, where('propertyType', '==', propertyType));
  }

  if (priceRange && priceRange[0] !== undefined && priceRange[1] !== undefined) {
    q = query(q, where('price', '>=', priceRange[0]), where('price', '<=', priceRange[1]));
  }

  if (areaRange && areaRange[0] !== undefined && areaRange[1] !== undefined) {
    q = query(q, where('areaSqFt', '>=', areaRange[0]), where('areaSqFt', '<=', areaRange[1]));
  }

  if (buildYear) {
    q = query(q, where('buildYear', '==', buildYear));
  }

  const snapshot = await getDocs(q);
  return mapSnapshotToData(snapshot);
};

export const createProperty = async (propertyData: Omit<Property, 'id'>) => {
  const docRef = await addDoc(propertiesCollection, propertyData);
  return docRef.id;
};

export const getAllProperties = async (): Promise<Property[]> => {
  const snapshot = await getDocs(propertiesCollection);
  return mapSnapshotToData(snapshot);
};

export const getPropertyById = async (id: string): Promise<Property | undefined> => {
  const propertyDocRef = doc(db, 'properties', id);
  const propertyDocSnap = await getDoc(propertyDocRef);
  if (propertyDocSnap.exists()) {
    return { id: propertyDocSnap.id, ...propertyDocSnap.data() } as Property;
  }
  return undefined;
};

export const updateProperty = async (id: string, propertyData: Partial<Omit<Property, 'id'>>) => {
  const propertyDocRef = doc(db, 'properties', id);
  await setDoc(propertyDocRef, propertyData, { merge: true });
};

export const deleteProperty = async (id: string) => {
  const propertyDocRef = doc(db, 'properties', id);
  await deleteDoc(propertyDocRef);
};
