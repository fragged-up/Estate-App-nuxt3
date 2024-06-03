export default defineNuxtRouteMiddleware((to, from) => {
  
  console.log("from : ",from.path);
  console.log("to : ",to.path);
  
})
