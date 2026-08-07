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
    default: "DAXIAAMU — 独立开发者",
    template: "%s — DAXIAAMU",
  },
  description: "独立开发者大侠阿木（DAXIAAMU）的个人主页：查看开发项目与应用隐私政策。",
  icons: { icon: `${pagePath}/favicon.svg` },
  openGraph: {
    title: "DAXIAAMU — 独立开发者",
    description: "把复杂的问题，做成简单的产品。",
    type: "website",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary",
    title: "DAXIAAMU — 独立开发者",
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
