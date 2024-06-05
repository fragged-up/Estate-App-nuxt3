/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'foot-image': "url('/public/FooterImage.svg')",
        'hero-about-abst':"url('/public/AbstractDesign.svg')",
        'hero-about-image': "url('/public/HeroAbout.svg')",
        'grey-hero': ' linear-gradient(90deg, rgba(38,38,38,1) 0%, rgba(38,38,38,0.5) 53%, rgba(0,0,0,1) 100%)',
        'unlock-image':"url('/public/unlock/UnlockImage.svg), #333333",
      },
      backgroundPosition: {
        'hero-about-abst': 'center center',
        'hero-about-image': 'right center',
      },
      backgroundSize: {
        'hero-about-abst': 'cover',
        'hero-about-image': 'contain',
      },
      screens: {
         "pad-fix": { "max": "376px" },
          "laptop":  { "min": "1440px" },
     },
      colors: {
        pr:'#703BF7',
        gl:'#999999',
        mg:'#1A1A1A',
        hg:'#262626'
      },
      fontFamily: {
        sans: ['Urbanist', 'sans-serif'], // Add your custom font here
      },
      fontWeight: {
        thin: 100,
        extralight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900, // Add custom font weight here
      },
    },
  },
  plugins: [],
};

