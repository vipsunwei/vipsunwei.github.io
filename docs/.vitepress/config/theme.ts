import type { DefaultTheme } from "vitepress";
import { nav } from "./nav";
import { sidebar } from "./sidebar";

export const themeConfig: DefaultTheme.Config = {
  nav, // 导航栏配置
  sidebar, // 侧边栏配置

  logo: "/logo.png",
  outline: {
    level: "deep", // 右侧大纲标题层级
    label: "目录", // 右侧大纲标题文本配置
  },
  outlineBadges: false, // 是否在大纲中显示 Badge 文本
  darkModeSwitchLabel: "切换日光/暗黑模式",
  sidebarMenuLabel: "文章",
  returnToTopLabel: "返回顶部",
  lastUpdatedText: "最后更新", // 最后更新时间文本配置, 需先配置lastUpdated为true
  // 文档页脚文本配置
  docFooter: {
    prev: "上一篇",
    next: "下一篇",
  },
  // 编辑链接配置
  editLink: {
    pattern:
      "https://github.com/vipsunwei/vipsunwei.github.io/edit/main/docs/:path",
    text: "不妥之处，敬请雅正",
  },
  // 全文搜索配置
  algolia: {
    appId: "DBZ0G9HBUY",
    apiKey: "00cef480a543003d05d9808110ea5f65",
    indexName: "vipsunwei",
  },
  // 导航栏右侧社交链接配置
  socialLinks: [
    {
      icon: "github",
      link: "https://github.com/vipsunwei/vipsunwei.github.io",
    },
    {
      icon: {
        svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>码云</title><path d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296Z"/></svg>',
      },
      link: "https://gitee.com/vipsunwei/",
    },
    {
      icon: {
        svg: '<svg role="img" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><title>我的网址导航</title><path d="M512 22C241.38 22 22 241.38 22 512s219.38 490 490 490 490-219.38 490-490S782.62 22 512 22z m226.06 277.73L517.54 809.14c-3.18 7.28-13.72 7.08-17.21-0.41L410.4 616.57a5.966 5.966 0 0 0-2.97-2.97L215.6 523.58c-7.58-3.49-7.79-14.05-0.41-17.23l508.74-220.76c8.91-3.91 18.03 5.22 14.13 14.14z" p-id="4967"></path></svg>',
      },
      link: "https://vipsunwei.com/",
    },
    {
      icon: {
        svg: `<svg width="33" height="33" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174.8 204">
                <title>ContiNew Admin</title>
                <path fill="#307AF2" d="M86.7,0l88,51v.2l-16.3,9.4v-.2L86.7,18.9Zm71.8,143.5,16.3,9.4v.2L86.8,204h0l-16.3-9.4,16.3-9.4h0l71.7-41.5v-.2Z"/>
                <path fill="#12D2AC" d="M16.3,143.5v.2L58,167.8l-16.3,9.4L0,153.1v-.2Z"/>
                <path fill="#12D2AC" d="M104.1,93,15.9,143.8l-.2-.1V124.9l.2.1L87.7,83.6,104.1,93Z"/>
                <path fill="#0057FE" d="M88.1,0,.1,51v.2l16.3,9.4v-.2L88.1,18.9Z"/>
                <path fill="#307AF2" d="M.1,50.9.2,152.6l.2.1,16.3-9.4-.2-.1-.1-82.9L.1,50.9Z"/>
                <path fill="#0057FE" d="M174.7,50.9l-.1,101.7-.2.1-16.3-9.4.2-.1.1-82.9Z"/>
                <path fill="#12D2AC" d="M41.7,158.5l16.1,9.4,100.6-58.7V90.4Z"/>
              </svg>`,
      },
      link: "https://vipsunwei.com/",
    },
  ],

  // 自定义扩展: 文章元数据配置
  // @ts-ignore
  articleMetadataConfig: {
    author: "vipsunwei", // 文章全局默认作者名称
    authorLink: "/about/index", // 点击作者名时默认跳转的链接
    showViewCount: true, // 是否显示文章阅读数, 需要在 docs/.vitepress/theme/api/config.js 及 interface.js 配置好相应 API 接口
  },
  // 自定义扩展: 文章版权配置
  copyrightConfig: {
    license: "署名-相同方式共享 4.0 国际 (CC BY-SA 4.0)",
    licenseLink: "http://creativecommons.org/licenses/by-sa/4.0/",
  },
  // 自定义扩展: 评论配置
  commentConfig: {
    type: "gitalk",
    showComment: false, // 是否显示评论
  },
  // 自定义扩展: 页脚配置
  footerConfig: {
    showFooter: true, // 是否显示页脚
    icpRecordCode: "", // ICP备案号
    publicSecurityRecordCode: "鲁公网安备37010302000917号", // 联网备案号
    copyright: `Copyright © 2019-${new Date().getFullYear()} vipsunwei`, // 版权信息
  },
};
