import store from './store'

const microApps = [
  {
    name: 'sub-app1',
    entry: process.env.VUE_APP_SUB_APP1,
    activeRule: '/sub-app1'
  },
  {
    name: 'bean-sprouts',
    entry: process.env.VUE_APP_SUB_APP2,
    activeRule: '/micro/bean-sprouts'
  },
  {
    name: 'sub-react',
    entry: process.env.VUE_APP_SUB_REACT,
    activeRule: '/sub-react'
  }
]

const apps = microApps.map(item => {
  return {
    ...item,
    container: '#subapp-viewport', // 子应用挂载的div
    props: {
      routerBase: item.activeRule, // 下发基础路由
      getGlobalState: store.getGlobalState // 下发getGlobalState方法
    }
  }
})

export default apps
