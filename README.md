# NextMail website

NextMail 官方产品网站，使用 Astro 7 静态输出、Tailwind CSS 4、TypeScript strict、MDX Content Collections 和 Lucide。英文位于 `/`，简体中文位于 `/zh-CN/`。面向 Cloudflare Pages，无数据库、服务端或第三方统计依赖。

## 本地开发

需要 Node.js 24（最低 22.12）与 pnpm 12，版本分别记录在 `.node-version` 和 `package.json`。

```sh
pnpm install
pnpm dev
```

访问终端输出的本地地址，默认是 `http://127.0.0.1:4321/`。Astro 7 的开发服务器在后台运行，可用 `pnpm exec astro dev stop` 停止。

```sh
pnpm check
pnpm lint
pnpm format:check
pnpm build
pnpm test
pnpm preview
```

`pnpm test` 包含发布资产分类和静态产物验证，需要先构建。它会检查 18 个双语页面、站内链接与锚点、图片尺寸与 alt、下载来源、文档索引及无整页 hydration。

## 目录

```text
src/
  assets/screenshots/    主仓库真实截图，由 Astro 生成响应式 WebP
  components/           导航、截图、功能段落、同步说明等共享组件
  config/               brand.mjs 共享品牌来源；site.ts 双语路由
  content/docs/         en/ 与 zh-CN/ 的 MDX 文档
  content.config.ts     文档 schema 与 glob loader
  data/changelog.ts     双语近期更新摘要
  data/upstream/        上游 README、CHANGELOG 与真实 release 快照
  i18n/ui.ts            双语导航、CTA、SEO 描述与页面文案
  layouts/              全站 HTML、SEO、字体和主题初始化
  lib/                  发布资产过滤与版本选择
  pages/                双语静态路由、搜索 JSON、404
  scripts/              菜单、主题、平台建议和入场交互
  styles/               设计变量、排版和响应式规则
  templates/            Home / Features / Download / Docs / Changelog
public/
  brand/                原始品牌图标、优化图标、favicon 与双语 OG 图片
  licenses/             本地字体 OFL 许可证
  _headers              Cloudflare Pages 响应头
scripts/                发布数据刷新和品牌资产生成
tests/                  Node 原生测试，无额外测试运行器
```

## 内容维护

- **品牌与来源**：编辑 `src/config/brand.mjs`。Astro、页面元数据、robots、下载刷新与品牌图片生成脚本共用此配置；域名变更后重新生成品牌图片并构建。
- **双语文案**：编辑 `src/i18n/ui.ts`。中文词典与英文使用相同类型，遗漏翻译会在检查时被发现。语言切换保留当前页面与锚点。
- **文档**：在 `src/content/docs/en/` 和 `zh-CN/` 成对维护 MDX。Frontmatter 的 `docSlug` 为页面键，`order` 控制导航顺序，`source` 指向事实来源。不要使用 Astro 保留的 `slug` 覆盖跨语言 ID。新增分类时同步扩展 schema；新增文档后搜索索引与右侧目录会自动生成。
- **更新日志**：根据主仓库 CHANGELOG 手工整理 `src/data/changelog.ts` 的双语摘要，保持实际版本号与日期。页面明确为近期精选，并链接完整上游历史。构建时若发现更新但尚未整理的 release，会先显示真实版本、日期及原始说明入口。
- **下载版本**：`pnpm sync:upstream` 从 GitHub Releases API 获取已发布正式与预发布版本，保留真实 `browser_download_url`。`pnpm build` 会自动刷新，失败时使用带核实日期的已提交快照并输出提示。页面同时保留 GitHub 备用和历史入口。新产品版本发布后需重新构建官网，不会在每次访问时自动刷新。
- **离线构建**：网络失败时保留已核实快照与日期；若连快照也不存在，则生成只有 GitHub Releases 备用入口的下载页，不编造版本或文件。测试在临时目录中覆盖这两种情况。
- **截图**：来自主仓库 `assets/screenshots/workspace`，已移除外围透明留白，保留真实窗口和内容。中英文均有浅色与深色。替换图片后 Astro 会重新生成 WebP。写信、文件夹等流程示意均标注为示意，不能用伪造截图替换。
- **图标与社交图片**：替换原始图标后运行 `node scripts/generate-brand.mjs`。脚本同时生成 OG 图片并复制字体许可证；生成产物已提交，可直接部署。OG 中文字体使用生成机器的中文字体，跨系统重新生成时需检查排版。
- **交互**：目前所有交互都足够轻，使用原生脚本、CSS 和 IntersectionObserver。已配置 React 集成，但不加载任何 React 岛；只有确实出现复杂交互时再增加按需 island。未引入 Motion。

