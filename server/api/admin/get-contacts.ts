import { useAllFirestoreData } from "../forms/form-actions";

export default defineEventHandler(async (event) => {
  const result = await useAllFirestoreData()
  console.log(result);
  console.log(event);
  return result;
});
