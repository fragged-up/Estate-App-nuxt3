export type PropertyCard = {
  propertyName?: string | number
  propertyLocation?: string
  cardImage: string
  cardTitle: string
  cardText: string
  bedRooms: number
  bathRooms: number
  cardPrice: string
  propertyImages?: string[]
  description?: string
  squareFeet?: string
}
export type Faces = {
  faceImage: string,
  faceName:string,
  faceLocation: string,
  faceHead: string,
  facePara:string,
}
export type Cards = {
  cardImage: string
  cardTitle: string
  cardText:string
  bedRooms: string | number,
  bathRooms: string | number,
  cardPrice: string | number
}
export type Faqs = {
  faqTitle:string
  faqText:string
}
export type MainBlockProps = {
  headerText: string
  paraText: string
  contStyle?: string
  headerStyle?: string
  subContStyle?: string
  paraStyle?: string
  deskHeader?:null | boolean
  override?: null | boolean
}
export type InputFields = {
for: string;
label:string;
inputType: 'text'|'email' |'phone' | 'number' | 'button'; 
name:string;
placeHolder:string;
}
export type SelectFields = {
  selectHead:string;
  placeHolder:string;
  label:string;
  options:string[];
}

export type MiniCard = {
head:string;
para:string;
}

export type StepsType = {
  stepNo:string;
  stepHead:string;
  stepPara:string;
}


export type LineImages = {
image:string;
head:string;
para:string;
cWrapper:string;
}

/* start : Reaptead Blocks */

export type RepeatedBlockField = {
variant:string;
image:string;
head:string;
para:string;
}
export interface RepeatedBlockConfig {
  unlockSec:RepeatedBlockField[];
  effortSec:RepeatedBlockField[];
  smartSec:RepeatedBlockField[];
}

/* end : Reaptead Blocks */