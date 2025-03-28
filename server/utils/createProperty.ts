import { collection,addDoc } from "firebase/firestore";
import { db } from "./firebase";

export const createProperty = async (propertyData)=>{
return await addDoc(collection(db,"properties"),propertyData) ;
}