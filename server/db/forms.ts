import { collection, addDoc,  getDocs } from 'firebase/firestore';
import { db } from './firebase';

export const getContactUsSubmissions = async () => {
  const snapshot = await getDocs(collection(db, 'contact_us'));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const createContactUsSubmission = async (submissionData: any) => {
  try {
    const docRef = await addDoc(collection(db, 'contact_us'), submissionData);
    return { success: true, docId: docRef.id };
  } catch (error) {
    console.error('Error creating contact us submission:', error);
    throw new Error('Error creating contact us submission');
  }
};



export const getMakeItHappenSubmissions = async () => {
  const snapshot = await getDocs(collection(db, 'make_it_happen'));
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const createMakeItHappenSubmission = async (submissionData: any) => {
  try {
    const docRef = await addDoc(collection(db, 'make_it_happen'), submissionData);
    return { success: true, docId: docRef.id };
  } catch (error) {
    console.error('Error creating make it happen submission:', error);
    throw new Error('Error creating make it happen submission');
  }
};
