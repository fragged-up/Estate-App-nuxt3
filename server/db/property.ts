import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
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
