import type {
  Cards,
  FaqItem,
  InputFields,
  SelectFields,
  LineImages,
  StepsType,
  BoxGroups,
  Testimonial,
} from './types';

export const testimonials: Testimonial[] = [
  {
    id: 1,
    avatarUrl: '/home/wadeFace.svg',
    fullName: 'Wade Warren',
    location: 'USA, California',
    headline: 'Exceptional Service!',
    review:
      "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    stars: 4.5,
  },
  {
    id: 2,
    avatarUrl: '/home/wadeFace.svg',
    fullName: 'Wade Warren',
    location: 'USA, California',
    headline: 'Exceptional Service!',
    review:
      "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    stars: 4,
  },
  {
    id: 3,
    avatarUrl: '/home/wadeFace.svg',
    fullName: 'Wade Warren',
    location: 'USA, California',
    headline: 'Exceptional Service!',
    review:
      "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    stars: 5,
  },
  {
    id: 4,
    avatarUrl: '/home/wadeFace.svg',
    fullName: 'Wade Warren',
    location: 'USA, California',
    headline: 'Exceptional Service!',
    review:
      "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    stars: 4.5,
  },
  {
    id: 5,
    avatarUrl: '/home/wadeFace.svg',
    fullName: 'Wade Warren',
    location: 'USA, California',
    headline: 'Exceptional Service!',
    review:
      "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    stars: 4,
  },
  {
    id: 6,
    avatarUrl: '/home/wadeFace.svg',
    fullName: 'Wade Warren',
    location: 'USA, California',
    headline: 'Exceptional Service!',
    review:
      "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    stars: 5,
  },
];

export const cards: Cards[] = [
  {
    id: 1,
    cardImage: '/home/building.svg',
    cardTitle: 'Rustic Retreat Cottage',
    cardText: 'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...',
    bedRooms: 4,
    bathRooms: 3,
    cardPrice: '500,000',
  },
  {
    id: 2,
    cardImage: '/images/MetroCard.svg',
    cardTitle: 'Metropolitan Haven',
    cardText: 'A chic and fully-furnished 2-bedroom apartment with panoramic city views...',
    bedRooms: 2,
    bathRooms: 2,
    cardPrice: '500,000',
  },
  {
    id: 3,
    cardImage: '/images/SeasideCard.svg',
    cardTitle: 'Rustic Retreat Cottage',
    cardText: 'A chic and fully-furnished 2-bedroom apartment with panoramic city views...',
    bedRooms: 4,
    bathRooms: 3,
    cardPrice: '500,000',
  },
];

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
];
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
];
export const lineFieldOne: LineImages[] = [
  {
    id: 1,
    image: '/icons/TrustIcon.svg',
    head: 'Trust',
    para: 'Trust is the cornerstone of every successful real estate transaction.',
    cWrapper: 'box-one',
  },

  {
    id: 2,
    image: '/icons/ExcellenceIcon.svg',
    head: 'Excellence',
    para: 'We set the bar high for ourselves. From the properties we list to the services we provide.',
    cWrapper: 'box-two',
  },
];

export const lineFieldTwo: LineImages[] = [
  {
    id: 1,
    image: '/icons/CentricIcon.svg',
    head: 'Client-Centric',
    para: 'Your dreams and needs are at the center of our universe. We listen, understand.',
    cWrapper: 'box-three',
  },
  {
    id: 2,
    image: '/icons/TrustIcon.svg',
    head: 'Our Commitment',
    para: 'We are dedicated to providing you with the highest level of service, professionalism',
    cWrapper: 'box-fourth',
  },
];

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
];





export const faqs: FaqItem[] = [
  {
    id: 1,
    question: 'How do I search for properties on Estatein?',
    answer: 'Learn how to use our user-friendly search tools to find properties that match your criteria.',
  },
  {
    id: 2,
    question: 'What documents do I need to sell my property through Estatein?',
    answer: 'Find out about the necessary documentation for listing your property with us.',
  },
  {
    id: 3,
    question: 'How can I contact an Estatein agent?',
    answer: 'Discover the different ways you can get in touch with our experienced agents',
  },
  {
    id: 4,
    question: 'How do I search for properties on Estatein?',
    answer: 'Learn how to use our user-friendly search tools to find properties that match your criteria.',
  },
  {
    id: 5,
    question: 'What documents do I need to sell my property through Estatein?',
    answer: 'Find out about the necessary documentation for listing your property with us.',
  },
  {
    id: 6,
    question: 'How can I contact an Estatein agent?',
    answer: 'Discover the different ways you can get in touch with our experienced agents',
  },
];

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
};

