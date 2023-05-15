export default {
  title: 'Vue Truncate Readmore',
  description: 'A Vue.js plugin to truncate and expand text content with a customizable read more/less button.',
  base: '/vue-read-more-truncate/',
  themeConfig: {
    nav: [
      { text: 'Installation', link: '/installation' },
    ],
    sidebar: [
      {
        text: 'Installation & Registration',
        items: [
          { text: 'installation', link: '/installation' },
          { text: 'registration', link: '/registration' },
        ],
      },
      {
        text: 'Usage',
        items: [
          { text: 'usage-vue2', link: '/usage-v2' },
          { text: 'usage-vue3', link: '/usage-v3' },
          { text: 'usage-as-wrapper', link: '/warpper-usage' },
          { text: 'props', link: '/props' },
        ],
      },
    ],
  },
};
