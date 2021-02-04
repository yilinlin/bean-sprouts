import './public-path'
import Vue from 'vue'
import Router from 'vue-router'

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
import routes from './router'

import '@/icons' // icon
import permissionRouter from '@/permission' // permission control

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

let instance = null

function render(props = {}) {
  const { container, routerBase } = props
  console.log('router base is ', routerBase)
  console.log('process.env.BASE_URLs ', process.env.BASE_URL)
  const router = new Router({
    base: window.__POWERED_BY_QIANKUN__ ? routerBase : process.env.BASE_URL,
    mode: 'history',
    routes
  })

  permissionRouter(router)

  console.log('container is ', container)

  instance = new Vue({
    router,
    store,
    render: (h) => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
  // 这里是子应用独立运行的环境，实现子应用的登录逻辑

  // 独立运行时，也注册一个名为global的store module
  // commonStore.globalRegister(store)
  // 模拟登录后，存储用户信息到global module
  // const userInfo = { name: '我是独立运行时名字叫张三' } // 假设登录后取到的用户信息
  // store.commit('global/setGlobalState', { user: userInfo })

  render()
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped')
}

export async function mount(props) {
  console.log('[vue] props from main framework', props)

  // commonStore.globalRegister(store, props)

  render(props)
}

export async function unmount() {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
}
