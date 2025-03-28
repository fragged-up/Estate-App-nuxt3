import { collection, getDocs } from 'firebase/firestore'
import { db } from '~/server/utils/firebase'

export const getProducts = async () => {
  const snapshot = await getDocs(collection(db, 'properties'))
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}
