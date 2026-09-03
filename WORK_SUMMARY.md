# 个人主页工作总结

更新日期：2026-09-03

## 1. 项目目标

本次工作的目标是为左昊麟制作并部署一个学术个人主页，风格参考师弟的主页：

- 参考主页：https://walker-hyf.github.io/
- 目标主页：https://ZhuoYulang.github.io/
- GitHub Pages 仓库：git@github.com:ZhuoYulang/ZhuoYulang.github.io.git

主页定位为学术标准版，用于展示个人身份、研究方向、论文成果、科研项目、荣誉奖励、教育经历、学术服务和联系方式。

## 2. 已完成工作

### 2.1 资料读取与内容抽取

已读取并整理以下本地资料：

- `简历-左昊麟-2026.06.29.docx`
- `个人照.jpg`

从简历中提取的信息包括：

- 姓名：Haolin Zuo / 左昊麟
- 当前身份：内蒙古大学计算机学院讲师
- 研究方向：多模态情感识别、多模态情感意图联合识别
- 邮箱：zuohaolin_0613@163.com
- 教育经历、科研项目、论文成果、荣誉奖励、学术服务等

隐私处理：

- 简历中的电话、出生日期、民族、政治面貌等信息没有放入主页。
- 原始简历和原始照片没有纳入 Git 提交。

### 2.2 学术链接整理

已确认或配置的公开链接：

- Google Scholar：https://scholar.google.com/citations?user=j45wL-kAAAAJ&hl=en
- DBLP：https://dblp.org/pid/332/0749.html
- GitHub：https://github.com/ZhuoYulang
- Hugging Face：https://huggingface.co/YulangZhuo
- ORCID：https://orcid.org/0009-0000-1412-2883
- Semantic Scholar：当前使用搜索页 https://www.semanticscholar.org/search?q=Haolin%20Zuo&sort=relevance

注意：

- ORCID 来源于公开检索结果，后续建议本人再次确认。
- Semantic Scholar 暂未替换为精确 author profile，后续如果找到准确作者页，建议替换。

### 2.3 页面设计与实现

第一版主页采用了较现代的双栏 hero/card 风格，但用户反馈“不够好看”。之后改为更接近参考主页的 Minimal Mistakes 学术主页风格。

当前版本的视觉和结构特征：

- 顶部 sticky navigation
- 左侧固定个人信息栏
- 圆形头像
- 右侧主内容流
- 蓝色主链接色
- News 滚动列表
- Publications 搜索框
- Representative Work 论文卡片
- More Publications 紧凑列表
- Projects / Honors / Educations / Academic Services 时间线
- 深色模式切换
- Back to top 按钮

当前页面文件：

- `index.html`：主页主体内容
- `styles.css`：页面样式
- `scripts.js`：交互脚本
- `assets/profile.jpg`：主页头像
- `README.md`：简单预览与维护说明
- `WORK_SUMMARY.md`：本总结文档

## 3. 当前目录结构

```text
personal page/
├── .gitignore
├── README.md
├── WORK_SUMMARY.md
├── assets/
│   └── profile.jpg
├── index.html
├── scripts.js
└── styles.css
```

未提交但本地存在、被 `.gitignore` 排除的文件：

```text
简历-左昊麟-2026.06.29.docx
个人照.jpg
```

## 4. Git 与部署状态

本地仓库路径：

```bash
/home/yulang/projects/personal page
```

远程仓库：

```bash
origin git@github.com:ZhuoYulang/ZhuoYulang.github.io.git
```

已推送提交：

```text
276c384 Create academic homepage
```

部署方式：

- 使用 GitHub Pages 用户主页仓库
- 仓库名：`ZhuoYulang.github.io`
- 分支：`main`
- 页面入口：根目录 `index.html`

如果页面未自动显示，请检查 GitHub 仓库：

```text
Settings -> Pages -> Build and deployment
```

推荐设置：

```text
Source: Deploy from a branch
Branch: main
Folder: /root
```

## 5. 已做验证

已执行的验证：

```bash
node --check scripts.js
```

结果：

- JavaScript 语法检查通过。

已检查：

- `index.html` 中本地资源引用存在：
  - `styles.css`
  - `assets/profile.jpg`
  - `scripts.js`
