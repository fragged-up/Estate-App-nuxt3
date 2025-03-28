import type { InputFields, SelectFields, BoxGroups } from './types'

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
