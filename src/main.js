import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

// 如果引用 ccxd-ux 方案, 需要将下边的 ElementUI 引用注释掉
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

// 如果引用 ccxd-ux 方案, 需要打开下边的注释
import CcxdUx from 'ccxd-ux'
import 'ccxd-ux/lib/theme-ce/index.css'

// import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
// import router from './router'

import '@/icons' // icon
import '@/permission' // permission control

// import { registerMicroApps, start, setDefaultMountApp } from 'qiankun'
import { registerMicroApps, start } from 'qiankun'
import microApps from './micro-app'

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }

// set ElementUI lang to EN
// Vue.use(ElementUI, { locale })
// 如果想要中文版 element-ui，按如下方式声明
Vue.use(CcxdUx)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  // router,
  store,
  render: h => h(App)
})

// 定义loader方法，loading改变时，将变量赋值给App.vue的data中的isLoading
// function loader (loading) {
//   if (instance && instance.$children) {
//     // instance.$children[0] 是App.vue，此时直接改动App.vue的isLoading
//     instance.$children[0].isLoading = loading
//   }
// }

// 给子应用配置加上loader方法
const apps = microApps.map(item => {
  return {
    ...item
    // loader
  }
})

registerMicroApps(apps, {
  beforeLoad: app => {
    console.log('before load app.name====>>>>>', app.name)
  },
  beforeMount: [
    app => {
      console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
    }
  ],
  afterMount: [
    app => {
      console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name)
    }
  ],
  afterUnmount: [
    app => {
      console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
    }
  ]
})
// setDefaultMountApp('/sub-vue')
start()
