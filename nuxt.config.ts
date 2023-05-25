const title  = 'PP ¿El cambio que mereces? - Compromís'
const description = 'El PP no es el cambio que mereces, és el mateix PP corrupte i malbaratador de sempre.'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: title,
      htmlAttrs: { lang: 'ca' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: description },
        { hid: 'keywords', name: 'keywords', content: 'el cambio que mereces, pp, compromís, corrupción, elecciones autonomicas, comunidad valenciana, pais valencia, valencia' },
        { hid: 'robots', name: 'robots', content: 'index, follow' },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: 'og:locale', property: 'og:locale', content: 'ca' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:description', property: 'og:description', content: description },
        { hid: 'og:image', property: 'og:image', content: 'https://elcambioquemereces.com/images/ogimage.png' },
        { hid: 'og:url', property: 'og:url', content: 'https://elcambioquemereces.com' },
        { hid: 'twitter:site', property: 'twitter:site', content: '@compromis' },
        { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
        { hid: 'twitter:title', property: 'twitter:title', content: title },
        { hid: 'twitter:description', property: 'twitter:description', content: description },
        { hid: 'twitter:image', property: 'twitter:image', content: 'https://elcambioquemereces.com/images/ogimage.png' },
        { hid: 'twitter:url', property: 'twitter:url', content: 'https://elcambioquemereces.com' },
        { name: 'theme-color', content: '#344786' },
        { name: 'color-scheme', content: 'light only' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicon32.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/images/favicon192.png' }
      ],
    }
  },

  css: ['@compromis/blobby/scss/blobby.scss'],

  modules: [
    'nuxt-gtag'
  ],

  gtag: {
    id: 'G-LDPZQVQR38'
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "~/assets/scss/variables";
            @import "@compromis/blobby/scss/variables";
            @import "bootstrap/scss/functions";
            @import "bootstrap/scss/variables";
            @import "bootstrap/scss/maps";
            @import "bootstrap/scss/mixins";
          `
        }
      }
    }
  },

  build: {
    transpile: ['gsap']
  }
})
