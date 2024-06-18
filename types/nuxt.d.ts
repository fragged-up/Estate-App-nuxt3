// types/nuxt.d.ts
declare module '#app' {
  interface NuxtApp {
    $loadImage(path: string): string;
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $loadImage(path: string): string;
  }
}