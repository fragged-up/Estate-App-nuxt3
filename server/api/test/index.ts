// server/api/test/index.ts

import { useFilterOptions } from "~/server/db/schemes";

export default defineEventHandler(async () => {
  try {
    const filterOptions = await useFilterOptions();
    return { data: filterOptions };
  } catch (error: any) {
    console.error('Error fetching filter options:', error);
    return { message: 'Failed to fetch filter options', error: error.message };
  }
});
