import { z } from 'zod';
import { createFormSubmission } from './form-actions';
import { fullInquirySchema, propertyInquirySchema } from '~/schemas/formSchemas';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  try {
    let validatedData;
    if (body.formType === 'full_inquiry') {
      validatedData = fullInquirySchema.parse(body);
      const response = await createFormSubmission('full_inquiry', validatedData);

      return {
        success: true,
        message: 'Full Inquiry form submitted successfully!',
        docId: response.docId,
      };
    } else if (body.formType === 'property_inquiry') {
      validatedData = propertyInquirySchema.parse(body);
      const response = await createFormSubmission('property_inquiry', validatedData);

      return {
        success: true,
        message: 'Property Inquiry form submitted successfully!',
        docId: response.docId,
      };
    } else {
      return sendError(
        event,
        createError({
          statusCode: 400,
          message: 'Form type is missing or invalid.',
        }),
      );
    }
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      const zodError = error.errors[0];
      return sendError(
        event,
        createError({
          statusCode: 400,
          message: zodError.message,
        }),
      );
    }

    return sendError(
      event,
      createError({
        statusCode: 500,
        message: 'An unexpected error occurred.',
      }),
    );
  }
});
