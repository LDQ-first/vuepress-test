module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  base: '/vuepress-test/',
  markdown: {
    lineNumbers: true,
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLeveL: [1, 2]},
    config: md => {
      // 使用更多的 markdown-it 插件!
      // md.use(require('markdown-it-xxx'))
    }
  },
  configureWebpack: {
    resolve: {
      alias: {

      }
    }
  }
}
