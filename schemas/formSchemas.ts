import { z } from 'zod';

export const fullInquirySchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(9, 'Invalid phone number'),
  preferredLocation: z.string().min(1, 'Please select a location'),
  propertyType: z.string().min(1, 'Please select a property type'),
  bathrooms: z.string().min(1, 'Please select the number of bathrooms'),
  bedrooms: z.string().min(1, 'Please select the number of bedrooms'),
  budget: z.string().min(1, 'Please select your budget'),
  contactMethod: z.enum(['phone', 'email'], {
    errorMap: () => ({ message: 'Please select a contact method' }),
  }),
  contactValue: z.string().min(5, 'Please enter your contact information'),
  message: z.string().min(10, 'Please enter your message'),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: 'You must accept the terms and conditions' }),
  }),
});

export const propertyInquirySchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().min(10, 'Invalid phone'),
  message: z.string().min(10, 'Message is too short'),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: 'You must accept the terms' }),
  }),
});

export const contactFormSchema = z.object({
  firstName: z.string().min(2, 'First name is required'),
  lastName: z.string().min(2, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(9, 'Invalid phone number'),
  inquiryType: z.string().optional(),
  howDidYouHearAboutUs: z.enum(['Linkedin', 'Google', 'Facebook'], {
    errorMap: () => ({ message: 'Please select how you heard about us' }),
  }).optional(),
  message: z.string().min(10, 'Please enter your message'),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: 'You must agree to the terms and privacy policy' }),
  }),
});


export type FullInquiryForm = z.infer<typeof fullInquirySchema>;
export type PropertyInquiryForm = z.infer<typeof propertyInquirySchema>;
export type ContactForm = z.infer<typeof contactFormSchema>;
