export const developer = {
  name: "大侠阿木",
  handle: "DAXIAAMU",
  email: "xunzhaowenke@gmail.com",
};

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
export const sitePath = process.env.GITHUB_ACTIONS === "true" && repository && !repository.endsWith(".github.io")
  ? `/${repository}`
  : "";

type Project = {
  name: string;
  monogram: string;
  category: string;
  status: string;
  description: string;
  tags: readonly string[];
  accent: "lime" | "blue" | "orange" | "violet";
  featured?: boolean;
  url?: string;
  action?: string;
};

export const projects: readonly Project[] = [
  {
    name: "一加全能工具箱",
    monogram: "1+",
    category: "Android 工具",
    status: "持续开发",
    description: "面向一加手机用户的实用工具集合，把常用能力整合进清晰、高效的一站式体验。",
    tags: ["Android", "Kotlin", "效率工具"],
    accent: "lime",
    featured: true,
    url: "https://optool.daxiaamu.com/",
    action: "查看详情",
  },
  {
    name: "爱看影视",
    monogram: "IK",
    category: "影视工具",
    status: "Android APP",
    description: "简洁原生的 Android 影视聚合应用，覆盖电影、电视剧、榜单与多线路播放。",
    tags: ["Android", "Kotlin", "影视聚合"],
    accent: "blue",
    url: "https://ikanapp.net/",
    action: "查看详情",
  },
  {
    name: "爱看机器人增强",
    monogram: "猴",
    category: "浏览器脚本",
    status: "油猴脚本",
    description: "为爱看机器人加入失效线路自动切换、换线续播、自动下一集与观看进度记忆。",
    tags: ["UserScript", "Tampermonkey", "播放增强"],
    accent: "orange",
    url: "https://greasyfork.org/zh-CN/scripts/589261",
    action: "查看详情",
  },
  {
    name: "QuickCopy",
    monogram: "QC",
    category: "Windows 工具",
    status: "开源",
    description: "轻量级 Windows 剪贴板快捷发送工具，让常用文本的复制与发送更直接。",
    tags: ["C", "Windows", "剪贴板"],
    accent: "orange",
    url: "https://github.com/daxiaamu/QuickCopy",
    action: "查看详情",
  },
  {
    name: "OnePlus 12 · 55W PPS",
    monogram: "55",
    category: "充电模块",
    status: "开源",
    description: "为一加 12 强制启用 55W PPS 快充能力的轻量模块。",
    tags: ["OnePlus 12", "55W PPS", "模块"],
    accent: "violet",
    url: "https://github.com/daxiaamu/OnePlus12_55WPPS",
    action: "查看详情",
  },
  {
    name: "米家中控模式",
    monogram: "MI",
    category: "Android 模块",
    status: "开源",
    description: "为米家应用提供中控模式体验的 Android / LSPosed 模块。",
    tags: ["Java", "LSPosed", "Xiaomi Home"],
    accent: "blue",
    url: "https://github.com/daxiaamu/mijiapanel",
    action: "查看详情",
  },
  {
    name: "Guise Reborn",
    monogram: "GR",
    category: "Android 模块",
    status: "社区维护",
    description: "面向 LSPosed / Modern Xposed 的应用运行环境伪装模块，按应用控制设备与隐私相关 API 返回。",
    tags: ["Kotlin", "LSPosed", "Compose"],
    accent: "violet",
    url: "https://github.com/daxiaamu/Guise_Reborn",
    action: "查看详情",
  },
  {
    name: "MUDL-C",
    monogram: "MC",
    category: "命令行工具",
    status: "开源",
    description: "面向 Windows 的纳米级 CLI 下载器，支持多线程、断点续传且无额外依赖。",
    tags: ["C", "Windows", "多线程下载"],
    accent: "lime",
    url: "https://github.com/daxiaamu/mudl-c",
    action: "查看详情",
  },
  {
    name: "MU 投屏",
    monogram: "MU",
    category: "Windows 工具",
    status: "开源",
    description: "基于 scrcpy 的轻量 Android 投屏启动器，支持设备检测、画质预设、断线等待与自动恢复。",
    tags: ["C", "scrcpy", "Android 投屏"],
    accent: "orange",
    url: "https://github.com/daxiaamu/MUScrcpy",
    action: "查看详情",
  },
  {
    name: "Payload Dumper C",
    monogram: "PD",
    category: "命令行工具",
    status: "开源",
    description: "体积小、速度快的多线程 payload.bin 解包工具。",
    tags: ["C", "payload.bin", "多线程"],
    accent: "violet",
    url: "https://github.com/daxiaamu/payload_dumper_c",
    action: "查看详情",
  },
  {
    name: "Payload_Dumper网页版",
    monogram: "PW",
    category: "在线工具",
    status: "网页版",
    description: "无需安装，在浏览器中处理 payload.bin 固件包的在线工具。",
    tags: ["Web", "payload.bin", "固件工具"],
    accent: "blue",
    url: "https://info.oplusrom.com/",
    action: "查看详情",
  },
  {
    name: "GitHub Downloader",
    monogram: "GD",
    category: "下载工具",
    status: "开源",
    description: "用于批量获取 GitHub Releases 文件的下载工具。",
    tags: ["Python", "GitHub", "Releases"],
    accent: "blue",
    url: "https://github.com/daxiaamu/github-downloader",
    action: "查看详情",
  },

  {
    name: "RealmeUI Spanish Enabler",
    monogram: "ES",
    category: "Android 工具",
    status: "开源",
    description: "为已 Root 的 Realme UI 与 ColorOS 设备快速启用西班牙语的实用工具。",
    tags: ["Java", "Root", "RealmeUI"],
    accent: "orange",
    url: "https://github.com/daxiaamu/RealmeUI-Spanish-Enabler",
    action: "查看详情",
  },
  {
    name: "知了",
    monogram: "知",
    category: "Android 模块",
    status: "开源",
    description: "面向知乎客户端的去广告 Xposed 模块，让信息流与阅读界面更清爽。",
    tags: ["Java", "Xposed", "知乎"],
    accent: "lime",
    url: "https://github.com/daxiaamu/Zhiliao",
    action: "查看详情",
  },
  {
    name: "Gallery Enhance",
    monogram: "GE",
    category: "Android 模块",
    status: "开源",
    description: "解除 ColorOS 相册将视频导出为实况照片时的 3 秒时长限制。",
    tags: ["Kotlin", "libxposed", "ColorOS"],
    accent: "blue",
    url: "https://github.com/daxiaamu/GalleryEnhance",
    action: "查看详情",
  },
  {
    name: "KSU 中文网",
    monogram: "KSU",
    category: "资源网站",
    status: "持续更新",
    description: "汇总 ROOT 工具与常见模块的版本更新，提供中文信息与下载入口。",
    tags: ["Root", "KernelSU", "模块更新"],
    accent: "lime",
    url: "https://kernelsu.cn/",
    action: "查看详情",
  },

];
