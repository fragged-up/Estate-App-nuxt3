import { getPropertyById } from "~/server/data/apiUtils"
export default defineEventHandler(async(event:any) => {

  const { id } = event.context?.params
  const result = getPropertyById(id)

  if(result){
    return result 
  } 
  throw createError({ statusCode: 404, statusMessage: 'Property Not Found' })

})


