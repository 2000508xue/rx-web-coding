import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ignoreDeadLinks: true, // 忽略所有无效链接检测
  title: 'rx-web-coding',
  lang: 'en-US',
  description: 'Front-end coding engineering specifications',
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  cleanUrls: true,
  base: '/rx-web-coding/',
  appearance: 'dark',
  themeConfig: {
    logo: '/images/logo.png',
    search: {
      provider: 'local',
      options: {
        miniSearch: {
          /**
           * @type {Pick<import('minisearch').Options, 'extractField' | 'tokenize' | 'processTerm'>}
           */
          options: {
            /* ... */
          },
          /**
           * @type {import('minisearch').SearchOptions}
           * @default
           * { fuzzy: 0.2, prefix: true, boost: { title: 4, text: 2, titles: 1 } }
           */
          searchOptions: {
            /* ... */
          },
        },
      },
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/index' },
      {
        text: '编码规范',
        items: [
          { text: 'HTML 编码规范', link: '/coding/html' },
          { text: 'CSS 编码规范', link: '/coding/css.md' },
          { text: 'JavaScript 编码规范', link: '/coding/javascript.md' },
          { text: 'Typescript 编码规范', link: '/coding/typescript.md' },
          { text: 'Node 编码规范', link: '/coding/node.md' },
        ],
      },
      {
        text: '工程规范',
        items: [
          { text: 'Git 规范', link: '/engineering/git.md' },
          { text: '文档规范', link: '/engineering/doc.md' },
          { text: 'CHANGELOG 规范', link: '/engineering/changelog.md' },
        ],
      },
      {
        text: 'NPM包',
        items: [
          { text: 'rx-web-coding-eslint-config', link: '/npm/eslint.md' },
          { text: 'rx-web-coding-stylelint-config', link: '/npm/stylelint.md' },
          { text: 'rx-web-coding-commitlint-config', link: '/npm/commitlint.md' },
          { text: 'rx-web-coding-markdownlint-config', link: '/npm/markdownlint.md' },
          { text: 'rx-web-coding-eslint-plugin', link: '/npm/eslint-plugin.md' },
        ],
      },
      {
        text: '脚手架',
        items: [{ text: 'encode-fe-lint', link: '/cli/encode-fe-lint.md' }],
      },
    ],

    sidebar: [
      {
        text: '编码规范',
        collapsed: true,
        items: [
          {
            text: 'HTML 编码规范',
            link: '/coding/html.md',
          },
          {
            text: 'CSS 编码规范',
            link: '/coding/css.md',
          },
          {
            text: 'JavaScript 编码规范',
            link: '/coding/javascript.md',
          },
          {
            text: 'Typescript 编码规范',
            link: '/coding/typescript.md',
          },
          {
            text: 'Node 编码规范',
            link: '/coding/node.md',
          },
        ],
      },
      {
        text: '工程规范',
        collapsed: true,
        items: [
          {
            text: 'Git 规范',
            link: '/engineering/git.md',
          },
          {
            text: '文档规范',
            link: '/engineering/doc.md',
          },
          {
            text: 'CHANGELOG 规范',
            link: '/engineering/changelog.md',
          },
        ],
      },
      {
        text: 'NPM包',
        collapsed: true,
        items: [
          { text: 'rx-web-coding-eslint-config', link: '/npm/eslint.md' },
          { text: 'rx-web-coding-stylelint-config', link: '/npm/stylelint.md' },
          { text: 'rx-web-coding-commitlint-config', link: '/npm/commitlint.md' },
          { text: 'rx-web-coding-markdownlint-config', link: '/npm/markdownlint.md' },
          { text: 'rx-web-coding-eslint-plugin', link: '/npm/eslint-plugin.md' },
        ],
      },
      {
        text: '脚手架',
        collapsed: true,
        items: [{ text: 'encode-fe-lint', link: '/cli/encode-fe-lint.md' }],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
});