- 页面内部锚点无缺失。
- 本地 Git 工作区在推送后保持干净。
- 远程 `main` 分支已创建并指向已推送提交。

未完成的验证：

- 未做真实浏览器截图验证，因为当时环境中没有可用 Chromium / Playwright。

建议后续人工检查：

- 打开 `https://ZhuoYulang.github.io/`
- 检查桌面端和手机端显示效果
- 检查深色模式
- 检查顶部导航跳转
- 检查论文搜索框
- 检查所有外部链接

## 6. 后续维护方式

### 6.1 本地预览

纯静态页面可直接打开：

```text
/home/yulang/projects/personal page/index.html
```

也可以用简单 HTTP server 预览：

```bash
python3 -m http.server 8000
```

然后访问：

```text
http://localhost:8000
```

### 6.2 修改内容

常见修改位置：

- 修改个人简介：编辑 `index.html` 中 `about-intro`
- 修改学术链接：编辑左侧 `author__urls`
- 修改 News：编辑 `id="-news"` 下的 `news-scroll`
- 修改代表作：编辑 `Representative Work` 下的 `paper-box`
- 修改普通论文：编辑 `More Publications` 下的 `pub-list`
- 修改项目、奖项、教育经历、学术服务：编辑对应 `timeline`
- 修改颜色、间距、头像大小：编辑 `styles.css`
- 修改搜索、深色模式、返回顶部等交互：编辑 `scripts.js`

### 6.3 提交与推送

修改后建议执行：

```bash
node --check scripts.js
git status --short
git add index.html styles.css scripts.js README.md WORK_SUMMARY.md assets/profile.jpg
git commit -m "Update homepage"
git push
```

如果只修改了某几个文件，只添加对应文件即可。

## 7. 重要注意事项

### 7.1 不要公开敏感信息

不要把以下内容放入主页或提交到 GitHub：

- 手机号
- 身份证号
- 出生日期
- 家庭地址
- 未公开的项目合同或经费材料
- 含隐私信息的完整简历
- token、密码、密钥

当前 `.gitignore` 已排除：

```gitignore
*.docx
个人照.jpg
.DS_Store
Thumbs.db
```

### 7.2 论文配图仍可优化

当前 Representative Work 的论文图是 CSS 生成的占位风格图，不是论文原始 teaser。

后续如果要进一步接近师弟主页效果，建议为每篇代表作补充：

- 方法框架图
- 数据集示意图
- 论文 teaser
- 项目 logo 或模型结构图

建议路径：

```text
assets/papers/
```

例如：

```text
assets/papers/if-mmin.png
assets/papers/mc-eiu.png
assets/papers/hdcl.png
assets/papers/cmifa.png
```

然后在 `index.html` 的 `paper-box-image` 中替换 CSS 占位图。

### 7.3 学术链接待确认

建议后续确认或补充：

- ORCID 是否确认为本人账号
- Semantic Scholar 精确作者页
- OpenReview 个人主页
- 学院教师主页
- 个人实验室主页
- 招生信息或学生招募说明

## 8. 本次工作的关键判断

本次没有直接复制参考主页源码，而是复刻其主要视觉结构与交互模式，并将内容替换为左昊麟个人主页所需信息。

这样做的原因：

- 避免直接复制他人的个人内容和实现细节
- 保留相近的学术主页观感
- 让页面更容易维护
- 减少 Jekyll 依赖，保持纯静态 HTML/CSS/JS

当前方案的优点：

- 部署简单
- 维护成本低
- GitHub Pages 兼容性好
- 页面打开速度快
- 不依赖构建工具

当前方案的限制：

- 没有自动从 BibTeX / Google Scholar 同步论文
- 论文更新需要手动编辑 HTML
- 论文配图仍是占位图
- 还没有浏览器自动化截图回归测试

## 9. 建议的下一步

优先级从高到低：

1. 确认线上页面是否正常打开。
2. 检查 Google Scholar、DBLP、GitHub、Hugging Face、ORCID 链接。
3. 提供代表作论文配图，替换当前 CSS 占位图。
4. 补充学院教师主页、办公室、招生方向等教师主页信息。
5. 如果论文数量继续增加，可考虑把论文数据抽到 `publications.json`，减少手动维护 HTML 的成本。
