// .vitepress/config.js
export default {
  // site-level options
  title: "明明不在",
  description: "在线文档",
  themeConfig: {
    // theme-level options
    nav: [
      { text: "Guide", link: "/guide/" },
      { text: "博客", link: "/blog/" },
      // { text: "gitee", link: "https://gitee.com/geeksdidi" },
    ],
    sidebar: {
      "/blog/": [
        {
          text: "环境搭建",
          link: "/blog/环境搭建",
        },
        {
          text: "移动端H5",
          items: [
            {
              text: "0.5px细线",
              link: "/blog/0.5px细线",
            },
          ],
        },
      ],
    },
  },
};
