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
        'banner-gifting': "url('./src/images/bannergifting.webp')",
        'pamela': "url('./src/images/pamela.jpeg')",
        'bia': "url('./src/images/bia.webp')",
        'ana': "url('./src/images/ana.webp')",
        'rafaela': "url('./src/images/rafaela.jpeg')",
        'bela': "url('./src/images/bela.jpeg')",
        'petrucio': "url('./src/images/petrucio.webp')",
        'nikekillshot-home': "url('./src/images/nikekillshot-home.webp')",
        'nikedunk': "url('./src/images/nikedunk-home.webp')",
        'gifting-corrida': "url('./src/images/gifting-corrida.jpg')",
        'banner-main-home-desk': "url('./src/images/banner-main-home-desk.png')",
        'banner-main-home-mobile': "url('./src/images/banner-main-home-mobile.png')",
        'gifting-treino': "url('./src/images/gifting-treino.jpeg')",
        'nikev2k-home': "url('./src/images/nikev2k-home.jpeg')",
        'gifting-futebol': "url('./src/images/gifting-futebol.jpeg')",
        'gifting-casual': "url('./src/images/gifting-casual.png')",
        'gifting-banner-desk': "url('./src/images/gifting-banner-desk.avif')",
        'gifting-banner-mobile': "url('./src/images/gifting-banner-mobile.avif')",
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