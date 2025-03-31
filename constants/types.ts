export type PropertyCard = {
  id:string | number
  slug?: string 
  location?: string
  image: string
  title: string
  summary: string
  bedrooms: number
  bathrooms: number
  price: string | number
  imageGallery?: string[]
  description?: string
  areaSqFt?:number
}
export type Faces = {
  faceImage: string
  faceName: string
  faceLocation: string
  faceHead: string
  facePara: string
}
export type Cards = {
  cardImage: string
  cardTitle: string
  cardText: string
  bedRooms: string | number
  bathRooms: string | number
  cardPrice: string | number
}
export type Faqs = {
  faqTitle: string
  faqText: string
}

export type FaqCardType = {
  head: string
  para: string
  faqs: Faqs[]
}

export type MainBlockProps = {
  headerText: string
  paraText: string
  contStyle?: string
  headerStyle?: string
  subContStyle?: string
  paraStyle?: string
  deskHeader?: null | boolean
  override?: null | boolean
}
export type InputFields = {
  for?: null | string
  label?: string
  inputType: 'text' | 'email' | 'phone' | 'number'
  name: string
  placeHolder?: string
}
export type SelectFields = {
  selectHead: string
  placeHolder: string
  label: string
  options: string[]
}

export type MiniCard = {
  head: string
  para: string
}

export type StepsType = {
  stepNo: string
  stepHead: string
  stepPara: string
}

export type LineImages = {
  image?: null | string
  head: string
  para?: null | string
  cWrapper: string
  svgImage?: null | string
  gapVal?: null | string
}

/* start : Reaptead Blocks */

export type RepeatedBlockField = {
  variant: string
  image: string
  head: string
  para: string
}
export interface RepeatedBlockConfig {
  unlockSec: RepeatedBlockField[]
  effortSec: RepeatedBlockField[]
  smartSec: RepeatedBlockField[]
}
/* end : Reaptead Blocks */

export type ListingBox = {
  id?: number
  title?: string
  price?: string | number
  boxText?: string
  listingPrice?: null | string | number
  boxContent?: string
  addBorder?: string
  singleText?: string
}

export type BoxGroups = {
  firstBoxGroup: ListingBox[]
  secondBoxGroup: ListingBox[]
  thirdBoxGroup: ListingBox[]
}
