# DAXIAAMU Developer Site

大侠阿木的个人开发者主页，用于展示项目并提供公开的应用隐私政策。

## 页面

- `/`：项目展示首页
- `/privacy`：应用隐私政策（无需登录、静态 HTML、不可由访客编辑）

## 本地开发

需要 Node.js 22.13 或更高版本。

```bash
npm install
npm run dev
```

生产构建：

```bash
npm run build
```

静态文件输出到 `dist/client`。

## 修改内容

开发者名称、邮箱与项目列表集中在 `app/site-data.ts`。隐私政策正文位于 `app/privacy/page.tsx`。

## 发布到 GitHub Pages

仓库已包含 GitHub Actions 自动发布流程。推送到 `main` 分支后，在仓库的 **Settings → Pages → Source** 中选择 **GitHub Actions**。之后每次推送都会自动构建并发布。

构建会自动识别用户主页仓库（`username.github.io`）或普通项目仓库，并处理对应的资源路径。
