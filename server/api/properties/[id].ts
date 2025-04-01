import { getPropertyById } from "~/server/data/apiUtils"
export default defineEventHandler((event:any) => {

  const{ params }= event.context?.params.id 
  const { id } = params.toString() 
  const result = getPropertyById(id)
  console.log("id",id);
  console.log("result",result);
  setTimeout(()=>{
   
    if(!result ){
      throw createError({ statusCode: 404, statusMessage: 'Property Not Found' })
    } 
  },3000)
  
  return result

})


