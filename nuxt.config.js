module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ResepKu',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Membuat Website PWA dengan mengimplementasikan API MealDB menggunakan nuxt.js' },

      { hid: 'title', name: 'title', content: 'Membuat Website PWA dengan mengimplementasikan API MealDB menggunakan nuxt.js'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css'}
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.4.1.min.js', type: "text/javascript" },
      { src:
        "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
      type: "text/javascript" },
      { src:
        "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
      type: "text/javascript" }
    ],

  },

  modules: [
    '@nuxtjs/pwa',
  ],
  pwa: {
    icon: {
      iconSrc: './static/my_icon.png',
    },
    manifest: {
      name: 'Resep Ku App',
      lang: 'en'
    }
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

