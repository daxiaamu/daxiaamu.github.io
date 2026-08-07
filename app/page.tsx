import { developer, projects, sitePath } from "./site-data";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href={`${sitePath}/`} aria-label={`${developer.name} 首页`}>
          <span className="brand-mark">DA</span>
          <span>{developer.name}</span>
        </a>
        <nav className="nav-links" aria-label="主导航">
          <a href="#projects">项目</a>
          <a href="https://daxiaamu.com/" target="_blank" rel="noreferrer">博客</a>
          <a href="https://ifdian.net/a/daxiaamu" target="_blank" rel="noreferrer">捐赠</a>
          <a className="nav-contact" href={`mailto:${developer.email}`}>联系我</a>
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
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">查看项目 <span aria-hidden="true">↓</span></a>
            <a className="button button-secondary" href={`mailto:${developer.email}`}>聊聊你的想法 <span aria-hidden="true">↗</span></a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="code-card">
            <div className="code-card-top"><i /><i /><i /><span>build.log</span></div>
            <div className="code-line"><b>01</b><span><em>const</em> idea = <strong>&quot;真实需求&quot;</strong>;</span></div>
            <div className="code-line"><b>02</b><span><em>while</em> (canImprove) {'{'}</span></div>
            <div className="code-line indent"><b>03</b><span>product.<u>iterate</u>();</span></div>
            <div className="code-line"><b>04</b><span>{'}'}</span></div>
            <div className="code-result"><span>✓</span> ready to ship</div>
          </div>
          <span className="float-label label-android">ANDROID</span>
          <span className="float-label label-detail">DETAILS MATTER</span>
        </div>
      </section>

      <section className="projects-section" id="projects" aria-labelledby="projects-title">
        <div className="section-heading">
          <div>
            <h2 id="projects-title">我的项目</h2>
          </div>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card accent-${project.accent} ${project.featured ? "featured" : ""}`} key={project.name}>
              <div className="project-number">{String(index + 1).padStart(2, "0")}</div>
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

      <footer>
        <div><span className="brand-mark small">DA</span><p>从真实需求出发，把工具做得简单、可靠。<br />© {new Date().getFullYear()} {developer.handle}</p></div>
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
