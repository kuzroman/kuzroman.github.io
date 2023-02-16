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
})