// 顶部导航栏内容
const nav = [
  { text: '指南', link: '/guide/' },
  { text: '组件', link: '/component/' },
];
// 侧边栏导航内容
const sidebar = {
  '/guide/': [
    {
      text: '指南',
      children: [
        { text: '介绍', link: '/guide/' },
        { text: '安装', link: '/guide/installation' },
        { text: '快速上手', link: '/guide/quickstart' },
      ],
    },
  ],
  '/component/': [
    {
      text: '组件',
      children: [
        { text: 'Button 按钮', link: '/component/button' },
        { text: 'Switch 开关', link: '/component/switch' },
      ],
    },
  ],
};

module.exports = {
  head: [
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
      },
    ],
    ['meta', { name: 'keywords', content: 'aid vui' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  title: '中台ui库 官方文档',
  lang: 'zh-CN',
  description: '中台项目业务组件',
  themeConfig: {
    nav,
    sidebar,
  },
};
