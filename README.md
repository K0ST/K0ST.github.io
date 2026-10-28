# K0ST / Notes

个人技术博客，网址：https://k0st.github.io

## 写一篇文章

在 `src/posts/` 中新建一个 `.md` 文件，例如 `my-first-note.md`。文件名会出现在文章网址里，建议使用英文和短横线。

复制下面的格式，再写正文：

```markdown
---
title: 我的文章标题
description: 用一句话介绍这篇文章。
date: 2026-10-28
category: 技术笔记
---

这里是正文。

## 一个小标题

继续写文章。支持列表、链接、图片和代码块。
```

把文件保存到 GitHub 的 `main` 分支后，网站会自动更新。通常需要几分钟，可以在仓库的 Actions 页面查看发布进度。

### 图片

把图片放入 `src/assets/images/`，文章中写：

```markdown
![图片说明](/assets/images/example.png)
```

### 代码块

用三个反引号包住代码；开始的反引号后可以写语言名称，例如 `javascript`。代码区域支持横向滚动。

### 草稿

文章顶部增加 `draft: true` 后，不会生成该文章页面，也不会出现在列表、订阅和站点目录中。

注意：这是公开仓库。草稿即使不显示在博客里，文件本身仍能被其他人从 GitHub 看到。尚未准备公开的内容请保存在自己的电脑上。

## 修改博客信息

- 博客名称、简介：`src/_data/site.json`
- 首页文字：`src/index.njk`
- 关于页面：`src/about.njk`
- 排版与颜色：`src/assets/style.css`

## 在电脑上预览

安装 Node.js 24 后，在项目目录运行：

```sh
npm ci
npm run dev
```

打开命令行显示的本地网址，即可边写边看效果。

## 发布设置

仓库使用 GitHub Pages。在 Settings → Pages 中选择 GitHub Actions。

`.github/workflows/pages.yml` 会在每次更新 `main` 后生成网页并发布。`_site/` 是生成的网页，不需要手动修改或提交。

博客提供文章搜索、RSS 订阅、手机布局和 404 页面。没有评论或登录功能，也没有加入访问统计。
