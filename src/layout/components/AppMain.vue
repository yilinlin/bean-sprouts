<template>
  <section class="app-main">
    <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
export default {
  name: 'AppMain',
  components: {
    Breadcrumb
  },
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  /*50 = navbar  */
  /* min-height: calc(100vh - 50px);
  width: 100%; */
  width: calc(100% - 210px);
  margin-left: 210px;
  padding-left: 20px;
  position: relative;
  /* overflow: hidden; */
  overflow: auto;
  & > div {
    min-width: calc(1024px - 210px - 20px - 32px);
  }
}
.fixed-header+.app-main {
  padding-top: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