export const HERO_HIGHLIGHTS = [
  { id: 1, icon: '/icons/homeIcon.svg', title: 'Find Your Dream\n Home', link:'/properties'},
  { id: 2, icon: '/icons/cameraIcon.svg', title: 'Unlock Property\n Value',link:'/properties' },
  { id: 3, icon: '/icons/buildingIcon.svg', title: 'Effortless Property\n Management',link:'/properties' },
  { id: 4, icon: '/icons/sunIcon.svg', title: 'Smart Investments,\n Informed Decisions',link:'/properties' },
];

export const CONTACT_HERO = [
  { id: 5, icon: '/icons/homeIcon.svg', title: 'info@estatein.com' },
  { id: 6, icon: '/icons/cameraIcon.svg', title: '+1 (123) 456-7890' },
  { id: 7, icon: '/icons/buildingIcon.svg', title: 'Instagram / Linkedin / Facebook ' },
  { id: 8, icon: '/icons/sunIcon.svg', title: 'Main Headquarters' },
];

export const PROPERTIES_CONFIG = {
  title: 'Unlock Property Value',
  summary: 'Selling your property should be a rewarding experience, and at Estatein, we make sure it is.',

  features: [
    {
      id: 1,
      icon: '/unlock/Valut.svg',
      title: 'Valuation Mastery',
      description: 'Discover the true worth of your property with our expert valuation services.',
    },
    {
      id: 2,
      icon: '/unlock/Strategic.svg',
      title: 'Strategic Marketing',
      description: 'Selling a property requires more than just a listing; it demands a strategic marketing.',
    },
    {
      id: 3,
      icon: '/unlock/Negotiation.svg',
      title: 'Negotiation Wizardry',
      description: 'Negotiating the best deal is an art, and our negotiation experts are masters of it.',
    },
    {
      id: 4,
      icon: '/unlock/Clossing.svg',
      title: 'Closing Success',
      description: 'A successful sale is not complete until the closing. We guide you through the intricate closing process.',
    },
  ],
  experties: {
    title: 'Unlock the Value of Your Property Today',
    description:
      'Ready to unlock the true value of your property? Explore our Property Selling Service categories and let us help you achieve the best deal possible for your valuable asset.',
    text: 'Learn More',
  },
};

export const EFFORTS_CONFIG = {
  title: 'Effortless Property Management',
  summary: "Owning a property should be a pleasure, not a hassle. Estatein's Property Management Service takes the stress out of property ownership.",
  features: [
    {
      id: 1,
      icon: '/unlock/Tenant.svg',
      title: 'Tenant Harmony',
      description: 'Discover the true worth of your property with our expert valuation services.',
    },
    {
      id: 2,
      icon: '/unlock/Maintain.svg',
      title: 'Maintenance Ease',
      description: 'Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.',
    },
    {
      id: 3,
      icon: '/unlock/Financial.svg',
      title: 'Financial Peace of Mind',
      description: 'Managing property finances can be complex. Our financial experts take care of rent collection',
    },
    {
      id: 4,
      icon: '/unlock/Legal.svg',
      title:'Legal Guardian',
      description:'Stay compliant with property laws and regulations effortlessly.',

    },
  ],
  experties: {
    title: 'Experience Effortless Property Management',
    description:
      'Ready to experience hassle-free property management? Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.',
    text: 'Learn More',
  },
};

export const SMART_CONFIG = {
  title: 'Smart Investments, Informed Decisions',
  summary:
    "Building a real estate portfolio requires a strategic approach. Estatein's Investment Advisory Service empowers you to make smart investments and informed decisions.",

  features: [
    {
      id: 1,
      icon: '/unlock/Market.svg',
      title: 'Market Insight',
      description:
        'Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions',
    },
    {
      id: 2,
      icon: '/unlock/ROI.svg',
      title: 'ROI Assessment',
      description:
        'Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments',
    },
    {
      id: 3,
      icon: '/unlock/Customized.svg',
      title: 'Customized Strategies',
      description:
        'Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs',
    },
    {
      id: 4,
      icon: '/unlock/Diver.svg',
      title: 'Diversification Mastery',
      description:
        'Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations',
    },
  ],

  experties: {
    title: 'Unlock Your Investment Potential',
    description:
      'Explore our Property Management Service categories and let us handle the complexities while you enjoy the benefits of property ownership.',
    text: 'Learn More',
  },
};
