import { defineEventHandler } from "h3";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "~/server/db/firebase"; 

export default defineEventHandler(async (_event) => {
  await addDoc(collection(db, "users"), { name: "John Doe", email: "john@example.com" });

  const snapshot = await getDocs(collection(db, "users"));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
});