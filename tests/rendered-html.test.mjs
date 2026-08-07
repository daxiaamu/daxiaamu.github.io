import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const output = new URL("../dist/client/", import.meta.url);

test("exports the developer homepage", async () => {
  const html = await readFile(new URL("index.html", output), "utf8");

  assert.match(html, /<html lang="zh-CN">/);
  assert.match(html, /DAXIAAMU — 个人主页/);
  assert.match(html, /一加全能工具箱/);
  assert.match(html, /爱看影视/);
  assert.match(html, /https:\/\/ikanapp\.net\//);
  assert.match(html, /https:\/\/github\.com\/daxiaamu\/payload_dumper_c/);
  assert.match(html, /daxiaamu-logo\.png/);
  assert.match(html, /https:\/\/daxiaamu\.com\//);
  assert.match(html, /https:\/\/ifdian\.net\/a\/daxiaamu/);
  assert.match(html, /https:\/\/space\.bilibili\.com\/317357319/);
  assert.match(html, /https:\/\/weibo\.com\/daxiaamu/);
  assert.match(html, /https:\/\/coolapk\.com\/u\//);
  assert.match(html, /聊聊你的想法/);
});

test("exports a public privacy policy with required disclosures", async () => {
  const html = await readFile(new URL("privacy.html", output), "utf8");

  assert.match(html, /应用隐私政策 — DAXIAAMU/);
  assert.match(html, /无需注册或登录/);
  assert.match(html, /数据保存与安全/);
  assert.match(html, /数据删除/);
  assert.match(html, /xunzhaowenke@gmail\.com/);
});
