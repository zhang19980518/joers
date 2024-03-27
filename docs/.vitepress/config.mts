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
          { text: '数据同步', link: '/sync-data' },
          // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: 'CSS',
        items: [
          { text: '伪类', link: '/un-class' },
          { text: '否定伪类', link: '/err-class' },
          { text: '结构伪类', link: '/strcut-class' },
          { text: 'UI伪类', link: '/ui-class' },
          { text: '目标伪类', link: '/target-class' },
          { text: '语言伪类', link: '/lang-class' },
          { text: '伪元素选择器', link: '/un-origin-class' },
          { text: '选择器优先级', link: '/select-class' },
          { text: 'CSS三大特性', link: '/css-three' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhang19980518/joers' }
    ]
  }
})
