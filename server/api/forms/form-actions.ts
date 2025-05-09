import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '~/server/db/firebase'

export const createFormSubmission = async (formType: string, submissionData: any) => {
  try {
    const docRef = await addDoc(collection(db, formType), submissionData);
    return { success: true, docId: docRef.id };
  } catch (error) {
    console.error(`Error creating ${formType} submission:`, error);
    throw new Error(`Error creating ${formType} submission`);
  }
};

export const useAllFirestoreData = async () => {
  const collections = ['users', 'posts', 'comments']
  const allData: any[] = []

  for (const collectionName of collections) {
    const querySnapshot = await getDocs(collection(db, collectionName))
    const collectionData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    allData.push({ collection: collectionName, data: collectionData })
  }

  return allData
}
