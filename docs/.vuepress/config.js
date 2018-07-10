const path = require('path')
const isProd = process.env.NODE_ENV === 'production'
/* console.log('process.env.NODE_ENV: ', process.env.NODE_ENV)
console.log('isProd: ', isProd) */


module.exports = {
  title: 'Hello VuePress',
  description: '尝试试用VuePress',
  base: isProd ? '/vuepress-test/' : '/',
  head: [
    // ['link', { rel: 'icon', href: path.join('/logo/favicon.png') }]
    ['link', { rel: 'icon', href: '/logo/favicon.png' }]
  ],
  markdown: {
    lineNumbers: true,
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    externalLinks: { target: '_blank', rel: 'noopener noreferrer' },
    // markdown-it-toc 的选项
    toc: { includeLeveL: [1, 2]},
    config: md => {
      // 使用更多的 markdown-it 插件!
      // md.use(require('markdown-it-xxx'))
    }
  },
  postcss: { plugins: [require('autoprefixer')] },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Foo', link: '/foo/' },
      { text: 'Bar', link: '/bar/' },
      { text: 'Google', link: 'https://google.com' },
      {
        text: '层级菜单',
        items: [
          { text: '简体中文', link: '/language/zh' },
          { text: 'English', link: '/language/en' }
        ]
      }
      // 通过嵌套的 items 来在 下拉列表 中设置分组
      // {
      //   text: 'Languages',
      //   items: [
      //     { text: 'Group1', items: [/*  */] },
      //     { text: 'Group2', items: [/*  */] }
      //   ]
      // }
      // 禁用导航栏
      // navbar: false
    ],
    sidebar: [
      ['/', '首页'],
      ['/foo/', 'Foo'],
      ['/bar/', 'Bar']
    ],
    // 嵌套的标题链接
    sidebarDepth: 2,
    displayAllHeaders: true, // 显示所有页面的标题链接  默认值：false
    activeHeaderLinks: false, // 活动的标题链接 默认值：true
    // 侧边栏分组
    // sidebar: [
    //   {
    //     title: 'Group 1',
    //     collapsable: false, // 来让一个组永远都是展开状态。
    //     children: [
    //       '/'
    //     ]
    //   },
    //   {
    //     title: 'Group 2',
    //     children: [ /* ... */ ]
    //   }
    // ]
    // sidebar: {
    //   // fallback
    //   '/': [
    //     '' /* / */
    //   ],
    //   '/foo/': [
    //     '',     /* /foo/ */
    //     'one',  /* /foo/one.html */
    //     'two'   /* /foo/two.html */
    //   ],
    //   '/bar/': [
    //     '',      /* /bar/ */
    //     'three', /* /bar/three.html */
    //     'four'   /* /bar/four.html */
    //   ]
    // }
    // 自动生成侧栏
    // sidebar: 'auto'
    /* '/zh/': {
      sidebar: 'auto'
    } */
    // 禁用侧边栏
    // sidebar: false
    // 禁用默认的搜索框
    // search: false, 
    // 搜索框显示的搜索结果数量
    searchMaxSuggestions: 10,
    // Algolia 搜索
    /* algolia: {
      apiKey: '<API_KEY>',
      indexName: '<INDEX_NAME>'
    } */
    // 最后更新时间
    lastUpdated: 'Last Updated', // string | boolean
    // Git 仓库和编辑链接
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'https://github.com/LDQ-first/vuepress-test/tree/master',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    // docsRepo: 'vuejs/vuepress',
    // 假如文档不是放在仓库的根目录下：
    // docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    // docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    // editLinks: true,
    // 默认为 "Edit this page"
    // editLinkText: '帮助我们改善此页面！'
  },
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'Hello VuePress',
      description: 'Try to use VuePress'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: '你好 VuePress',
      description: '尝试试用VuePress',
    }
  },
  chainWebpack: (config, isServer) => {
    // config 是 ChainableConfig 的一个实例
  },
  configureWebpack: {
    resolve: {
      alias: {

      }
    }
  },
  evergreen: false   // 浏览器兼容性
  /* configureWebpack: (config, isServer) => {
    if (!isServer) {
      // 修改客户端的 webpack 配置
    }
  } */
}
