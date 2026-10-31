# 内容来源与核实边界

核实日期：2026-10-31。主仓库：[nextmail-dev/nextmail](https://github.com/nextmail-dev/nextmail)，产品资料依据提交 `1a7b314eacc05afb58e34783a39d1fd1a5a65867`（v1.1.1）。

工作区截图已同步至 [00264c7](https://github.com/nextmail-dev/nextmail/commit/00264c73831b0a765fcce021e8ac7fe4c6163a1c)（2026-10-30）。中英文浅色与深色四张图片均校验了上游 Git blob SHA，只移除外围透明留白，保留原始窗口与内容；首页、功能展示和双语社交分享图共用这些素材。

| 资料                                                                                                                                         | 本站使用范围                                                                       |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| [README.md](https://github.com/nextmail-dev/nextmail/blob/1a7b314eacc05afb58e34783a39d1fd1a5a65867/README.md)                                | 本地优先、同步机制、平台最低版本、签名与公证限制                                   |
| [README_ZH.md](https://github.com/nextmail-dev/nextmail/blob/1a7b314eacc05afb58e34783a39d1fd1a5a65867/README_ZH.md)                          | 中文术语与对应功能表述                                                             |
| [CHANGELOG.md](https://github.com/nextmail-dev/nextmail/blob/1a7b314eacc05afb58e34783a39d1fd1a5a65867/CHANGELOG.md)                          | 近期真实版本、日期与变化；双语摘要为人工整理，并非完整历史复制                     |
| [docs/project.md](https://github.com/nextmail-dev/nextmail/blob/1a7b314eacc05afb58e34783a39d1fd1a5a65867/docs/project.md)                    | IMAP/SMTP 密码认证、无 OAuth、账户内搜索、联系人分组、通知限制、同步选项与凭据存储 |
| [screenshots/workspace](https://github.com/nextmail-dev/nextmail/tree/00264c73831b0a765fcce021e8ac7fe4c6163a1c/assets/screenshots/workspace) | 实际应用的中英文浅色/深色截图；其中邮件内容来自上游演示模式，不代表真实用户或客户  |
| [app-icon.png](https://github.com/nextmail-dev/nextmail/blob/1a7b314eacc05afb58e34783a39d1fd1a5a65867/assets/app-icon.png)                   | 原始图标、导航图标、favicon、社交图品牌元素                                        |
| [GitHub Releases API](https://api.github.com/repos/nextmail-dev/nextmail/releases)                                                           | 真实版本、发布日期、预发布标记、文件名、文件大小和下载 URL；构建时刷新             |

2026-10-31 用户确认当前实机验收均已通过，正式版已经发布；官网据此移除预览阶段描述，首页、功能、下载、文档、更新日志和分享图片统一使用正式版文案。README 快照同步自主仓库当前工作区，表中的提交链接保留已发布版本的技术来源；用户同时确认 Linux x64 为正式支持平台，官网与主仓库 README 已统一该表述；当前签名和公证限制继续保留。

不存在的统一收件箱、跨账户搜索、会话聚合不作为现有功能展示。没有第三方评价、用户数字、客户 logo 或未经实测的性能指标。安全说明只描述已实现机制，不承诺“绝对安全”或端到端加密。

Zed 参考分析：中心化大标题、衬线与技术等宽字体、低饱和底色、蓝色行动入口、贯穿的细线、大面积留白、三栏价值说明、真实软件展示和逐段展开的阅读节奏。本项目使用自己的窗口截图、字号体系、内容顺序和组件实现，没有复用 Zed 资产或源码。

技术依据：[Astro Content Collections](https://docs.astro.build/en/guides/content-collections/)、[Astro i18n](https://docs.astro.build/en/guides/internationalization/)、[Cloudflare Pages Astro 部署](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/)。构建使用核实时 pnpm registry 返回的稳定 Astro 7.4.4；TypeScript 选用与 Astro check / ESLint 工具链兼容的 6.0.3。
