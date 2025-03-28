import type {
  Cards,
  Faces,
  Faqs,
  InputFields,
  SelectFields,
  LineImages,
  StepsType,
  RepeatedBlockConfig,
  MiniCard,
  FaqCardType,
  BoxGroups,
} from './types'
import { lightningSVG } from './svgIcons'

export const faces: Faces[] = [
  {
    faceImage: '/home/wadeFace.svg',
    faceName: 'Wade Warren',
    faceLocation: 'USA, California',
    faceHead: 'Exceptional Service!',
    facePara:
      "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
  },
  {
    faceImage: '/home/wadeFace.svg',
    faceName: 'Wade Warren',
    faceLocation: 'USA, California',
    faceHead: 'Exceptional Service!',
    facePara:
      "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
  },
  {
    faceImage: '/home/wadeFace.svg',
    faceName: 'Wade Warren',
    faceLocation: 'USA, California',
    faceHead: 'Exceptional Service!',
    facePara:
      "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
  },
]
export const cards: Cards[] = [
  {
    cardImage: '/home/building.svg',
    cardTitle: 'Rustic Retreat Cottage',
    cardText:
      'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...',
    bedRooms: 4,
    bathRooms: 3,
    cardPrice: '500,000',
  },
  {
    cardImage: '/images/MetroCard.svg',
    cardTitle: 'Metropolitan Haven',
    cardText:
      'A chic and fully-furnished 2-bedroom apartment with panoramic city views...',
    bedRooms: 2,
    bathRooms: 2,
    cardPrice: '500,000',
  },
  {
    cardImage: '/images/SeasideCard.svg',
    cardTitle: 'Rustic Retreat Cottage',
    cardText:
      'A chic and fully-furnished 2-bedroom apartment with panoramic city views...',
    bedRooms: 4,
    bathRooms: 3,
    cardPrice: '500,000',
  },
]
export const faqs: Faqs[] = [
  {
    faqTitle: 'How do I search for properties on Estatein?',
    faqText:
      'Learn how to use our user-friendly search tools to find properties that match your criteria.',
  },
  {
    faqTitle: 'What documents do I need to sell my property through Estatein?',
    faqText:
      'Find out about the necessary documentation for listing your property with us.',
  },
  {
    faqTitle: 'How can I contact an Estatein agent?',
    faqText:
      'Discover the different ways you can get in touch with our experienced agents',
  },
]
export const inputsFields: InputFields[] = [
  {
    for: 'firstName',
    label: 'First Name',
    inputType: 'text',
    name: 'firstName',
    placeHolder: 'Enter First Name',
  },
  {
    for: 'lastName',
    label: 'Last Name',
    inputType: 'text',
    name: 'lastName',
    placeHolder: 'Enter Last Name',
  },
  {
    for: 'Email',
    label: 'Email',
    inputType: 'email',
    name: 'Email',
    placeHolder: 'Enter Email',
  },
  {
    for: 'phone',
    label: 'Phone',
    inputType: 'number',
    name: 'phone',
    placeHolder: 'Enter Phone',
  },
]
export const selectFields: SelectFields[] = [
  {
    selectHead: 'Preferred Location',
    placeHolder: 'Select Location',
    label: 'Select Location',
    options: ['Option1', 'Option 2', 'Option 3'],
  },
  {
    selectHead: 'Property Type',
    placeHolder: 'Select Property Type',
    label: 'Select Location',
    options: ['Option1', 'Option 2', 'Option 3'],
  },
  {
    selectHead: 'No. of Bathrooms',
    placeHolder: 'Select no. of Bathrooms',
    label: 'No. of Bathrooms',
    options: ['Option1', 'Option 2', 'Option 3'],
  },
  {
    selectHead: 'No. of Bedrooms',
    placeHolder: 'Select no. of Bedrooms',
    label: 'No. of Bedrooms',
    options: ['Option1', 'Option 2', 'Option 3'],
  },
  {
    selectHead: 'Budget',
    placeHolder: 'Select Budget',
    label: 'Select Location',
    options: ['Option1', 'Option 2', 'Option 3'],
  },
]
export const lineFieldOne: LineImages[] = [
  {
    image: '/icons/TrustIcon.svg',
    head: 'Trust',
    para: 'Trust is the cornerstone of every successful real estate transaction.',
    cWrapper: 'box-one',
  },

  {
    image: '/icons/ExcellenceIcon.svg',
    head: 'Excellence',
    para: 'We set the bar high for ourselves. From the properties we list to the services we provide.',
    cWrapper: 'box-two',
  },
]

