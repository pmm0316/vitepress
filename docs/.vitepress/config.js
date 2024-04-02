// .vitepress/config.js
import {
  componentPreview,
  containerPreview,
} from "@vitepress-demo-preview/plugin";
export default {
  // site-level options
  base: './',
  title: "明明不在",
  description: "在线文档",
  themeConfig: {
    // theme-level options
    nav: [
      { text: "Guide", link: "/guide/" },
      { text: "博客", link: "/blog/" },
      { text: "css揭秘", link: "/cssSecrets/" },
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
      ],
      "/cssSecrets/": [
        {
          text: "第一章",
          link: "/cssSecrets/第一章",
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
