module.exports = {
  base: '/monogatari/',
  title: '物语UI',
  description: '一款基于vant2二次封装的UI组件库',
  themeConfig: {
    // logo: '/logo.png',
    nav: [
      { text: '主页', link: '/' },
      {
        text: '文档',
        items: [
          { text: '开发指南', link: '/components/intro' },
          { text: '组件列表', link: '/components/filter-panel' }
        ]
      },
      { text: 'GitHub', link: 'https://github.com/silent-cat/monogatari' }
    ],
    sidebar: [
      {
        title: '开发指南',
        children: ['/components/intro', '/components/get-started']
      },
      {
        title: '组件列表',
        children: [
          '/components/filter-panel',
        ]
      }
    ],
    lastUpdated: '最近更新' // string | boolean
  }
}
