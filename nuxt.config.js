export default {

  target: 'static',

  router: {
    base: '/ev_nuxtjs_website_page-1/'
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Оценочная компания ООО "Эверест Консалтинг", работаем с 2010 года.', // ev_nuxt_js_website
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: "Занимаемся оценкой нематериальных активов, оценка бизнеса, Оценка материальных активов (недвижимое имущество, машины и оборудование, транспортные средства и пр.). Для целей страхования,кредитования под залог, Переоценка основных средств для целей бухгалтерского учета и подготовки финансовой   отчетности в соответствии с требованиями РСБУ / ПБУ"},
      {name: 'format-detection', content: 'telephone=+79516962121'},
      {name: 'author', content: 'ООО "Эверест консалтинг" '}
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon_16x16.ico'
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap",
      },
{
  rel: "stylesheet",
    href: "https://fonts.cdnfonts.com/css/sf-pro-display",
},
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}
