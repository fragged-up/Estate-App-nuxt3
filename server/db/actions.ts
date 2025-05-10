import { collection, doc, addDoc, getDocs, updateDoc, deleteDoc, getDoc } from 'firebase/firestore';
import { db } from './firebase';

export const createDocument = async (collectionName: string, data: any): Promise<string | null> => {
  try {
    const collectionRef = collection(db, collectionName);
    const docRef = await addDoc(collectionRef, data);
    return docRef.id;
  } catch (error) {
    console.error('Error creating document:', error);
    return null;
  }
};

export const readDocuments = async (collectionName: string): Promise<any[]> => {
  try {
    const collectionRef = collection(db, collectionName);
    const querySnapshot = await getDocs(collectionRef);
    const documents = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return documents;
  } catch (error) {
    console.error('Error reading documents:', error);
    return [];
  }
};

export const readDocument = async (collectionName: string, documentId: string): Promise<any | null> => {
  try {
    const docRef = doc(db, collectionName, documentId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
      };
    } else {
      console.warn(`Document with ID ${documentId} not found in collection ${collectionName}`);
      return null;
    }
  } catch (error) {
    console.error('Error reading document: ', error);
    return null;
  }
};

export const updateDocument = async (collectionName: string, documentId: string, data: any): Promise<boolean> => {
  try {
    const docRef = doc(db, collectionName, documentId);
    await updateDoc(docRef, data);
    return true;
  } catch (error) {
    console.error('Error updating document:', error);
    return false;
  }
};

export const deleteDocument = async (collectionName: string, documentId: string): Promise<boolean> => {
  try {
    const docRef = doc(db, collectionName, documentId);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error('Error deleting document:', error);
    return false;
  }
};
