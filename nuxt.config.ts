// import AutoImport from 'unplugin-auto-import/vite'
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// import ElementPlus from 'unplugin-element-plus/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      // viewport: 'width=500, initial-scale=1',
      title: 'Roman Smith',
      meta: [
        { name: 'description', content: 'Kuzroman Frontend Developer' }
      ],
      script: [
        { src: 'https://www.googletagmanager.com/gtag/js?id=G-XWDSRJ4TEC' },
      ]
    }
  }
  // router: {
  //   base: '/nuxt3/' // base: '/<repository>/'
  // }
    // ... other options
  // build: {
  //   transpile: ['element-plus/es'],
  // },
  // vite: {
  //   plugins: [ElementPlus()],
  // },
  // plugins: {
  //   { src: '~/plugins/lingallery', ssr: false }
  // }
})