export const lineFieldTwo: LineImages[] = [
  {
    image: '/icons/CentricIcon.svg',
    head: 'Client-Centric',
    para: 'Your dreams and needs are at the center of our universe. We listen, understand.',
    cWrapper: 'box-three',
  },
  {
    image: '/icons/TrustIcon.svg',
    head: 'Our Commitment',
    para: 'We are dedicated to providing you with the highest level of service, professionalism',
    cWrapper: 'box-fourth',
  },
]

export const StepsField: StepsType[] = [
  {
    stepNo: 'Step 01',
    stepHead: 'Discover a World of Possibilities',
    stepPara:
      'Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location,',
  },
  {
    stepNo: 'Step 02',
    stepHead: 'Narrowing Down Your Choices',
    stepPara:
      "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
  },
  {
    stepNo: 'Step 03',
    stepHead: 'Personalized Guidance',
    stepPara:
      'OHave questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.',
  },
  {
    stepNo: 'Step 04',
    stepHead: 'See It for Yourself',
    stepPara:
      "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
  },
  {
    stepNo: 'Step 05',
    stepHead: 'Making Informed Decisions',
    stepPara:
      'Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed.',
  },
  {
    stepNo: 'Step 06',
    stepHead: 'Getting the Best Deal',
    stepPara:
      "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
  },
]

export const repeatedBlockConfig: RepeatedBlockConfig = {
  unlockSec: [
    {
      variant: 'b-frame',
      image: '/unlock/Valut.svg',
      head: 'Valuation Mastery',
      para: 'Discover the true worth of your property with our expert valuation services.',
    },
    {
      variant: 'b-frame',
      image: '/unlock/Strategic.svg',
      head: 'Strategic Marketing',
      para: 'Selling a property requires more than just a listing; it demands a strategic marketing.',
    },
    {
      variant: 'b-frame',
      image: '/unlock/Clossing.svg',
      head: 'Closing Success',
      para: 'A successful sale is not complete until the closing. We guide you through the intricate closing process.',
    },
  ],

  effortSec: [
    {
      variant: 'b-frame',
      image: '/unlock/Tenant.svg',
      head: 'Tenant Harmony',
      para: 'Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.',
    },
    {
      variant: 'b-frame',
      image: '/unlock/Maintain.svg',
      head: 'Maintenance Ease',
      para: 'Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.',
    },
    {
      variant: 'b-frame',
      image: '/unlock/Financial.svg',
      head: 'Financial Peace of Mind',
      para: 'Managing property finances can be complex. Our financial experts take care of rent collection',
    },
  ],

  smartSec: [
    {
      variant: 'b-frame bg-[#141414] laptop:max-h-[260px] laptop:max-w-[395px]',
      image: '/unlock/Market.svg',
      head: 'Market Insight',
      para: 'Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions',
    },
    {
      variant: 'b-frame bg-[#141414] laptop:max-h-[260px] laptop:max-w-[395px]',
      image: '/unlock/ROI.svg',
      head: 'ROI Assessment',
      para: 'Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments',
    },
    {
      variant: 'b-frame bg-[#141414] laptop:max-h-[260px] laptop:max-w-[395px]',
      image: '/unlock/Customized.svg',
      head: 'Customized Strategies',
      para: 'Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs',
    },
    {
      variant: 'b-frame bg-[#141414] laptop:max-h-[260px] laptop:max-w-[395px]',
      image: '/unlock/Diver.svg',
      head: 'Diversification Mastery',
      para: 'Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations',
    },
  ],
}