## 产品事实

内容核实于 2026-10-31，依据主仓库 README、README_ZH、CHANGELOG、`docs/project.md`、应用图标和截图。详见 `CONTENT_SOURCES.md`。

NextMail v1.1.1 正式版已发布，当前功能已通过用户实机验收。官网按正式版状态展示产品，Windows、macOS 与 Linux x64 均为正式支持平台。当前 Windows 无正式代码签名，macOS 为 ad-hoc 签名且未公证。

不宣称统一收件箱、跨账户搜索、会话聚合或 OAuth 已实现。不提供未经测试的性能数字、用户数量或评价。签名更新检查与操作系统应用签名分别说明。

## Cloudflare Pages 部署

这是标准 Astro 静态项目，**不需要 `@astrojs/cloudflare` adapter**。

1. 将当前目录作为独立官网仓库推送至你的 Git 服务。
2. 在 Cloudflare Pages 创建项目并连接官网仓库，选择 Astro 预设。
3. 构建命令：`pnpm build`；输出目录：`dist`；项目根目录为仓库根目录。
4. 设置 `NODE_VERSION=24`、`PNPM_VERSION=12.15.0`。构建系统若未按 packageManager 字段选中 pnpm，可将构建命令设为 `corepack enable && pnpm install --frozen-lockfile && pnpm build`。
5. 公共 GitHub API 不需要 Token。若遇到共享出口限流，可在 Pages 构建环境设置只读 `GITHUB_TOKEN`；不要以 `PUBLIC_` 开头，不要提交 `.env`。
6. 在 Pages 自定义域名中绑定 `next-mail.app`，按 Cloudflare 指引配置 DNS 与 TLS。`robots.txt`、canonical、hreflang、OG/Twitter 和 sitemap 已配置该域名。
7. 每次 NextMail 发布后触发一次 Pages 构建，可以使用 Pages deploy hook 或在应用发布流程中调用它。此 hook 为敏感配置，不应写进源码。

Pages 会直接服务 `_headers` 和 `404.html`。不要增加把所有 URL 重写至首页的 SPA fallback，否则会破坏文档、404 与搜索引擎状态码。

## 还需要开发者提供的配置或素材

**上线必需**：官网 Git 仓库、Cloudflare Pages 项目及权限、`next-mail.app` 的 DNS/域名绑定。这次交付未登录 Cloudflare、未进行真实生产部署。

**可选**：用于高频构建的只读 GitHub Token；应用发布后触发官网构建的 deploy hook；当前 Nova 写信、设置与联系人工作区的脱敏双语截图。现有素材足以完整运行，新增截图可替换页面中明确标注的流程示意。

代码签名证书与 Apple Developer 公证属于应用发布侧配置，需要实际就绪后才能修改官网的限制说明。

## 字体与视觉来源

Instrument Serif、DM Sans 与 IBM Plex Mono 由 Fontsource 本地打包，许可证保存在 `public/licenses/`。中文使用系统宋体与系统无衬线字体。视觉参考为 Zed 官网的编辑式排版、克制色彩、细线与产品展示节奏；未复制其品牌资源或源代码。
