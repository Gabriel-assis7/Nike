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
        'banner-gifting': "url('./src/images/home/bannergifting.webp')",
        'pamela': "url('./src/images/home/pamela.jpeg')",
        'bia': "url('./src/images/home/bia.webp')",
        'ana': "url('./src/images/home/ana.webp')",
        'rafaela': "url('./src/images/home/rafaela.jpeg')",
        'bela': "url('./src/images/home/bela.jpeg')",
        'petrucio': "url('./src/images/home/petrucio.webp')",
        'nikekillshot-home': "url('./src/images/home/nikekillshot-home.webp')",
        'nikedunk': "url('./src/images/home/nikedunk-home.webp')",
        'gifting-corrida': "url('./src/images/home/gifting-corrida.jpg')",
        'banner-main-home-desk': "url('./src/images/home/banner-main-home-desk.png')",
        'banner-main-home-mobile': "url('./src/images/home/banner-main-home-mobile.png')",
        'gifting-treino': "url('./src/images/home/gifting-treino.jpeg')",
        'nikev2k-home': "url('./src/images/home/nikev2k-home.jpeg')",
        'gifting-futebol': "url('./src/images/home/gifting-futebol.jpeg')",
        'gifting-casual': "url('./src/images/home/gifting-casual.png')",
        'gifting-banner-desk': "url('./src/images/home/gifting-banner-desk.avif')",
        'gifting-banner-mobile': "url('./src/images/home/gifting-banner-mobile.avif')",
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