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
          <a href={`${sitePath}/privacy`}>隐私政策</a>
          <a className="nav-contact" href={`mailto:${developer.email}`}>联系我</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> 独立开发者 · 正在创造</p>
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
            <p className="eyebrow">精选作品</p>
            <h2 id="projects-title">近期项目</h2>
          </div>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article className={`project-card project-${index + 1}`} key={project.name}>
              <div className="project-number">0{index + 1}</div>
              <div className="project-icon" aria-hidden="true">{project.monogram}</div>
              <div className="project-content">
                <div className="project-meta"><span>{project.category}</span><span>{project.status}</span></div>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
              <span className="project-link" aria-label={`${project.name}，${project.status}`}>了解项目 <span aria-hidden="true">↗</span></span>
            </article>
          ))}
        </div>
      </section>

      <section className="privacy-callout" aria-labelledby="privacy-title">
        <div className="privacy-symbol" aria-hidden="true">◎</div>
        <div>
          <p className="eyebrow">公开与透明</p>
          <h2 id="privacy-title">你的数据，应当由你掌控。</h2>
          <p>查看应用如何处理数据、数据保留方式，以及如何提出删除请求。</p>
        </div>
        <a className="button button-light" href={`${sitePath}/privacy`}>阅读隐私政策 <span aria-hidden="true">→</span></a>
      </section>

      <footer>
        <div><span className="brand-mark small">DA</span><p>独立开发，认真打磨。<br />© {new Date().getFullYear()} {developer.handle}</p></div>
        <div className="footer-links"><a href={`mailto:${developer.email}`}>{developer.email}</a><a href={`${sitePath}/privacy`}>隐私政策</a></div>
      </footer>
    </main>
  );
}
