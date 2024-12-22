/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'navbar': "rgb(243, 243, 243)",
      },
      backgroundImage: {
        'banner-gifting': "url('./src/public/images/bannergifting.webp')",
        'pamela': "url('./src/public/images/pamela.jpeg')",
        'bia': "url('./src/public/images/bia.webp')",
        'ana': "url('./src/public/images/ana.webp')",
        'rafaela': "url('./src/public/images/rafaela.jpeg')",
        'bela': "url('./src/public/images/bela.jpeg')",
        'petrucio': "url('./src/public/images/petrucio.webp')",
        'nikekillshot-home': "url('./src/public/images/nikekillshot-home.webp')",
        'nikedunk': "url('./src/public/images/nikedunk-home.webp')",
        'gifting-corrida': "url('./src/public/images/gifting-corrida.jpg')",
        'banner-main-home-desk': "url('./src/public/images/banner-main-home-desk.png')",
        'banner-main-home-mobile': "url('./src/public/images/banner-main-home-mobile.png')",
        'gifting-treino': "url('./src/public/images/gifting-treino.jpeg')",
        'nikev2k-home': "url('./src/public/images/nikev2k-home.jpeg')",
        'gifting-futebol': "url('./src/public/images/gifting-futebol.jpeg')",
        'gifting-casual': "url('./src/public/images/gifting-casual.png')",
        'gifting-banner-desk': "url('./src/public/images/gifting-banner-desk.avif')",
        'gifting-banner-mobile': "url('./src/public/images/gifting-banner-mobile.avif')",
      },
      height: {
        'height-banner-gifting': '730px',
        'gifting-products-home': '500px',
        'navbar-desktop': '72px',
        'gifting-banner-mobile': '1400px',
      },
      screens: {
        'gifting-banner-desk': {'max': '1125px'},
        'gifting-banner-mobile': {'max': '815px'},
        'escolhidos-atletas-mobile': {'max': '600px'},
        'button-home-ofertas': {'max': '471px'},
        'carrossel': {'max': '470px'},
      },
    },
  },
  plugins: [],
}