import type { PropertyId, Id } from './index'
import type { DocumentData, DocumentReference } from 'firebase/firestore'

export type FirestoreDoc<T> = T & { id: Id }

export type GetPropertiesByCity = (city: string) => Promise<FirestoreDoc<PropertyId>[]>

export type GetAllProperties = () => Promise<FirestoreDoc<PropertyId>[]>

export type CreateProperty = (property: PropertyId) => Promise<DocumentReference<DocumentData>>
