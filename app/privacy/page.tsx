import type { Metadata } from "next";
import Image from "next/image";
import { developer, sitePath } from "../site-data";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "应用隐私政策",
  description: `由 ${developer.name} 发布的应用隐私政策，包含数据收集、保存、删除与联系方式。`,
};

const updated = "2026 年 8 月 8 日";

export default function PrivacyPolicy() {
  return (
    <main className="policy-shell">
      <header className="site-header policy-header">
        <a className="brand" href={`${sitePath}/`} aria-label="返回首页"><Image className="brand-logo" src={`${sitePath}/daxiaamu-logo.png`} alt="" width={38} height={38} unoptimized /><span>{developer.handle}</span></a>
        <a className="back-link" href={`${sitePath}/`}>← 返回首页</a>
      </header>

      <article className="policy-layout">
        <aside className="policy-aside">
          <p className="eyebrow">PRIVACY</p>
          <nav aria-label="隐私政策目录">
            <a href="#scope">适用范围</a>
            <a href="#collection">数据收集</a>
            <a href="#storage">保存与安全</a>
            <a href="#deletion">数据删除</a>
            <a href="#children">儿童隐私</a>
            <a href="#changes">政策更新</a>
            <a href="#contact">联系我们</a>
          </nav>
        </aside>

        <div className="policy-content">
          <div className="policy-title">
            <p className="eyebrow">应用隐私政策</p>
            <h1>隐私，简单说明。</h1>
            <p>我们重视并尊重你的隐私。本页面公开说明由 {developer.name} 开发和发布的应用如何处理数据。</p>
            <div className="policy-meta"><span>生效日期：{updated}</span><span>最后更新：{updated}</span></div>
          </div>

          <div className="policy-highlight">
            <strong>核心说明</strong>
            <p>应用无需注册或登录，不会主动收集、出售或与第三方共享可用于识别你身份的个人数据。</p>
          </div>

          <section id="scope"><span className="section-index">01</span><div><h2>适用范围</h2><p>本政策适用于由 {developer.name} 开发并发布的移动应用，包括“一加全能工具箱”，以及在应用商店页面明确链接至本政策的其他应用。</p></div></section>

          <section id="collection"><span className="section-index">02</span><div><h2>我们收集的数据</h2><p>应用无需创建账户。我们不会主动收集你的姓名、电子邮箱、电话号码、精确位置、通讯录、照片或其他可用于识别个人身份的信息。</p><p>应用的部分功能可能需要访问设备能力或系统信息。相关权限仅在实现你主动使用的功能时调用，权限用途会在系统授权界面中说明；你可以拒绝或随时在系统设置中撤销授权。</p></div></section>

          <section id="storage"><span className="section-index">03</span><div><h2>数据保存与安全</h2><p>功能设置与偏好数据仅保存在你的设备本地，不会上传至开发者服务器。数据的保存期限由你决定：只要应用仍安装在设备上，本地设置可能会保留。</p><p>我们不会出售、出租或交换你的数据。若未来引入会改变上述处理方式的功能，我们会先更新本政策并在适当位置告知你。</p></div></section>

          <section id="deletion"><span className="section-index">04</span><div><h2>数据删除</h2><p>你可以通过清除应用数据或卸载应用，删除由应用保存在设备本地的全部数据。由于我们不在服务器保存个人数据，因此通常没有需要向开发者提交的服务器端删除请求。</p><p>如你仍有数据删除方面的疑问，请发送邮件至 <a href={`mailto:${developer.email}`}>{developer.email}</a>，我们会在收到请求后的 30 天内答复。</p></div></section>

          <section id="children"><span className="section-index">05</span><div><h2>儿童隐私</h2><p>应用不以儿童为主要目标用户，也不会有意收集儿童的个人信息。如果你认为儿童向我们提供了个人信息，请通过下方联系方式告知，我们将及时核实并处理。</p></div></section>

          <section id="changes"><span className="section-index">06</span><div><h2>政策更新</h2><p>我们可能因产品功能或法律要求变化而更新本政策。更新后的版本会发布在本页面，并同步修改“最后更新”日期。重大变化会在合理可行的范围内另行提示。</p></div></section>

          <section id="contact" className="contact-section"><span className="section-index">07</span><div><h2>联系我们</h2><p>如对本隐私政策或数据处理方式有任何问题，可直接联系开发者。</p><dl><div><dt>开发者</dt><dd>{developer.name}</dd></div><div><dt>联系邮箱</dt><dd><a href={`mailto:${developer.email}`}>{developer.email}</a></dd></div></dl></div></section>
        </div>
      </article>

      <footer className="policy-footer"><p>© {new Date().getFullYear()} {developer.handle}</p><a href={`${sitePath}/`}>返回个人主页 →</a></footer>
    </main>
  );
}
