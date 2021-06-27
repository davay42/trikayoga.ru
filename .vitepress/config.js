const getTags = require('vitepress-tags')

const pages = getTags('./')

const meta = {
  title: 'Трика йога',
  description:
    'Открытое собрание мантр, янтр и писаний Трика йоги и Кашмирского шиваизма',
  author: 'Denis Starov',
  tags:
    'трика, йога, мантра, янтра, тантра, священные писания, шива, шива-сутра, бхайрава',
  icon: '/img/sadvidya.svg',
  site: 'www.trikayoga.ru',
}

module.exports = {
  title: meta.title,
  description: meta.description,
  lang: 'en',
  head: [
    ['meta', { name: 'author', content: meta.author }],
    ['meta', { name: 'keywords', content: meta.tags }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: meta.icon }],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'white-translucent',
      },
    ],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'HandheldFriendly', content: 'True' }],
    ['meta', { name: 'MobileOptimized', content: '320' }],
    ['meta', { name: 'theme-color', content: '#0ea5e9' }],

    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: meta.site }],
    ['meta', { name: 'twitter:title', value: meta.title }],
    ['meta', { name: 'twitter:description', value: meta.description }],
    //@ts-ignore
    ['meta', { name: 'twitter:image', content: meta.icon }],

    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en-EN' }],
    ['meta', { property: 'og:site', content: meta.site }],
    ['meta', { property: 'og:site_name', content: meta.title }],
    ['meta', { property: 'og:title', content: meta.title }],
    ['meta', { property: 'og:image', content: meta.icon }],
    ['meta', { property: 'og:description', content: meta.description }],
  ],
  themeConfig: {
    repo: '',
    logo: '/img/sadvidya.svg',
  },
  markdown: {
    config: (md) => {
      md.use(require('markdown-it-classy'))
      md.use(require('markdown-it-container'), 'section')
      md.use(require('markdown-it-external-links'), {
        internalDomains: ['localhost', 'tsoop.ru'],
      })
    },
  },
  customData: {
    pages,
  },
}
