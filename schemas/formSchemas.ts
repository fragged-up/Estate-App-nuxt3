import { z } from 'zod'

/* Full Inquiry Form */
export const fullInquirySchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(10, 'Invalid phone'),
  location: z.string().min(1, 'Select a location'),
  propertyType: z.string().min(1, 'Select property type'),
  bathrooms: z.string().min(1, 'Select bathrooms'),
  bedrooms: z.string().min(1, 'Select bedrooms'),
  budget: z.string().min(1, 'Select budget'),
  contactMethod: z.enum(['phone', 'email']),
  contactValue: z.string().min(5, 'Enter your contact'),
  message: z.string().min(10, 'Enter a message'),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: 'You must accept the terms' }),
  }),
})

/* Property Inquiry Form */
export const propertyInquirySchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(10, 'Invalid phone'),
  message: z.string().min(10, 'Message is too short'),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: 'You must accept the terms' }),
  }),
})

/*  Contact Form */
export const contactFormSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(10, 'Invalid phone number'),
  inquiryType: z.string().min(1, 'Please select inquiry type'),
  referralSource: z.string().min(1, 'Please select how you heard about us'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: 'You must accept the terms' }),
  }),
})

/* Type Inference */
export type FullInquiryForm = z.infer<typeof fullInquirySchema>
export type PropertyInquiryForm = z.infer<typeof propertyInquirySchema>
export type ContactForm = z.infer<typeof contactFormSchema>
