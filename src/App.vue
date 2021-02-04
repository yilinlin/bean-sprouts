<template>
  <div id="app">
    <!-- <router-view /> -->
    <layout />
  </div>
</template>

<script>
// import NProgress from 'nprogress'
import microApps from './micro-app'
import Layout from '@/layout/micro-layout/index'
export default {
  name: 'App',
  components: {
    Layout
  },
  data() {
    return {
      microApps,
      current: '/bean-sprouts'
    }
  },
  created() {
    this.bindCurrent()
    // NProgress.start()
  },
  mounted() {
    this.listenRouterChange()
  },
  methods: {
    goto(item) {
      history.pushState(null, item.activeRule, item.activeRule)
      // this.current = item.name
    },
    bindCurrent() {
      const path = window.location.pathname
      if (this.microApps.findIndex(item => item.activeRule === path) >= 0) {
        this.current = path
      }
    },
    listenRouterChange() {
      const _wr = function(type) {
        const orig = history[type]
        return function() {
          const rv = orig.apply(this, arguments)
          const e = new Event(type)
          e.arguments = arguments
          window.dispatchEvent(e)
          return rv
        }
      }
      history.pushState = _wr('pushState')

      window.addEventListener('pushState', this.bindCurrent)
      window.addEventListener('popstate', this.bindCurrent)

      this.$once('hook:beforeDestroy', () => {
        window.removeEventListener('pushState', this.bindCurrent)
        window.removeEventListener('popstate', this.bindCurrent)
      })
    }
  }
}
</script>
