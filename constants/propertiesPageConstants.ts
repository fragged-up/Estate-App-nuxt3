import type { MiniCard, Cards } from './types'

export const PropertiesCard_Head_1: string = 'Discover a World of Possibilities'
export const PropertiesCard_Head_2: string = "Let's Make it Happen"

export const PropertiesCard_Para_1: string =
  'Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home'
export const PropertiesCard_Para_2: string =
  "Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."

export const hero: MiniCard = {
  head: 'Find Your Dream Property',
  para: 'Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey',
}
export const card_1: MiniCard = {
  head: 'Discover a World of Possibilities',
  para: 'Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home',
}
export const card_2: MiniCard = {
  head: "Let's Make it Happen",
  para: "Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together.",
}
export const properties: Cards[] = ref([
  {
    cardImage: '/Beckos.svg',
    cardTitle: 'Property Title 1',
    cardText: 'Property description 1',
    bedRooms: 3,
    bathRooms: 2,
    cardPrice: '500,000',
  },
  {
    cardImage: '/Beckos.svg',
    cardTitle: 'Property Title 2',
    cardText: 'Property description 2',
    bedRooms: 4,
    bathRooms: 3,
    cardPrice: '750,000',
  },
  {
    cardImage: '/Beckos.svg',
    cardTitle: 'Property Title 2',
    cardText: 'Property description 2',
    bedRooms: 4,
    bathRooms: 3,
    cardPrice: '750,000',
  },
  {
    cardImage: '/Beckos.svg',
    cardTitle: 'Property Title 1',
    cardText: 'Property description 1',
    bedRooms: 3,
    bathRooms: 2,
    cardPrice: '500,000',
  },
  {
    cardImage: '/Beckos.svg',
    cardTitle: 'Property Title 2',
    cardText: 'Property description 2',
    bedRooms: 4,
    bathRooms: 3,
    cardPrice: '750,000',
  },
  {
    cardImage: '/Beckos.svg',
    cardTitle: 'Property Title 2',
    cardText: 'Property description 2',
    bedRooms: 4,
    bathRooms: 3,
    cardPrice: '750,000',
  },
])
