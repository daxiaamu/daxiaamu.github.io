import type { Metadata } from "next";
import "./globals.css";

const [githubOwner, githubRepository] = process.env.GITHUB_REPOSITORY?.split("/") ?? [];
const isProjectPage = Boolean(githubRepository && !githubRepository.endsWith(".github.io"));
const pagePath = isProjectPage ? `/${githubRepository}` : "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (githubOwner ? `https://${githubOwner}.github.io${pagePath}/` : "http://localhost:3000/");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DAXIAAMU — 个人主页",
    template: "%s — DAXIAAMU",
  },
  description: "大侠阿木（DAXIAAMU）的个人主页：查看项目、产品与实用工具。",
  icons: {
    icon: `${pagePath}/daxiaamu-logo.png`,
    shortcut: `${pagePath}/daxiaamu-logo.png`,
    apple: `${pagePath}/daxiaamu-logo.png`,
  },
  openGraph: {
    title: "DAXIAAMU — 个人主页",
    description: "把复杂的问题，做成简单的产品。",
    type: "website",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary",
    title: "DAXIAAMU — 个人主页",
    description: "把复杂的问题，做成简单的产品。",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
