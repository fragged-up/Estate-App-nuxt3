import { collection, addDoc, query, where, getDocs, setDoc, doc } from 'firebase/firestore';
import { db } from './firebase';

export const getPropertiesByCity = async (city: any) => {
  const q = query(collection(db, 'properties'), where('location.city', '==', city));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const createProperty = async (propertyData: any) => {
  return await addDoc(collection(db, 'properties'), propertyData);
};

export const getProducts = async () => {
  const snapshot = await getDocs(collection(db, 'properties'));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};




export const pushPropertyToFirestore = async (property: any) => {
  const propertyRef = doc(db, 'properties', property.id.toString());

  try {
    await setDoc(propertyRef, property);
    console.log(`Property ${property.title} pushed successfully to Firestore!`);
  } catch (error) {
    console.error('Error pushing property:', error);
  }
};

// Push multiple properties to Firestore
export const pushAllProperties = async (properties: any) => {
  for (const property of properties) {
    await pushPropertyToFirestore(property);
  }
};
