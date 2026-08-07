export const developer = {
  name: "大侠阿木",
  handle: "DAXIAAMU",
  email: "xunzhaowenke@gmail.com",
};

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
export const sitePath = process.env.GITHUB_ACTIONS === "true" && repository && !repository.endsWith(".github.io")
  ? `/${repository}`
  : "";

export const projects = [
  {
    name: "一加全能工具箱",
    monogram: "1+",
    category: "Android 工具",
    status: "持续开发",
    description: "面向一加手机用户的实用工具集合，把常用能力整合进清晰、高效的一站式体验。",
    tags: ["Android", "Kotlin", "效率工具"],
  },
  {
    name: "更多作品",
    monogram: "···",
    category: "独立产品",
    status: "正在构建",
    description: "新的想法正在经历验证、设计与开发。保持好奇，也保持对每一个细节的耐心。",
    tags: ["Product", "Design", "Coming soon"],
  },
];
