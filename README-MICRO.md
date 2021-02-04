# 微服务改造说明

> 首先确定你的当前项目是 主项目 还是 具体的 微应用 项目~

改造步骤(主项目)
1. 增加 qiankun 包
    nom install qiankun -S
2. 增加子项目配置文件， 便于下边进行注册
3. 增加子项目注册
    可在main.js 文件中处理
        1. 注意更改其中配置， env变量等
        2. 通过 registerMicroApps 进行注册
3. 路由相关更改
    1. 路由事件包装， 将 pushstate 方法进行扩展, 调用 pushstate 的时候可以触发 pushstate 事件
    2. 不使用默认的 vue 路由， 避免与子路由干扰， 尽量将主结构放轻
    3.需要重写 header 和 sidebar 部分（替换原来的路由）
        1. 是否可以放在 view-router 中不进行渲染呢？ 子项目的router和父项目有冲突，引起混乱， 不建议

改造步骤（子项目）
1. 配置文件修改
    .env 文件中的变量修改， 如果有引用的， 需要对应去修改
    package.json  中的name最好与实际主项目中引用的相同
    vue.config.js
        devServer 需要配置允许跨域
        对应的部署环境中， 也需要进行对应设置， 允许跨域或者设置代理
2. main.js
        router 引入方式修改， router 的实例需要放在 main 文件中进行。
3. 增加 public-path 文件， 用于修改 __webpack_public_path__ ，并在 main.js 中作为第一个文件进行引入
4. router 中需要去掉 404 的路由 (路由统一由主应用去处理)