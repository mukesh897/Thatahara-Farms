export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Peace Farms',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Discover Peace Farms, offering farmlands and luxury 2 & 3 BHK homes near Nandi Hills, Karnataka. Your dream property awaits with stunning views and modern amenities.' },
      { hid: 'keywords', name: 'keywords', content: 'Peace Farms, real estate, farmlands, luxury homes, 2 BHK, 3 BHK, Nandi Hills, Karnataka' },
      { hid: 'og:title', property: 'og:title', content: 'Peace Farms - Farmlands and Luxury Homes near Nandi Hills, Karnataka' },
      { hid: 'og:description', property: 'og:description', content: 'Discover Peace Farms, offering farmlands and luxury 2 & 3 BHK homes near Nandi Hills, Karnataka. Your dream property awaits with stunning views and modern amenities.' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: '' }, 
      { hid: 'og:image', property: 'og:image', content: '' }, 
      { hid: 'twitter:title', name: 'twitter:title', content: 'Peace Farms - Farmlands and Luxury Homes near Nandi Hills, Karnataka' },
      { hid: 'twitter:description', name: 'twitter:description', content: 'Discover Peace Farms, offering farmlands and luxury 2 & 3 BHK homes near Nandi Hills, Karnataka. Your dream property awaits with stunning views and modern amenities.' },
      { hid: 'twitter:image', name: 'twitter:image', content: '' }, 
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo.jpeg' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css','animate.css/animate.min.css'
  ],
  plugins: ['~/plugins/smooth-scroll.js', '~/plugins/mdi.js', '~/plugins/bootstrap.js','~/plugins/jquery.js'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['bootstrap-vue/nuxt'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
