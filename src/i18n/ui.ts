import type { Locale } from '../config/site';

const en = {
  nav: {
    features: 'Features',
    docs: 'Docs',
    changelog: 'Changelog',
    download: 'Download',
  },
  common: {
    download: 'Download NextMail',
    github: 'View on GitHub',
    allDownloads: 'All platforms',
    learn: 'Explore the features',
    preview: 'Public preview',
    theme: 'Color theme',
    system: 'System',
    light: 'Light',
    dark: 'Dark',
    menu: 'Open navigation',
    skip: 'Skip to content',
    source: 'Product source',
    back: 'Back to home',
    updated: 'Last checked',
    note: 'Preview builds are not production-signed or notarized.',
    platforms: 'Windows & macOS · Linux experimental',
  },
  home: {
    eyebrow: 'A little less noise. A little more focus.',
    line1: 'Email, back',
    line2: 'in your hands.',
    subtitle: 'A calm, local-first desktop email client.',
    description:
      'Your mail stays close. New messages arrive gently. The rest waits until you need it.',
    release: 'A quieter inbox starts here',
    screenshot: 'The NextMail workspace. Real app, demo mailbox.',
    values: [
      {
        title: 'Local-first',
        text: 'Your mail, on your device. Read what’s already saved, even when the connection drops.',
        icon: 'hard-drive',
      },
      {
        title: 'Progressive sync',
        text: 'Your mailbox comes into view, message by message. Start reading as new mail arrives.',
        icon: 'refresh',
      },
      {
        title: 'On-demand content',
        text: 'A preview first. The full message and attachments only when you ask for them.',
        icon: 'download',
      },
    ],
    editorialLabel: 'MADE FOR THE WAY YOU READ',
    editorialTitle: 'More room for what matters.',
    editorialText:
      'A familiar desktop workspace, with the care in the details. Move between accounts, settle into a message, and keep your day in view.',
    reading: {
      label: '01 / A CLEARER WORKSPACE',
      title: 'An inbox with\nroom to breathe.',
      text: 'Keep your folders, message list, and reading pane in one considered space. Switch accounts without mixing their mail. Find a saved message with local search.',
      link: 'Find your way around',
      bullets: [
        'Multiple accounts, each with its own space',
        'Search one folder or the current account',
        'Stars, favorites, and folder drag-and-drop',
      ],
    },
    writing: {
      label: '02 / THOUGHTFUL BY DEFAULT',
      title: 'The details stay.\nThe distractions go.',
      text: 'Read rich emails in their familiar layout, with remote images under your control. Choose a light or dark appearance that feels at home on your desktop.',
      link: 'Meet your next mail client',
      bullets: [
        'Sanitized HTML and controlled remote content',
        'Light, dark, and system appearance',
        'Dedicated windows and desktop notifications',
      ],
    },
    sync: {
      label: 'A DIFFERENT PACE',
      title: 'Just enough,\njust when you need it.',
      text: 'A mailbox shouldn’t have to download everything before it becomes useful. NextMail separates the essentials from the larger content.',
      steps: [
        {
          title: 'Preview first',
          text: 'Sender, subject, date, flags, attachment details, and a short text preview arrive together.',
          tag: 'AUTOMATIC',
        },
        {
          title: 'Open to read',
          text: 'Open a message to fetch its reading content. Already saved content stays available locally.',
          tag: 'ON DEMAND',
        },
        {
          title: 'Choose an attachment',
          text: 'Open or save a file to download that attachment. Listing a file doesn’t download it.',
          tag: 'ON DEMAND',
        },
      ],
      footnote:
        'Prefer to keep message bodies offline? Enable optional full-message sync per account.',
      link: 'How syncing works',
    },
    open: {
      label: 'BUILT IN THE OPEN',
      title: 'Your email deserves\nan open home.',
      text: 'NextMail is built with Tauri 2, Rust, React 19, and TypeScript. Explore the code, report an issue, or help shape what comes next.',
      link: 'Explore the repository',
    },
    cta: {
      label: 'MAKE YOURSELF AT HOME',
      title: 'A calmer place\nfor your mail.',
      text: 'Try the NextMail preview on your desktop.',
    },
  },
  features: {
    label: 'THE NEXTMAIL WORKSPACE',
    title: 'Considered tools.\nEveryday email.',
    description:
      'A closer look at what NextMail does today. Local reading, thoughtful writing, and sync that respects your choices.',
    jump: 'Explore',
    sections: [
      'Reading & search',
      'Writing & contacts',
      'Folders & actions',
      'Desktop & security',
    ],
    writingTitle: 'Everything you need to say it well.',
    writingText:
      'Compose rich messages with drafts, templates, signatures, replies, forwards, attachments, and inline images. Account-scoped contact groups fill an entire recipient list in one step.',
    writingDemo: 'Writing workflow · schematic',
    draft: 'Draft',
    template: 'Template',
    compose: 'Rich-text composer',
    send: 'Send',
    foldersTitle: 'A place for everything.',
    foldersText:
      'Create, rename, move, delete, and sort folders. Drag messages into folders, keep favorites close, and apply actions to a selection. Persistent tasks can recover after an interruption.',
    desktopTitle: 'At home on your desktop.',
    desktopText:
      'Dedicated windows, remembered positions, a system tray, desktop notifications, bilingual UI, and signed update checks. Choose Nova or Lyra and a light, dark, or system appearance.',
    securityTitle: 'Care with every message.',
    securityText:
      'Passwords live in the operating system’s credential store. HTML is sanitized before display, remote images remain under your control, and attachments are checked before opening or saving.',
    limitsTitle: 'Know the current boundaries.',
    limitsText:
      'NextMail is in Preview. There is no unified inbox, cross-account search, conversation aggregation, or OAuth sign-in. Linux is experimental. Windows production signing and Apple notarization are not available.',
  },
  download: {
    label: 'YOUR MAIL. YOUR DESKTOP.',
    title: 'Make room\nfor calmer email.',
    description:
      'Choose the build for your computer. Every download below comes directly from the NextMail GitHub repository.',
    latest: 'Latest release',
    prerelease: 'Latest pre-release',
    stable: 'GitHub release',
    recommended: 'For your device',
    primary: 'Primary platform',
    experimental: 'Experimental',
    windows: 'Windows',
    macos: 'macOS',
    linux: 'Linux',
    windowsReq: 'Windows 10 22H2 or later · x64',
    macosReq: 'macOS 12 or later',
    linuxReq: 'Linux x64 · distribution dependencies apply',
    linuxDetail:
      'DEB, RPM, and AppImage builds are for early testing. Linux has not received the same validation as Windows and macOS; compatibility depends on your distribution and Tauri system dependencies.',
    install: 'Before you install',
    warning:
      'This is Preview software. Windows builds do not have production code signing. macOS builds are ad-hoc signed and are not Apple-notarized. Your OS may show an unverified-developer warning. Only download from the official repository.',
    unavailable:
      'Release data is currently unavailable. Get verified builds from GitHub Releases.',
    history: 'Looking for an earlier version?',
    historyLink: 'Browse all releases',
    changelog: 'Read the changelog',
    refresh:
      'This static page reflects the release snapshot checked below. GitHub Releases always has the latest available assets.',
    noPreview:
      'No separately marked GitHub pre-release is currently available. NextMail remains in Preview regardless of the GitHub release label.',
    requirements: 'System requirements',
    asset: 'Download',
  },
  docs: {
    label: 'THE NEXTMAIL HANDBOOK',
    title: 'A little guidance.\nThen, make it yours.',
    description:
      'Get set up, understand your sync, and find your way around NextMail.',
    search: 'Search the handbook',
    placeholder: 'Search docs…',
    noResults: 'No matching articles. Try “sync”, “account”, or “security”.',
    contents: 'On this page',
    verified: 'Based on the project documentation',
    categories: ['Getting started', 'Accounts', 'Sync', 'Security', 'FAQ'],
    read: 'Read article',
    next: 'Continue reading',
    source: 'View implementation notes',
  },
  changelog: {
    label: 'A WORK IN PROGRESS, IN THE OPEN',
    title: 'Small details.\nSteady progress.',
    description:
      'Selected release notes, drawn from the actual project changelog. Follow the details as NextMail takes shape.',
    latest: 'LATEST',
    source: 'Read the complete changelog',
    note: 'The product remains in Preview. Version numbers and GitHub release labels do not change the current signing or platform limitations.',
    changes: 'Changes',
  },
  footer: {
    line: 'A calm, local-first desktop email client.',
    product: 'Product',
    resources: 'Resources',
    project: 'Project',
    handbook: 'Handbook',
    issues: 'Report an issue',
    source: 'Source code',
    credit: 'Built with care. Built in the open.',
    notice: 'Preview · Windows & macOS · Linux experimental',
  },
};