export const keyFeatures: LineImages[] = [
  {
    svgImage: lightningSVG,
    cWrapper: 'grad-black border-l border-pr p-4',
    gapVal: 'gap-4',
    head: 'Expansive oceanfront terrace for outdoor entertaining',
  },
  {
    svgImage: lightningSVG,
    cWrapper: 'grad-black border-l border-pr p-4',
    gapVal: 'gap-4',
    head: 'Expansive oceanfront terrace for outdoor entertaining',
  },
  {
    svgImage: lightningSVG,
    cWrapper: 'grad-black border-l border-pr p-4',
    gapVal: 'gap-4',
    head: 'Expansive oceanfront terrace for outdoor entertaining',
  },
  {
    svgImage: lightningSVG,
    cWrapper: 'grad-black border-l border-pr p-4',
    gapVal: 'gap-4',
    head: 'Expansive oceanfront terrace for outdoor entertaining',
  },
  {
    svgImage: lightningSVG,
    cWrapper: 'grad-black border-l border-pr p-4',
    gapVal: 'gap-4',
    head: 'Expansive oceanfront terrace for outdoor entertaining',
  },
]

export const scard_1: MiniCard = {
  head: 'Inquire About Seaside Serenity Villa',
  para: 'Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have.',
}

export const scard_2: MiniCard = {
  head: 'Comprehensive Pricing Details',
  para: 'At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision',
}
export const faqCard: FaqCardType = {
  head: 'Frequently Asked Questions',
  para: "Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.",
  faqs: [
    {
      faqTitle: 'How do I search for properties on Estatein?',
      faqText:
        'Learn how to use our user-friendly search tools to find properties that match your criteria.',
    },
    {
      faqTitle:
        'What documents do I need to sell my property through Estatein?',
      faqText:
        'Find out about the necessary documentation for listing your property with us.',
    },
    {
      faqTitle: 'How can I contact an Estatein agent?',
      faqText:
        'Discover the different ways you can get in touch with our experienced agents',
    },
  ],
}

export const BOX_GROUPS: BoxGroups = {
  firstBoxGroup: [
    {
      id: 0,
      title: 'Property Transfer Tax',
      boxText: 'Based on the sale price and local regulations',
      price: '$25,000',
      addBorder: 'border-b border-hg',
    },

    {
      id: 1,
      title: 'Legal Fees',
      boxText: 'Approximate cost for legal services, including title transfer',
      price: '$3,000',
      addBorder: 'border-b border-hg',
    },

    {
      id: 2,
      title: 'Home Inspection',
      boxText: 'Recommended for due diligence',
      price: '$500',
      addBorder: 'border-b border-hg',
    },
    {
      id: 3,
      title: 'Property Insurance',
      boxText: 'Annual cost for comprehensive property insurance',
      price: '$1,200',
      addBorder: 'border-b border-hg',
    },

    {
      id: 4,
      title: 'Mortgage Fees',
      boxText: 'If applicable, consult with your lender for specific details',
      price: 'Varies',
    },
  ],
  secondBoxGroup: [
    {
      id: 0,
      title: 'Listing Price',
      addBorder: 'border-b border-hg',
    },

    {
      id: 1,
      title: 'Additional Fees',
      price: '$29,700',
      boxText: 'Property transfer tax, legal fees, inspection, insurance',
      addBorder: 'border-b border-hg',
    },

    {
      id: 2,
      title: 'Down Payment',
      price: '$29,700',
      boxText: '20%',
      addBorder: 'border-b border-hg w-auto',
    },

    {
      id: 3,
      title: 'Mortgage Amount',
      price: '$1,000,000',
      boxText: 'if applicable',
      addBorder: 'border-b border-hg w-auto',
    },
  ],

  thirdBoxGroup: [
    {
      id: 0,
      title: 'Property Taxes',
      price: '$1,250',
      addBorder: 'border-b border-hg',
    },

    {
      id: 1,
      title: "Homeowners' Association Fee",
      price: '$300',
      addBorder: 'border-b border-hg',
    },
    {
      id: 2,
      title: 'Mortgage Payment',
      singleText: 'Varies based on terms and interest rate',
      addBorder: 'border-b border-hg',
    },

    {
      id: 3,
      title: 'Property Insurance',
      price: '$100',
      boxText: 'Approximate monthly cost',
    },
  ],
}


export const heroSquaresHome = [
  {
    centerIcon: '/icons/homeIcon.svg',
    title: 'Find Your Dream\n Home',
  },
  {
    centerIcon: '/icons/cameraIcon.svg',
    title: 'Unlock Property\n Value',
  },
  {
    centerIcon: '/icons/buildingIcon.svg',
    title: 'Effortless Property\n Management',
  },
  {
    centerIcon: '/icons/sunIcon.svg',
    title: 'Smart Investments,\n Informed Decisions',
  },
]