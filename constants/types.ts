export type PropertyCard = {
  id: string | number;
  slug?: string;
  location?: string;
  image: string;
  title: string;
  summary: string;
  bedrooms: number;
  bathrooms: number;
  price: string | number;
  imageGallery?: string[];
  description?: string;
  areaSqFt?: number;
};

export interface Testimonial {
  id: number;
  avatarUrl: string;
  fullName: string;
  location: string;
  headline: string;
  review: string;
  stars: number;
}

export type Cards = {
  id: number;
  cardImage: string;
  cardTitle: string;
  cardText: string;
  bedRooms: string | number;
  bathRooms: string | number;
  cardPrice: string | number;
};
export interface FaqItem {
  id:number;
  question: string;
  answer: string;
}

export interface FaqCardType {
  title: string;
  description: string;
  faqs: FaqItem[];
}

export type MainBlockProps = {
  headerText: string;
  paraText: string;
  contStyle?: string;
  headerStyle?: string;
  subContStyle?: string;
  paraStyle?: string;
  deskHeader?: null | boolean;
  override?: null | boolean;
};
export type InputFields = {
  for?: null | string;
  label?: string;
  inputType: 'text' | 'email' | 'phone' | 'number';
  name: string;
  placeHolder?: string;
};
export type SelectFields = {
  id?: string;
  selectHead: string;
  placeHolder: string;
  label: string;
  options: string[];
};

export type MiniCard = {
  head: string;
  para: string;
};

export type StepsType = {
  stepNo: string;
  stepHead: string;
  stepPara: string;
};

export type LineImages = {
  id: number;
  image?: null | string;
  head: string;
  para?: null | string;
  cWrapper: string;
  svgImage?: null | string;
  gapVal?: null | string;
};

/* start : Reaptead Blocks */

export type RepeatedBlockField = {
  variant: string;
  image: string;
  head: string;
  para: string;
};
export interface RepeatedBlockConfig {
  unlockSec: RepeatedBlockField[];
  effortSec: RepeatedBlockField[];
  smartSec: RepeatedBlockField[];
}
/* end : Reaptead Blocks */

export type ListingBox = {
  id?: number;
  title?: string;
  price?: string | number;
  boxText?: string;
  listingPrice?: null | string | number;
  boxContent?: string;
  addBorder?: string;
  singleText?: string;
};

export type BoxGroups = {
  firstBoxGroup: ListingBox[];
  secondBoxGroup: ListingBox[];
  thirdBoxGroup: ListingBox[];
};