type Dictionary = typeof en;
const zh: Dictionary = {
  nav: {
    features: '功能',
    docs: '文档',
    changelog: '更新日志',
    download: '下载',
  },
  common: {
    download: '下载 NextMail',
    github: '在 GitHub 查看',
    allDownloads: '所有平台',
    learn: '探索全部功能',
    preview: '公开预览版',
    theme: '外观主题',
    system: '跟随系统',
    light: '浅色',
    dark: '深色',
    menu: '打开导航',
    skip: '跳到正文',
    source: '产品资料',
    back: '返回首页',
    updated: '数据核实于',
    note: '预览版尚未正式签名或通过 Apple 公证。',
    platforms: 'Windows 与 macOS · Linux 实验支持',
  },
  home: {
    eyebrow: '少一点打扰，多一点从容。',
    line1: '让邮件，',
    line2: '回到自己手中。',
    subtitle: '一款安静、本地优先的桌面邮件客户端。',
    description:
      '已有邮件留在身边，新邮件逐步到达。其余内容，等你需要时再打开。',
    release: '从这里，开始从容处理邮件',
    screenshot: 'NextMail 真实工作区截图，展示内容为演示邮件。',
    values: [
      {
        title: '本地优先',
        text: '邮件保存在自己的设备上。即使网络中断，也能继续阅读已经存好的内容。',
        icon: 'hard-drive',
      },
      {
        title: '渐进同步',
        text: '邮箱逐步呈现，邮件逐封到达。先开始阅读，不必等到全部同步完成。',
        icon: 'refresh',
      },
      {
        title: '内容按需',
        text: '先看简短预览。完整正文和附件，在你需要的时候才下载。',
        icon: 'download',
      },
    ],
    editorialLabel: '让阅读回到中心',
    editorialTitle: '给重要的内容，多留一点空间。',
    editorialText:
      '熟悉的桌面布局，把心思放在细节里。切换账户，读完一封信，让每天的邮件井然有序。',
    reading: {
      label: '01 / 清晰的工作区',
      title: '打开邮箱，\n也留一点余地。',
      text: '文件夹、邮件列表和阅读面板，各安其位。账户之间自由切换，邮件各自独立；需要找回一封信，本地搜索随时可用。',
      link: '认识你的工作区',
      bullets: [
        '多个账户，各有自己的空间',
        '搜索当前文件夹或当前账户',
        '星标、收藏夹与邮件拖放整理',
      ],
    },
    writing: {
      label: '02 / 细节，恰到好处',
      title: '保留内容，\n减少打扰。',
      text: '保留邮件熟悉的图文排版，由你决定是否加载远程图片。选一个适合此刻的明暗外观，让阅读与桌面自然相融。',
      link: '进一步了解 NextMail',
      bullets: [
        '清理 HTML，控制远程内容',
        '浅色、深色或跟随系统',
        '独立窗口与桌面通知',
      ],
    },
    sync: {
      label: '按你的节奏',
      title: '需要多少，\n就取多少。',
      text: '不必把所有邮件都下载完，邮箱才变得可用。NextMail 把展示所需的信息，与正文和附件分开处理。',
      steps: [
        {
          title: '先看预览',
          text: '发件人、主题、日期、标记、附件信息与简短文字预览，先一步到达。',
          tag: '自动同步',
        },
        {
          title: '打开再读',
          text: '打开邮件时，才获取阅读所需的正文；已经保存的内容留在本地。',
          tag: '按需下载',
        },
        {
          title: '附件由你决定',
          text: '打开或保存附件，才下载这一个文件。看到附件名称，不代表已经下载。',
          tag: '按需下载',
        },
      ],
      footnote: '希望离线阅读更多正文？可以为每个账户单独开启全文同步。',
      link: '了解同步机制',
    },
    open: {
      label: '在开放中成长',
      title: '让邮件，\n有一个开放的家。',
      text: 'NextMail 使用 Tauri 2、Rust、React 19 与 TypeScript 构建。代码公开，欢迎查看实现、反馈问题，一起打磨接下来的体验。',
      link: '探索项目仓库',
    },
    cta: {
      label: '回到自己的节奏',
      title: '给邮件，\n一个安静的地方。',
      text: '在你的桌面上，试试 NextMail 预览版。',
    },
  },
  features: {
    label: 'NEXTMAIL 工作区',
    title: '用心的工具，\n日常的邮件。',
    description:
      '看看 NextMail 现在能做什么。本地阅读、完整写信，以及尊重你选择的同步方式。',
    jump: '快速浏览',
    sections: ['阅读与搜索', '写信与联系人', '文件夹与操作', '桌面与安全'],
    writingTitle: '把想说的话，好好写下来。',
    writingText:
      '富文本、草稿、模板、签名、回复、转发、附件和内嵌图片，覆盖日常写信所需。账户内的联系人分组，也能一键填入整组收件人。',
    writingDemo: '写信流程 · 示意图',
    draft: '草稿',
    template: '模板',
    compose: '富文本编辑器',
    send: '发送',
    foldersTitle: '每封邮件，各有去处。',
    foldersText:
      '创建、重命名、移动、删除与排序文件夹。拖放邮件，把常用文件夹加入收藏，也可以批量处理选中的邮件。持久化任务在中断后可以继续处理。',
    desktopTitle: '像桌面软件一样自然。',
    desktopText:
      '独立窗口、位置记忆、系统托盘、桌面通知、中英文界面和签名更新检查。Nova 与 Lyra 两种界面风格，配合浅色、深色或系统外观。',
    securityTitle: '认真对待每封邮件。',
    securityText:
      '账户密码保存在操作系统的安全凭据库。HTML 显示前先清理，远程图片由你控制；附件经过检查后，才允许打开或保存。',
    limitsTitle: '也把当前边界说明白。',
    limitsText:
      'NextMail 仍处于 Preview。目前不提供统一收件箱、跨账户搜索、会话聚合或 OAuth 登录。Linux 属于实验支持；Windows 正式签名与 Apple 公证尚未提供。',
  },
  download: {
    label: '自己的邮件，自己的桌面',
    title: '给邮件，\n留一个从容的位置。',
    description:
      '选择适合你电脑的版本。下方所有下载，均直接来自 NextMail 官方 GitHub 仓库。',
    latest: '最新版本',
    prerelease: '最新预发布版本',
    stable: 'GitHub 发布版本',
    recommended: '适合你的设备',
    primary: '主要支持平台',
    experimental: '实验性支持',
    windows: 'Windows',
    macos: 'macOS',
    linux: 'Linux',
    windowsReq: 'Windows 10 22H2 或更新版本 · x64',
    macosReq: 'macOS 12 或更新版本',
    linuxReq: 'Linux x64 · 需满足发行版系统依赖',
    linuxDetail:
      'DEB、RPM 与 AppImage 用于早期测试。Linux 尚未经过与 Windows、macOS 同等程度的适配与验收，兼容性取决于发行版和 Tauri 系统依赖。',
    install: '安装前，请先了解',
    warning:
      '当前为预览版。Windows 尚未使用正式代码签名；macOS 使用 ad-hoc 签名，尚未通过 Apple 公证。系统可能显示“开发者未经验证”等提示。请只从官方仓库下载。',
    unavailable:
      '暂时无法取得版本数据，请前往 GitHub Releases 下载真实发布版本。',
    history: '需要更早的版本？',
    historyLink: '查看全部历史版本',
    changelog: '阅读更新日志',
    refresh:
      '此静态页面对应下方核实时间的版本快照。最新可用文件始终以 GitHub Releases 为准。',
    noPreview:
      '目前没有单独标记为 GitHub 预发布的版本。无论 GitHub 如何标记，NextMail 当前仍处于 Preview。',
    requirements: '系统要求',
    asset: '下载',
  },
  docs: {
    label: 'NEXTMAIL 使用手册',
    title: '一点指引，\n很快就能上手。',
    description: '完成设置，了解同步，让 NextMail 更适合你的使用习惯。',
    search: '搜索使用手册',
    placeholder: '搜索文档…',
    noResults: '没有找到相关文档，试试“同步”“账户”或“安全”。',
    contents: '本页目录',
    verified: '根据项目实际文档编写',
    categories: ['开始使用', '账户', '同步', '安全', '常见问题'],
    read: '阅读文档',
    next: '继续阅读',
    source: '查看实现说明',
  },
  changelog: {
    label: '持续打磨，公开记录',
    title: '细节累积，\n一步一步向前。',
    description: '根据项目真实更新日志整理的近期变化。每一次改进，都有迹可循。',
    latest: '最新',
    source: '阅读完整更新日志',
    note: '产品仍处于 Preview。版本号和 GitHub 发布标记不代表签名、公证与平台限制已经改变。',
    changes: '版本变化',
  },
  footer: {
    line: '一款安静、本地优先的桌面邮件客户端。',
    product: '产品',
    resources: '资源',
    project: '项目',
    handbook: '使用手册',
    issues: '反馈问题',
    source: '源代码',
    credit: '用心构建，开放成长。',
    notice: 'Preview · Windows 与 macOS · Linux 实验支持',
  },
};

export function useTranslations(locale: Locale): Dictionary {
  return locale === 'zh-CN' ? zh : en;
}
