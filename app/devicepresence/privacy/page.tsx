import type { Metadata } from "next";
import Image from "next/image";
import { developer, sitePath } from "../../site-data";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Device Presence 隐私政策",
  description: `由 ${developer.name} 发布的 Device Presence（人在检测插件）隐私政策。`,
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
            <a href="#camera">摄像头与本机处理</a>
            <a href="#technical">技术诊断数据</a>
            <a href="#automation">自动化应用</a>
            <a href="#storage">本地保存与删除</a>
            <a href="#security">安全与你的选择</a>
            <a href="#children">儿童隐私</a>
            <a href="#changes">政策更新</a>
            <a href="#contact">联系方式</a>
          </nav>
        </aside>

        <div className="policy-content">
          <div className="policy-title">
            <p className="eyebrow">Device Presence · 人在检测插件</p>
            <h1>隐私政策</h1>
            <p>本政策说明由 {developer.name}（{developer.handle}）开发和发布的 Device Presence Android 应用如何访问摄像头、处理画面以及处理技术数据。</p>
            <div className="policy-meta"><span>生效日期：{updated}</span><span>最后更新：{updated}</span></div>
          </div>

          <div className="policy-highlight">
            <strong>核心说明</strong>
            <p>摄像头画面仅在设备上用于判断是否有人。应用不录像、不保存图片、不识别人员身份，也不向开发者服务器上传摄像头画面或检测结果。</p>
          </div>

          <section id="scope"><span className="section-index">01</span><div><h2>适用范围</h2><p>本政策仅适用于包名为 <code>com.dxam.presencedetector</code> 的 Device Presence（人在检测插件）。应用无需注册或登录，不提供广告，也不使用开发者运营的远程服务器处理摄像头画面。</p></div></section>

          <section id="camera"><span className="section-index">02</span><div><h2>摄像头访问与本机处理</h2><p>只有在你明确同意隐私说明、授予摄像头权限并主动启动服务后，应用才会访问你选择的前置或后置摄像头。当服务运行时，系统会显示持续的前台服务通知；如设备系统允许，检测可在应用进入后台或屏幕关闭后继续。</p><p>摄像头帧仅在当前设备中交给 MediaPipe 和 ML Kit，用于判断画面中是否存在人体或人脸。应用不执行人脸身份识别，不录制视频，不保存摄像头帧，也不上传画面或检测结果。停止服务会释放摄像头并结束画面处理。</p></div></section>

          <section id="technical"><span className="section-index">03</span><div><h2>MediaPipe 与 ML Kit 技术数据</h2><p>MediaPipe 和 ML Kit 的图像分析在设备上进行。根据 Google 的 SDK 说明，ML Kit 可能向 Google 发送应用和设备信息、每次安装的标识符、性能指标、API 使用事件和错误代码，用于诊断、维护、使用分析及防止滥用。这些传输使用 HTTPS 加密连接。Google 的相关 SDK 不会收到摄像头画面或应用生成的“有人/无人”检测结果。</p></div></section>

          <section id="automation"><span className="section-index">04</span><div><h2>与自动化应用的数据交互</h2><p>当你在 MacroDroid、Tasker、Automate、Locale X 或其他兼容 Tasker/Locale 协议的应用中配置本插件时，本应用会在设备本地向该自动化应用提供当前“有人”或“无人”状态，并可在状态变化时发出本地事件。这些信息仅用于执行你创建的自动化规则；摄像头图像不会提供给这些应用。自动化应用后续如何使用状态数据，受其各自的隐私政策和你配置的规则约束。</p></div></section>

          <section id="storage"><span className="section-index">05</span><div><h2>本地保存、保留与删除</h2><p>应用在设备本地保存摄像头选择、检测参数、隐私同意状态、最近一次有人/无人状态及其更新时间。这些数据在应用安装期间保留，不上传至开发者服务器。</p><p>你可以通过系统设置中的“清除数据”或卸载应用，删除由应用保存在设备上的全部数据。由于开发者不运营用于保存这些数据的账户或服务器，因此没有需要单独提交的服务器端删除请求。</p></div></section>

          <section id="security"><span className="section-index">06</span><div><h2>安全与你的选择</h2><p>应用不允许明文网络流量，且不会将应用数据加入 Android 备份。你可随时从应用或持续通知中停止服务，也可以在系统设置中撤销摄像头或通知权限。撤销摄像头权限后，人在检测将无法运行。</p></div></section>

          <section id="children"><span className="section-index">07</span><div><h2>儿童隐私</h2><p>本应用是面向设备自动化用户的工具，不以儿童为目标用户，也不会有意收集儿童的个人信息。</p></div></section>

          <section id="changes"><span className="section-index">08</span><div><h2>政策更新</h2><p>我们可能因应用功能、SDK 数据处理方式或法律及平台要求变化而更新本政策。新版本会发布在本页面并更新上方日期；如发生重大变化，应用会在合理可行的范围内再次提示你。</p></div></section>

          <section id="contact" className="contact-section"><span className="section-index">09</span><div><h2>联系方式</h2><p>如对本政策、数据处理或删除方式有疑问，可通过下列方式联系开发者。</p><dl><div><dt>应用</dt><dd>Device Presence（人在检测插件）</dd></div><div><dt>开发者</dt><dd>{developer.name} / {developer.handle}</dd></div><div><dt>联系邮箱</dt><dd><a href={`mailto:${developer.email}`}>{developer.email}</a></dd></div></dl></div></section>
        </div>
      </article>

      <footer className="policy-footer"><p>© {new Date().getFullYear()} {developer.handle}</p><a href={`${sitePath}/`}>返回个人主页 →</a></footer>
    </main>
  );
}
