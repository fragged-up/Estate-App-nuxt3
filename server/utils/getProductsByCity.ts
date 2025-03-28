import { collection, query, where, getDocs } from 'firebase/firestore'

export const getPropertiesByCity = async (city:any) => {
  const q = query(
    collection(db, 'properties'),
    where('location.city', '==', city),
  )
  const snapshot = await getDocs(q)
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
}
