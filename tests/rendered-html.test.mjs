import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const output = new URL("../dist/client/", import.meta.url);

test("exports the developer homepage", async () => {
  const html = await readFile(new URL("index.html", output), "utf8");

  assert.match(html, /<html lang="zh-CN">/);
  assert.match(html, /大侠阿木 DAXIAAMU — 个人主页/);
  assert.match(html, /一加全能工具箱/);
  assert.match(html, /爱看影视/);
  assert.match(html, /热门项目/);
  assert.doesNotMatch(html, /class="project-stars"/);
  assert.doesNotMatch(html, /class="project-number"/);
  assert.match(html, /GITHUB CONTRIBUTIONS/);
  assert.match(html, /class="contribution-grid"/);
  assert.match(html, /近一年贡献/);
  assert.match(html, /当前连续天数/);
  assert.match(html, /最长连续天数/);
  assert.match(html, /https:\/\/optool\.daxiaamu\.com\//);
  assert.match(html, /https:\/\/ikanapp\.net\//);
  assert.match(html, /https:\/\/github\.com\/daxiaamu\/payload_dumper_c/);
  assert.match(html, /https:\/\/github\.com\/daxiaamu\/RealmeUI-Spanish-Enabler/);
  assert.match(html, /https:\/\/github\.com\/daxiaamu\/Zhiliao/);
  assert.match(html, /https:\/\/github\.com\/daxiaamu\/GalleryEnhance/);
  assert.match(html, /https:\/\/greasyfork\.org\/zh-CN\/scripts\/589261/);
  assert.match(html, /https:\/\/info\.oplusrom\.com\//);
  assert.match(html, /https:\/\/kernelsu\.cn\//);
  assert.match(html, /前往官网/);
  assert.match(html, /查看详情/);
  assert.doesNotMatch(html, /查看源码/);
  const projectNames = [...html.matchAll(/<h3>(.*?)<\/h3>/g)].map((match) => match[1]);
  assert.equal(projectNames.indexOf("爱看机器人增强"), projectNames.indexOf("爱看影视") + 1);
  assert.equal(projectNames.indexOf("Payload_Dumper网页版"), projectNames.indexOf("Payload Dumper C") + 1);
  assert.match(html, /daxiaamu-logo\.png/);
  assert.match(html, /https:\/\/daxiaamu\.com\//);
  assert.match(html, /https:\/\/ifdian\.net\/a\/daxiaamu/);
  assert.match(html, /https:\/\/space\.bilibili\.com\/317357319/);
  assert.match(html, /https:\/\/weibo\.com\/daxiaamu/);
  assert.match(html, /https:\/\/coolapk\.com\/u\//);
  assert.match(html, /aria-label="常用入口"/);
  assert.match(html, /class="quick-link tone-blog"/);
  assert.match(html, /class="quick-link tone-bilibili"/);
  assert.match(html, /class="quick-link tone-weibo"/);
  assert.match(html, /class="quick-link tone-coolapk"/);
  assert.doesNotMatch(html, /class="quick-link tone-donate"/);
  assert.match(html, /累计访问/);
  assert.match(html, /visitor-counter-/);
  assert.match(html, /terminal-text/);
});

test("exports a public privacy policy with required disclosures", async () => {
  const html = await readFile(new URL("devicepresence/privacy.html", output), "utf8");

  assert.match(html, /Device Presence 隐私政策 — 大侠阿木 DAXIAAMU/);
  assert.match(html, /无需注册或登录/);
  assert.match(html, /摄像头画面仅在设备上/);
  assert.match(html, /MediaPipe 与 ML Kit/);
  assert.match(html, /MacroDroid/);
  assert.match(html, /com\.dxam\.presencedetector/);
  assert.match(html, /本地保存、保留与删除/);
  assert.match(html, /xunzhaowenke@gmail\.com/);
});
