import { collection, addDoc } from 'firebase/firestore';
import { db } from '~/server/db/firebase';

export const createFormSubmission = async (formType: string, submissionData: any) => {
  try {
    const docRef = await addDoc(collection(db, formType), submissionData);
    return { success: true, docId: docRef.id };
  } catch (error) {
    console.error(`Error creating ${formType} submission:`, error);
    throw new Error(`Error creating ${formType} submission`);
  }
};
