import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "joerts",
  description: "docs",
  locales: {
    root: {
      label: 'Chinese',
      lang: 'cn'
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' }
    ],

    sidebar: [
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // },
      {
        text: '后端',
        items: [
          { text: '数据同步', link: '/server/sync-data' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'React',
        items: [
          { text: 'useState', link: '/react/state' },
        ]
      },
      {
        text: '日常tip',
        items: [
          { text: '日常tip', link: '/tip/login' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'CSS',
        items: [
          { text: '伪类', link: '/css/un-class' },
          { text: '否定伪类', link: '/css/err-class' },
          { text: '结构伪类', link: '/css/strcut-class' },
          { text: 'UI伪类', link: '/css/ui-class' },
          { text: '目标伪类', link: '/css/target-class' },
          { text: '语言伪类', link: '/css/lang-class' },
          { text: '伪元素选择器', link: '/css/un-origin-class' },
          { text: '选择器优先级', link: '/css/select-class' },
          { text: 'CSS三大特性', link: '/css/css-three' },
          { text: '鼠标相关属性', link: '/css/cursor' },
          { text: '文本属性', link: '/css/text' },
          { text: '元素显示模式', link: '/css/origin-view' },
          { text: '盒子模型', link: '/css/box' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhang19980518/joers' }
    ]
  }
})
