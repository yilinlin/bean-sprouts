# 前端工程模板/种子工程

## 简介

项目基于vue-element-admin脚手架。vue-element-admin是基于[vue](https://github.com/vuejs/vue) 和 [element-ui](https://github.com/ElemeFE/element)实现的，它使用了最新的前端技术栈，内置了 i18n 国际化解决方案，动态路由，权限验证，提炼了典型的业务模型，提供了丰富的功能组件，它可以帮助你快速搭建企业级中后台产品原型。相信不管你的需求是什么，本项目都能帮助到你。详情介绍可见隔壁readme-vue-element-admin.md，demo可见[在线demo](https://panjiachen.gitee.io/vue-element-admin/#/login?redirect=%2Fdashboard)

- [vue-element-admin文档](https://panjiachen.gitee.io/vue-element-admin-site/zh/)

> 具体版本(后续可能会跟随 vue-element-admin 进行升级而升级)

```shell
    vue 2.6
    elementui 2.13
    vue-router
    vuex
```

## 前序准备

你需要在本地安装 [node](http://nodejs.org/) 和 [git](https://git-scm.com/)。本项目技术栈基于 [ES2015+](http://es6.ruanyifeng.com/)、[vue](https://cn.vuejs.org/index.html)、[vuex](https://vuex.vuejs.org/zh-cn/)、[vue-router](https://router.vuejs.org/zh-cn/) 、[vue-cli](https://github.com/vuejs/vue-cli) 、[axios](https://github.com/axios/axios) 和 [element-ui](https://github.com/ElemeFE/element)，所有的请求数据都使用[Mock.js](https://github.com/nuysoft/Mock)进行模拟，提前了解和学习这些知识会对使用本项目有很大的帮助。

同时配套了系列教程文章，如何从零构建后一个完整的后台项目，建议大家先看完这些文章再来实践本项目

- [手摸手，带你用 vue 撸后台 系列一(基础篇)](https://juejin.im/post/59097cd7a22b9d0065fb61d2)
- [手摸手，带你用 vue 撸后台 系列二(登录权限篇)](https://juejin.im/post/591aa14f570c35006961acac)
- [手摸手，带你用 vue 撸后台 系列三 (实战篇)](https://juejin.im/post/593121aa0ce4630057f70d35)
- [手摸手，带你用 vue 撸后台 系列四(vueAdmin 一个极简的后台基础模板)](https://juejin.im/post/595b4d776fb9a06bbe7dba56)
- [手摸手，带你用vue撸后台 系列五(v4.0新版本)](https://juejin.im/post/5c92ff94f265da6128275a85)
- [手摸手，带你封装一个 vue component](https://segmentfault.com/a/1190000009090836)
- [手摸手，带你优雅的使用 icon](https://juejin.im/post/59bb864b5188257e7a427c09)
- [手摸手，带你用合理的姿势使用 webpack4（上）](https://juejin.im/post/5b56909a518825195f499806)
- [手摸手，带你用合理的姿势使用 webpack4（下）](https://juejin.im/post/5b5d6d6f6fb9a04fea58aabc)


## 功能

```
- 登录 / 注销

- 权限验证
  - 页面权限
  - 指令权限
  - 权限配置
  - 二步登录

- 多环境发布
  - dev
  - sit
  - stage
  - prod

- 全局功能
  - 国际化多语言
  - 多种动态换肤
  - 动态侧边栏（支持多级路由嵌套）
  - 动态面包屑
  - 快捷导航(标签页)
  - Svg Sprite 图标
  - 本地/后端 mock 数据
  - Screenfull全屏
  - 自适应收缩侧边栏

- 编辑器
  - 富文本
  - Markdown
  - JSON 等多格式

- Excel
  - 导出excel
  - 导入excel
  - 前端可视化excel
  - 导出zip

- 表格
  - 动态表格
  - 拖拽表格
  - 内联编辑

- 错误页面
  - 401
  - 404

- 組件
  - 头像上传
  - 返回顶部
  - 拖拽Dialog
  - 拖拽Select
  - 拖拽看板
  - 列表拖拽
  - SplitPane
  - Dropzone
  - Sticky
  - CountTo

- 综合实例
- 错误日志
- Dashboard
- 引导页
- ECharts 图表
- Clipboard(剪贴复制)
- Markdown2html
```

## 规范

### 代码书写规范

规范 esLint

### Git协作规范

#### git 分支规范

>  假设协作分支为 dev 分支

**开始开发**
1. 首先拉取 dev 分支, 然后基于 dev 分支新建自己的分支, 分支命名规则 dev_[featureName]

  ```shell
  ## 在dev 分支上进行操作
  git checkout -b dev_example
  ```

2. 在自己的分支上进行内容更改, 提交

  ```shell
  git add . -A
  git commit 'update: your update detail'
  ```

**推送到远程**
1. 正常情况下, 可以不限制的推送到自己的远程分支 dev_[featureName]

```shell
git push dev_example
// 如果有冲突对于 **自己的分支** 是可以执行 git push -f
// **dev 分支不可以执行 -f**
```

**合并到 dev 分支**
(建议操作 rebase)
1. 自己的分支如果有未提交的代码, 需要先进行提交

```shell
git add . -A
git commit 'update: your update detail'
```

2. 切换到 dev 分支, 拉取最新代码

```shell
git checkout dev
git pull
```

3. 切换到自己的分支, 执行 git rebase dev

```shell
git checkout dev_example
git rebase dev  ## 如果有冲突需要进行解决
## rebase 后, 可能出现本地远程分支与自己的当前分支不同的情况, 如果以本地分支为准的话可以执行
git push -f ## 只能在个人分支上操作!!!
```

4. 切换到 dev 分支, 执行 git merge dev_[featureName]

```shell
git checkout dev
git merge dev_example ## 前边如果处理顺利, 此处应该不会出现 merge 的提示
git push
```

如果实在不清楚 git 的原理, 或者冲突很多, 可以直接执行 merge 操作, 但是不建议, 会导致 dev 分支分支较多.
(不推荐操作 merge)
1. 自己的分支如果有未提交的代码, 需要先进行提交

```shell
  git add . -A
  git commit 'update: your update detail'
```

2. 切换到 dev 分支, 拉取最新代码

```shell
git checkout dev
git pull
```

3. 切换到自己的分支, 执行 git merge dev_[featureName]

```shell
git checkout dev_example
git merge dev # 解决冲突
```

4. 切换到 dev, 进行合并, 推送

```shell
git checkout dev
git merge dev_example
git push
```


#### git 提交规范
https://segmentfault.com/a/1190000017205604

### 命名约定

- components 目录, 所有的文件和文件夹 采用 pascal(帕斯卡) 命名的方式, 即 `YourDir/YourComponent.vue` 的方式

- views 目录, 所有的文件和文件夹 采用 kebab 的方式, 即 `your-dir/your-component.vue` 的方式

> view 中大多为路由中使用, 路径地址是不区分大小写的, 所以采用 小写+- 的方式

- router 中的命名规则, 尽量跟后端的接口命名统一, 比如后端的接口为 `api/account`, 那么我们的文件夹命名就为 `account`

## 开发

```bash
npm config set registry=https://registry.npm.taobao.org

# 克隆项目
git clone ssh://git@gitlab.cecloud-inc.com:2222/cecloud-fed/fe-xxxxxx-cecloud-com.git

# 进入项目目录
cd fe-xxxxxx-cecloud-com

# 安装依赖
npm install

# 启动服务
npm run dev
```

浏览器访问 http://localhost:9527   （具体端口号以实际提示为准）


## 工程结构说明
``` bash
├── build                      // 构建相关  
├── dist                       // 配置相关
│   ├── static                 // 打包结果
├── mock                       // 项目mock 模拟数据
├── plop-templates             // vue组件快速构建模板
├── pubic                      // 应用入口文件模板
├── src                        // 源代码
│   ├── api                    // 所有请求
│   ├── assets                 // 主题 字体等静态资源
│   ├── components             // 全局公用组件
│   ├── directive              // 全局指令
│   ├── filtres                // 全局 filter
│   ├── icons                  // 项目所有 svg icons
│   ├── router                 // 路由
│   ├── store                  // 全局 store管理
│   ├── styles                 // 全局样式
│   ├── utils                  // 全局公用方法
│   ├── vendor                 // 公用vendor
│   ├── views                  // view
│   ├── App.vue                // 入口页面
│   ├── main.js                // 入口 加载组件 初始化等
│   └── permission.js          // 权限管理
├── tests                       // 测试脚本
├── .editorconfig               // 跨语言、跨IDE的通用编码配置
├── .env.develupment            // 测试环境配置
├── .env.production             // 生产环境配置
├── .env.staging                //
├── .eslintignore               // eslint白名单
├── .eslintrc.js                // eslint配置
├── .gitignore                  // git免跟踪文件清单
├── .travis.yml                 // Travis CI用到的配置
├── babel.config.js             // babel配置
└── jest.config.js              // jest自动化测试配置
└── jsconfig.json               // 目录中存在此类文件表示该目录是JavaScript项目的根目录。 文件本身可以选择列出属于项目的文件，要从项目中排除的文件，以及编译器选项
└── plopfile.js                 // vue组件快速构建模板配置
└── postcss.config.js           // postcss配置
└── vue.config.js               // webpack配置
```

## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```

## 其它

```bash
# 预览发布环境效果
npm run preview

# 预览发布环境效果 + 静态资源分析
npm run preview -- --report

# 代码格式检查
npm run lint

# 代码格式检查并自动修复
npm run lint -- --fix
```

更多信息请参考 [使用文档](https://panjiachen.github.io/vue-element-admin-site/zh/)


## Browsers support

Modern browsers and Internet Explorer 10+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](https://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
| IE10, IE11, Edge | last 2 versions | last 2 versions | last 2 versions |
