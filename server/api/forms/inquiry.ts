import { z } from 'zod';
import { createFormSubmission } from './form-actions';
import { fullInquirySchema } from '~/schemas/formSchemas';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log("event:",event);
       console.log("body:",body);
  try {
    const validatedData = fullInquirySchema.parse(body);
    const response = await createFormSubmission('inquiry_form', validatedData);

    return {
      success: true,
      message: 'Inquiry form submitted successfully!',
      docId: response.docId,
    };
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
