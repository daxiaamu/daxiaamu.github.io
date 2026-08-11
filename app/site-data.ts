import projectStars from "./project-stars.generated.json";

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

type ProjectWithStars = Project & {
  stars: number;
};

const projectList: readonly Project[] = [
  {
    name: "一加全能工具箱",
    monogram: "1+",
    category: "Android 工具",
    status: "持续开发",
    description: "面向一加手机用户的实用工具集合，把常用能力整合进清晰、高效的一站式体验。",
    tags: ["Android", "Kotlin", "效率工具"],
    accent: "lime",
    featured: true,
    url: "https://github.com/daxiaamu/oplusmutools",
    action: "查看源码",
  },
  {
    name: "爱看影视",
    monogram: "IK",
    category: "影视工具",
    status: "APP · 油猴脚本",
    description: "简洁原生的 Android 影视聚合应用，同时提供油猴脚本，覆盖电影、电视剧、榜单与多线路播放。",
    tags: ["Android", "UserScript", "影视聚合"],
    accent: "blue",
    featured: true,
    url: "https://github.com/daxiaamu/ikandroid",
    action: "查看源码",
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
    action: "查看源码",
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
    action: "查看源码",
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
    action: "查看源码",
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
    action: "查看源码",
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
    action: "查看源码",
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
    action: "查看源码",
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
    action: "查看源码",
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
    action: "查看源码",
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
    action: "查看源码",
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
    action: "查看源码",
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
    action: "查看源码",
  },
];

const starsByRepository = projectStars as Record<string, number>;

function repositoryName(project: Project) {
  return project.url?.match(/^https:\/\/github\.com\/daxiaamu\/([^/]+)\/?$/i)?.[1];
}

export const projects: readonly ProjectWithStars[] = projectList
  .map((project, originalIndex) => ({
    project,
    originalIndex,
    stars: starsByRepository[repositoryName(project) ?? ""] ?? 0,
  }))
  .sort((left, right) =>
    right.stars - left.stars || left.originalIndex - right.originalIndex
  )
  .map(({ project, stars }) => ({ ...project, stars }));
