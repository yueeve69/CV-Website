# 杨怿涵 Eve Yang · 个人作品集 Portfolio

中英双语的个人作品集网站，用于秋招投递。纯静态站点，托管在 **GitHub Pages**，永久免费。

**在线地址（启用 Pages 后生成）：** `https://yueeve69.github.io/cv-website/`

---

## 🚀 如何让网站上线（只需做一次）

网站代码推送后，需要你在 GitHub 网页上点一次开关：

1. 打开仓库 **Settings（设置）** → 左侧 **Pages**。
2. 在 **Build and deployment → Source** 选择 **GitHub Actions**。
3. 完成。每次推送代码后，会自动部署，约 1–2 分钟后访问上面的网址即可。

> 如果 Source 里没有 “GitHub Actions” 选项，先随便选一次 “Deploy from a branch” 再切回来即可刷新出来。

---

## ✏️ 如何修改内容（不用会写代码）

所有文字、项目、数据都集中在一个文件里：

**`assets/js/main.js`** — 顶部的 `DATA` 和 `UI` 对象。

- 每个项目是一段 `{ zh: {...}, en: {...} }`，改中文改 `zh`，改英文改 `en`。
- 想加新项目：复制一段现有的 `work` 项目，改内容即可。
- 改联系方式：文件里的 `CONTACT` 对象。

改完保存 → `git commit` → `git push`，网站自动更新。

## 📁 目录结构

```
index.html              页面结构
assets/css/style.css    样式
assets/js/main.js       所有内容 + 逻辑（改这里）
assets/img/eve.png      证件照
assets/docs/            简历 PDF + 各项目文件
.github/workflows/      自动部署配置
```

## 🔧 本地预览

```bash
python3 -m http.server 8000
# 浏览器打开 http://localhost:8000
```
