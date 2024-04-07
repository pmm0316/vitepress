// .vitepress/config.js
import {
  componentPreview,
  containerPreview,
} from "@vitepress-demo-preview/plugin";
export default {
  // site-level options
  base: '/vitepress/',
  title: "明明不在",
  description: "在线文档",
  themeConfig: {
    // theme-level options
    nav: [
      { text: "博客", link: "/blog/" },
      { text: "css技巧", link: "/cssSecrets/" },
      // { text: "gitee", link: "https://gitee.com/geeksdidi" },
    ],
    sidebar: {
      "/blog/": [
        {
          text: "环境搭建",
          link: "/blog/环境搭建",
        },
        {
          text: "0.5px细线",
          link: "/blog/0.5px细线",
        },
        {
          text: "移动端适配",
          link: "/blog/移动端适配",
          // items: [
          //   {
          //     text: "0.5px细线",
          //     link: "/blog/0.5px细线",
          //   },
          // ],
        },
        {
          text: "vue3特性",
          link: "/blog/vue3Feat",
        },
        {
          text: "图表",
          link: "/blog/图表",
        },
        {
          text: "实用网站",
          link: "/blog/实用网站",
        },
      ],
      "/cssSecrets/": [
        {
          text: "背景与边框",
          link: "/cssSecrets/背景与边框",
        },
        {
          text: "形状",
          link: "/cssSecrets/形状",
        },
      ],
    },
  },
  markdown: {
    theme: {
      light: "vitesse-light",
      dark: "vitesse-dark",
    },
    lineNumbers: true,
    config(md) {
      md.use(componentPreview);
      md.use(containerPreview);
    },
  },
};
