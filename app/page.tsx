import Image from "next/image";
import { developer, projects, sitePath } from "./site-data";
import { InteractiveHeroVisual } from "./interactive-hero-visual";
import { GithubContributions } from "./github-contributions";
import { FaAndroid } from "react-icons/fa6";
import { LuBookOpen } from "react-icons/lu";
import { SiBilibili, SiSinaweibo } from "react-icons/si";

export default function Home() {
  const entryLinks = [
    { label: "博客", detail: "文章与记录", href: "https://daxiaamu.com/", icon: LuBookOpen, tone: "blog" },
    { label: "酷安", detail: "应用与讨论", href: "https://coolapk.com/u/%E5%A4%A7%E4%BE%A0%E9%98%BF%E6%9C%A8", icon: FaAndroid, tone: "coolapk" },
    { label: "哔哩哔哩", detail: "视频与动态", href: "https://space.bilibili.com/317357319", icon: SiBilibili, tone: "bilibili" },
    { label: "微博", detail: "最新动态", href: "https://weibo.com/daxiaamu", icon: SiSinaweibo, tone: "weibo" },
  ] as const;

  return (
    <main>
      <header className="site-header">
        <a className="brand" href={`${sitePath}/`} aria-label={`${developer.name} 首页`}>
          <Image className="brand-logo" src={`${sitePath}/daxiaamu-logo.png`} alt="" width={38} height={38} unoptimized />
          <span>{developer.name}</span>
        </a>
        <nav className="nav-links" aria-label="主导航">
          <a href="#projects">项目</a>
          <a href="https://ifdian.net/a/daxiaamu" target="_blank" rel="noreferrer">捐赠</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> 立足需求，正在创造</p>
          <h1 id="hero-title">把复杂的问题，<br /><span>做成简单的产品。</span></h1>
          <p className="hero-intro">
            你好，我是 {developer.name}。我专注于 Android 工具与实用型产品，
            从一个真实需求出发，把想法打磨成可靠、克制、好用的软件。
          </p>
          <nav className="quick-links" aria-label="常用入口">
            {entryLinks.map(({ icon: Icon, ...entry }) => (
              <a
                className={`quick-link tone-${entry.tone}`}
                href={entry.href}
                target="_blank"
                rel="noreferrer"
                key={entry.label}
              >
                <span className="entry-icon" aria-hidden="true"><Icon /></span>
                <span className="entry-copy"><strong>{entry.label}</strong><small>{entry.detail}</small></span>
                <span className="entry-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </nav>
        </div>

        <InteractiveHeroVisual />
      </section>

      <section className="projects-section" id="projects" aria-labelledby="projects-title">
        <div className="section-heading">
          <div>
            <h2 id="projects-title">热门项目</h2>
          </div>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card accent-${project.accent} ${project.featured ? "featured" : ""}`} key={project.name}>
              <div className="project-stars" title="GitHub Stars" aria-label={`GitHub Stars：${project.stars}`}>
                <span aria-hidden="true">★</span> {project.stars.toLocaleString("en-US")}
              </div>
              <div className="project-icon" aria-hidden="true">{project.monogram}</div>
              <div className="project-content">
                <div className="project-meta"><span>{project.category}</span><span>{project.status}</span></div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
              {project.url ? (
                <a className="project-link" href={project.url} target="_blank" rel="noreferrer" aria-label={`${project.action}：${project.name}`}>
                  {project.action} <span aria-hidden="true">↗</span>
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <GithubContributions />

      <footer>
        <div><Image className="brand-logo small" src={`${sitePath}/daxiaamu-logo.png`} alt="" width={34} height={34} unoptimized /><p>从真实需求出发，把工具做得简单、可靠。<br />© {new Date().getFullYear()} {developer.handle}</p></div>
        <div className="footer-links" aria-label="个人联系方式">
          <a href={`mailto:${developer.email}`}>邮箱</a>
          <a href="https://space.bilibili.com/317357319" target="_blank" rel="noreferrer">哔哩哔哩</a>
          <a href="https://weibo.com/daxiaamu" target="_blank" rel="noreferrer">微博</a>
          <a href="https://coolapk.com/u/%E5%A4%A7%E4%BE%A0%E9%98%BF%E6%9C%A8" target="_blank" rel="noreferrer">酷安</a>
        </div>
      </footer>
    </main>
  );
}
