<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :unique-opened="false"
        :collapse-transition="false"
        mode="vertical"
      >
        <el-menu-item v-for="app in microApps" :key="app.name" :index="app.name" @click="goto(app)">
          <span slot="title">{{ app.name }}</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import microApps from '@/micro-app'
export default {
  computed: {
    microApps() {
      return microApps
    },
    activeMenu() {
      const path = window.location.pathname
      const item = this.microApps.find(item => path.indexOf(item.activeRule) > -1)
      console.log('path is ', path)
      return item && (item.name)
    },
    isCollapse() {
      return false
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    }
  },
  methods: {
    goto(item) {
      history.pushState(null, item.activeRule, item.activeRule)
      // this.current = item.name
    }

  }
}
</script>

<style lang="scss" scoped>

</style>
