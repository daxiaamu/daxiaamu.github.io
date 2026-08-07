import type { Metadata } from "next";
import Image from "next/image";
import { developer, sitePath } from "../../site-data";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "设备在线事件隐私政策",
  description: `由 ${developer.name} 发布的设备在线事件（Device Presence）Android 应用隐私政策。`,
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
            <a href="#data">数据处理</a>
            <a href="#network">局域网检测</a>
            <a href="#automation">自动化应用</a>
            <a href="#permissions">权限与后台运行</a>
            <a href="#storage">本地保存与删除</a>
            <a href="#security">安全措施</a>
            <a href="#children">儿童隐私</a>
            <a href="#changes">政策更新</a>
            <a href="#contact">联系方式</a>
          </nav>
        </aside>

        <div className="policy-content">
          <div className="policy-title">
            <p className="eyebrow">Device Presence · 设备在线事件</p>
            <h1>隐私政策</h1>
            <p>本政策说明由 {developer.name}（{developer.handle}）开发和发布的“设备在线事件”Android 应用如何处理设备配置、局域网检测结果及自动化事件。</p>
            <div className="policy-meta"><span>生效日期：{updated}</span><span>最后更新：{updated}</span></div>
          </div>

          <div className="policy-highlight">
            <strong>核心说明</strong>
            <p>应用不要求注册或登录，不包含广告或分析 SDK，不向开发者服务器上传目标 IP、检测结果或其他用户数据。局域网检测和自动化事件处理均在你的 Android 设备本地完成。</p>
          </div>

          <section id="scope"><span className="section-index">01</span><div><h2>适用范围</h2><p>本政策仅适用于包名为 <code>com.daxiaamu.devicepresence</code> 的“设备在线事件”（Device Presence）Android 应用。应用用于检测用户指定的局域网设备是否在线，并通过 Tasker/Locale 插件协议向 MacroDroid、Tasker 等兼容自动化应用提供状态变化事件。</p></div></section>

          <section id="data"><span className="section-index">02</span><div><h2>我们处理的数据</h2><p>应用会在本机处理你主动填写的目标 IP 地址或主机名、检测间隔、Ping 超时、离线防抖参数，以及最近一次检测状态、网络延迟和状态变化时间。这些数据仅用于执行你配置的设备在线检测，不会发送给开发者或开发者运营的服务器。</p><p>应用不收集姓名、电话号码、电子邮件、精确位置、联系人、照片、文件、广告标识符或账户信息。</p></div></section>

          <section id="network"><span className="section-index">03</span><div><h2>局域网检测</h2><p>应用按照你设置的间隔，使用 Android 系统提供的 Ping 能力向你指定的 IP 地址或主机名发送 ICMP 网络请求，以判断目标是否可达并估算延迟。请求直接发生在你的设备与目标地址之间，不经过开发者服务器。</p><p>如果你填写公网地址或可解析到公网的主机名，请求会发送到该地址。请仅检测你有权访问或管理的设备。</p></div></section>

          <section id="automation"><span className="section-index">04</span><div><h2>与自动化应用的数据交互</h2><p>当你在 MacroDroid、Tasker 或其他兼容 Tasker/Locale 协议的应用中配置本插件时，本应用会通过 Android 设备内的 Intent 和 Bundle 向相应自动化应用提供配置标识、目标地址、在线或离线状态、延迟及状态变化时间。这些信息仅用于执行你创建的自动化规则。</p><p>自动化应用收到数据后的处理方式由你的规则和相应应用的隐私政策决定。本应用不会主动把检测数据发送给未参与插件调用的远程服务。</p></div></section>

          <section id="permissions"><span className="section-index">05</span><div><h2>权限与后台运行</h2><p>应用使用网络访问和网络状态权限完成 Ping 检测；使用前台服务、唤醒锁和通知权限持续执行用户主动启用的监控并展示常驻通知；使用开机完成权限在设备重启或应用更新后恢复已启用的监控。</p><p>应用可由你主动请求忽略电池优化，以减少系统省电策略中断自动化检测的可能性。该设置不是使用应用的强制条件，可随时在 Android 系统设置中撤销。应用不会访问设备位置、摄像头、麦克风、通讯录或存储文件。</p></div></section>

          <section id="storage"><span className="section-index">06</span><div><h2>本地保存、保留与删除</h2><p>监控目标、检测参数、运行开关和检测状态保存在应用的本地私有存储中，在你删除前持续保留。应用数据不会加入 Android 云备份。</p><p>你可以在应用中清除全部已保存监控，也可以通过 Android 系统设置清除应用数据或卸载应用，从而删除应用保存的全部信息。由于开发者不运营用于保存这些数据的账户或服务器，因此没有需要单独提交的服务器端删除请求。</p></div></section>

          <section id="security"><span className="section-index">07</span><div><h2>安全措施</h2><p>应用禁止明文应用网络流量，不启用应用数据备份，并将监控配置保存在 Android 应用沙箱中。请妥善管理可访问本机自动化应用和系统设置的人员，因为这些应用可能按照你配置的规则使用检测状态。</p></div></section>

          <section id="children"><span className="section-index">08</span><div><h2>儿童隐私</h2><p>本应用是面向设备管理和自动化用户的工具，不以儿童为目标用户，也不会有意收集儿童的个人信息。</p></div></section>

          <section id="changes"><span className="section-index">09</span><div><h2>政策更新</h2><p>我们可能因应用功能、Android 或 Google Play 要求变化而更新本政策。更新后的政策会发布在本页面并修改最后更新日期；如数据处理方式发生重大变化，我们会在合理可行的范围内通过应用或发布说明提示用户。</p></div></section>

          <section id="contact" className="contact-section"><span className="section-index">10</span><div><h2>联系方式</h2><p>如对本政策、数据处理或删除方式有疑问，可通过下列方式联系开发者。</p><dl><div><dt>应用</dt><dd>设备在线事件（Device Presence）</dd></div><div><dt>包名</dt><dd><code>com.daxiaamu.devicepresence</code></dd></div><div><dt>开发者</dt><dd>{developer.name} / {developer.handle}</dd></div><div><dt>联系邮箱</dt><dd><a href={`mailto:${developer.email}`}>{developer.email}</a></dd></div></dl></div></section>
        </div>
      </article>

      <footer className="policy-footer"><p>© {new Date().getFullYear()} {developer.handle}</p><a href={`${sitePath}/`}>返回个人主页 →</a></footer>
    </main>
  );
}
