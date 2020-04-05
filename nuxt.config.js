
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'COVID-19 mapa uživo, informacije, aktulenosti -> Bosna i Hercegovina',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Cookie' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:400,500,700,900&display=swap' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css',integrity: "sha256-h20CPZ0QyXlBuAw7A+KluUYx/3pK+c7lYEpqLTlxjYQ=",crossorigin: "anonymous" }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/main.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    { src: '~plugins/social-sharing', ssr: false },
    { src: '~plugins/moment', ssr: false },
    { src: '~plugins/back-to-top', ssr: false },
    { src: '~plugins/vue-paginate'}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    'nuxt-leaflet',
    ['@nuxtjs/google-analytics', {
      id: 'UA-161970206-1'
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-leaflet', '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'https://koronavirusbih.com',
    gzip: true,
    routes: [
      '/post/1',
      '/post/2',
      'post/3',
      'post/4',
      'post/5',
      'post/6',
      'post/7',
      'post/8',
      'post/9',
      'post/10','post/11','post/12'
    ]
  },
  /*
  ** Build configuration
  */
   build: {
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
