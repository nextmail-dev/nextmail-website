# 验证记录

日期：2026-10-30。

## 工程验证

已实际执行 `pnpm install`、`pnpm check`、`pnpm lint`、`pnpm format:check`、`pnpm build`、`pnpm test` 和 `pnpm peers check`。最终类型检查为 0 errors / 0 warnings / 0 hints，无 peer dependency 问题，10 项测试全部通过。

静态构建输出 18 个双语页面、`404.html`、双语搜索 JSON、`robots.txt` 与 sitemap。测试覆盖全部站内页面、锚点、图片 alt 与显式尺寸、真实发布资产链接、安装包架构分类、双语搜索索引、无 React hydration，以及网络中断时的缓存和无缓存备用处理。网络失败测试在独立临时目录中模拟，不代表真实 GitHub 故障。

当前下载数据成功从 GitHub API 刷新，读取 30 个真实发布版本，最新为 v1.1.1。生产页面中的下载 URL 来自实际 assets。未下载或安装这些桌面应用安装包。

## 浏览器验证

实际检查了本地开发站和构建后的静态预览：

- 首页与下载页：360、768、1024、1440、1920px 宽度未发现横向溢出。
- 英文与中文的 Features、Docs、Changelog：每页均检查上述五档宽度，共 30 组内页布局检查，未发现横向溢出。
- 目视检查了桌面和移动首页、浅色和深色主题、功能截图展示、文档双侧导航、移动文档目录、下载说明与更新日志。
- 验证移动导航展开、Escape 关闭、语言切换、手动主题切换与跨页面保留、macOS 下载建议。
- 验证中文文档全文搜索、无匹配反馈、清空搜索恢复状态；搜索索引按语言分别输出。
- 修复了文档跨语言 slug 冲突、404 语言切换错误链接、深色截图 alt 与截图说明覆盖画面的问题。

截图保存在 `artifacts/desktop-preview.jpg` 与 `artifacts/mobile-preview.jpg`。

## 工作区截图同步

已同步主仓库 `00264c73831b0a765fcce021e8ac7fe4c6163a1c` 的中英文浅色、深色四张截图，并核对原始 Git blob SHA。移除透明留白后的尺寸均为 2614 × 1735。重新生成响应式 WebP 和双语 OG 图片，社交图按固定区域等比缩放，避免新截图比例变化导致越界。

本次更新通过类型检查、品牌生成脚本 Lint、静态构建和 10 项测试。实际检查了 1440px 桌面、360px 移动首页及中英文浅深色图片切换，未发现横向溢出；桌面与移动预览图已同步更新。

## 验证边界

没有在 Cloudflare 生产环境部署或绑定域名，没有进行真实桌面邮件收发或安装包实机验收，没有执行 Lighthouse 或宣称生产 Core Web Vitals 分数。系统主题与 reduced-motion 已实现对应媒体查询；本次主要验证了手动浅深色切换，未修改操作系统的主题或辅助功能设置。

上线还需连接官网仓库与 Cloudflare Pages，并完成 `next-mail.app` 的 DNS、自定义域名和 TLS 配置。具体构建设置及可选素材见 README。

## 2026-10-31 正式版文案更新

根据用户确认，当前应用功能已通过实机验收且正式版已发布。同步更新首页、功能、下载、更新日志、入门、安全与 FAQ 的中英文文案，移除产品预览阶段描述；保留邮件文字预览、真实预发布版本分类以及签名和公证的实际分发边界。双语分享图片已从品牌源脚本重新生成，README 快照与内容来源说明同步更新。

本次实际通过 pnpm check（0 errors / 0 warnings / 0 hints）、pnpm lint、pnpm format:check、pnpm build 和全部 10 项 pnpm test。构建成功生成 18 个双语页面及 404；扫描了生成的 HTML 和搜索 JSON，确认无过时预览版声明，中英文首页均展示 v1.1.1 正式版标识。已有测试继续覆盖页面链接、锚点、图片尺寸、下载资产和搜索索引。

已目视检查重新生成的中英文分享图片。本次未进行浏览器交互验收或生产部署。

## 2026-10-31 Linux 正式支持

根据用户确认，Linux x64 与 Windows、macOS 一样为正式支持平台。首页、页脚、功能说明、下载卡片、入门和 FAQ 双语文案均已更正，主仓库 README、项目平台约定及官网 README 快照同步更新；保留发行版系统依赖说明。

本次实际通过 pnpm check（0 errors / 0 warnings / 0 hints）、pnpm lint、pnpm format:check、pnpm build 和全部 10 项 pnpm test。扫描生成的 HTML 与搜索 JSON，确认无实验性支持表述，并检查两种语言的 Linux 下载卡片均显示正式支持，包含 DEB、RPM 和 AppImage 安装包入口。
