import { getPropertyById } from '~/server/data/apiUtils';

export default defineEventHandler(async (event: any) => {
  const request = event.context.params.id;
  console.log(request);
  if (request) {
    return getPropertyById(request);
  }
});
