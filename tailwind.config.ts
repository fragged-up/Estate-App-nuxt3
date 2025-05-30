/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
    './error.vue',
  ],

  theme: {
    extend: {
      touchAction:{
        manipulation:'manipulation',
      },
      letterSpacing:{
        custom:'0.07em'
      },
      backgroundImage: {
        'mobile-hero':"url(~/public/base/home/mobile-hero.png)",
        'desktop-hero':"url(~/public/base/home/desktop-hero.png)",
        'foot-image': "url('/public/FooterImage.svg')",
        'hero-about-abst': "url('/public/AbstractDesign.svg')",
        'hero-about-image': "url('/public/HeroAbout.svg')",
        'grey-hero':
          'linear-gradient(90deg, rgba(38,38,38,1) 0%, rgba(38,38,38,0.5) 53%, rgba(0,0,0,1) 100%)',
        'unlock-image': "url('/public/unlock/UnlockImage.svg')",
        'desk-hero': "url('~/public/base/home/DeskRight.svg')",
        'about-us': "url('~/public/base/images/ImageHeroAbout.png')",
        tsr: "url('~/public/base/icons/threeStars.svg')",
        'sea-left': "url('~/public/base/images/leftSeaSide.svg')",
        'sea-right': "url('~/public/base/images/rightSeaSide.svg')",
      },
      backgroundPosition: {
        'hero-about-abst': 'center center',
        'hero-about-image': 'right center',
        'unlock-image': 'center',
        'desktop-hero': 'center center',
        'about-us': 'center',
        tsr: 'left',
      },
      backgroundSize: {
        'hero-about-abst': 'cover',
        'hero-about-image': 'contain',
        'unlock-image': 'cover',
        'desktop-hero': 'cover',
        'about-us': 'contain',
        tsr: 'cover',
      },

      screens: {
        padfix: { max: '376px' },
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        laptop: '1440px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      colors: {
        pr: '#703BF7',
        gl: '#999999',
        mg: '#1A1A1A',
        hg: '#262626',
        fgl: '#141414',
      },
      fontFamily: {
        sans: ['Urbanist', 'sans-serif'],
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
        black: 900,
      },
    },
  },
  plugins: [],
}
