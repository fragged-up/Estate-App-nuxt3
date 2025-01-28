import type { InputFields, SelectFields, } from './types'

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
    options:['Option1', 'Option 2', 'Option 3']
    
  },
  {
    selectHead: 'Property Type',
    placeHolder: 'Select Property Type',
    label: 'Select Location',
    options:['Option1', 'Option 2', 'Option 3']
    
  },
  {
    selectHead: 'No. of Bathrooms',
    placeHolder: 'Select no. of Bathrooms',
    label: 'No. of Bathrooms',
    options:['Option1', 'Option 2', 'Option 3']
    
  },
  {
    selectHead: 'No. of Bedrooms',
    placeHolder: 'Select no. of Bedrooms',
    label: 'No. of Bedrooms',
    options:['Option1', 'Option 2', 'Option 3']
    
  },
  {
    selectHead: 'Budget',
    placeHolder: 'Select Budget',
    label: 'Select Location',
    options:['Option1', 'Option 2', 'Option 3']
    
  },
]





// const hhh1 = 'Market Insight'
// const hhh2 = 'ROI Assessment'
// const hhh3 = 'Customized Strategies'
// const hhh4 = 'Diversification Mastery'



// const ppp1 =
// 'Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions'
// const ppp2 =
// 'Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments'
// const ppp3 =
// 'Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs'
// const ppp4 =
// 'Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations'