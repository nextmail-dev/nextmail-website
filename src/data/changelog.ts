/** Editorial summaries of upstream CHANGELOG.md; dates are upstream release dates. */
export const changelog = [
  {
    version: '1.1.1',
    date: '2026-10-29',
    title: {
      en: 'Back to the right message.',
      'zh-CN': '点一下通知，回到那封邮件。',
    },
    en: [
      'Clicking a system new-mail notification restores NextMail and opens the corresponding message. A summary notification opens the last message in that batch.',
      'On Windows, only clicks on currently displayed banners are supported. Notification Center history and locating a message after the app has fully quit are not supported.',
      'Fixed development startup after upgrading dependencies.',
    ],
    'zh-CN': [
      '点击系统新邮件通知即可回到 NextMail 并打开对应邮件；多封邮件的汇总通知会打开该批最后一封。',
      'Windows 仅支持点击正在显示的通知横幅，暂不支持通知中心历史记录，也不支持应用完全退出后的通知启动定位。',
      '修复升级后开发调试无法启动的问题。',
    ],
  },
  {
    version: '1.1.0',
    date: '2026-10-29',
    title: {
      en: 'Notifications that feel at home.',
      'zh-CN': '系统通知，更自然地提醒。',
    },
    en: [
      'Added optional system notifications, with a count summary or the last new message’s preview when multiple messages arrive.',
      'Expanded mail-server discovery for common providers and custom domains.',
      'Fixed theme and UI issues, and template/signature editor windows that failed to open.',
    ],
    'zh-CN': [
      '新增可选的系统新邮件通知，多封邮件可汇总数量，也可只显示最后一封摘要。',
      '扩展常见邮箱与企业自有域名的邮件服务器自动识别。',
      '修复 UI 与主题适配问题，以及模板、签名窗口无法正常打开的问题。',
    ],
  },
  {
    version: '1.0.1',
    date: '2026-10-29',
    title: { en: 'Meet Nova.', 'zh-CN': '遇见 Nova。' },
    en: [
      'Introduced Nova as the default interface style, with Lyra still available through visual style previews in settings.',
      'Added drag-and-drop for single or multiple messages into folders and favorites.',
      'Improved folder sorting previews and simplified navigation selection styles.',
    ],
    'zh-CN': [
      '新增默认 Nova 界面风格，保留 Lyra，可在设置中通过预览卡对比切换。',
      '支持将单封或多选邮件拖入文件夹和收藏夹入口。',
      '优化文件夹排序预览，并简化文件夹与设置导航的选中样式。',
    ],
  },
  {
    version: '1.0.0',
    date: '2026-10-27',
    title: {
      en: 'A milestone for everyday email.',
      'zh-CN': '日常邮件体验的新起点。',
    },
    en: [
      'Redesigned the rich-text composer, adding system font previews, custom sizes, and more text colors.',
      'Added editing and resending sent messages, and improved preservation of server drafts.',
      'Refined light and dark UI and fixed long waits when searching with three or more characters.',
    ],
    'zh-CN': [
      '重新设计写信编辑器，支持系统字体预览、自定义字号和丰富的文字配色。',
      '已发送邮件支持再次编辑，并改善服务器草稿的内容与样式保留。',
      '更新明暗界面，修复三个及以上字符搜索时长时间等待的问题。',
    ],
  },
  {
    version: '0.9.0',
    date: '2026-09-12',
    title: {
      en: 'A preview, before the full story.',
      'zh-CN': '先有预览，再读全文。',
    },
    en: [
      'Prepare a short plain-text preview when new messages arrive, with stable list height and no automatic full-body or attachment download.',
      'Refined English and Chinese UI, system appearance defaults, icons, and title-bar styling.',
    ],
    'zh-CN': [
      '收取新邮件时提前准备简短纯文本预览，保持列表高度稳定，仍不自动下载完整正文或附件。',
      '整理中英文界面，默认跟随系统颜色，统一图标主题色与标题栏风格。',
    ],
  },
  {
    version: '0.8.8',
    date: '2026-09-11',
    title: {
      en: 'Care for large mailboxes.',
      'zh-CN': '继续打磨大型邮箱体验。',
    },
    en: [
      'Bounded virtual-list measurements, observers, body-query caches, and incoming event pressure during large syncs.',
      'Added safer error classification and structured, redacted logging.',
      'Fixed accumulated measurement-cache memory growth and repeated background preference errors.',
    ],
    'zh-CN': [
      '清理列表虚拟测量、观察器和正文查询缓存，限制大型同步的事件压力。',
      '统一后台错误分类，增加脱敏、限流和有界日志队列。',
      '修复测量缓存持续累积造成的内存增长，以及后台保存反复弹错的问题。',
    ],
  },
  {
    version: '0.8.7',
    date: '2026-09-11',
    title: {
      en: 'Progress, message by message.',
      'zh-CN': '邮件逐封到达，界面逐步呈现。',
    },
    en: [
      'Added a process-only bilingual demo mode with fictional business messages.',
      'Introduced virtualized lists and bounded per-frame arrival handling, alongside reusable sync sessions.',
      'Added recovery for non-standard BODYSTRUCTURE responses and updated project screenshots.',
    ],
    'zh-CN': [
      '新增仅本次进程有效的双语演示模式，使用虚构商务邮件。',
      '邮件列表改用虚拟化和有界到达队列，并改进同步连接复用。',
      '兼容非标准 BODYSTRUCTURE 响应并更新项目截图。',
    ],
  },
  {
    version: '0.8.6',
    date: '2026-09-08',
    title: {
      en: 'Keep your people together.',
      'zh-CN': '联系人分组，写信更顺手。',
    },
    en: [
      'Added account-scoped contact group management, including creation, renaming, deletion, search, and member selection.',
      'Added group-name completion in To, Cc, and Bcc fields, with duplicate-address removal and keyboard navigation.',
    ],
    'zh-CN': [
      '新增账户内联系人分组管理，支持创建、改名、删除、搜索和成员选择。',
      '写信与模板支持按分组补全收件人、抄送和密送，并自动去重，支持键盘选择。',
    ],
  },
];
