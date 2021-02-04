<template>
  <div :class="classObj" class="app-wrapper">
    <el-container>
      <el-header height="48px"><app-header /></el-header>
      <el-main>
        <app-side-bar
          class="sidebar-container"
        />
        <div id="subapp-viewport" :style="{transform: 'translate(210px, 0)'}" />
      </el-main>
      <!-- 暂时取消footer, 目前给的业务系统中都没有 footer -->
      <!-- <el-footer height="78px"><app-footer /></el-footer> -->
    </el-container>
  </div>
</template>

<script>
import { AppHeader } from '@/layout/components'
import AppSideBar from '@/layout/micro-layout/components/SidebarMicro'
import ResizeMixin from '@/layout/mixin/ResizeHandler'
import { mapState } from 'vuex'

export default {
  name: 'Layout',
  components: {
    // AppMain,
    AppHeader,
    // AppFooter,
    AppSideBar
  },
  mixins: [ResizeMixin],
  data() {
    return {
      isShowSidebar: true
    }
  },
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device,
      showSettings: state => state.settings.showSettings,
      needTagsView: state => state.settings.tagsView,
      fixedHeader: state => state.settings.fixedHeader
    }),
    classObj() {
      return {
      }
    }
  }
  // watch: {
  //   $route(to, from) {
  //     // 监听路由发生变化判断是否显示侧边栏
  //     this.handleShowSide()
  //   }
  // },
  // mounted() {
  //   // 判断路由是否是帐号管理并显示侧边栏
  //   this.handleShowSide()
  // },
  // methods: {
  //   handleShowSide() {
  //     this.isShowSidebar = true
  //   }
  // }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;

  }

  .el-container {
    height: 100%;
  }

  .el-header {
    z-index: 1002;
    padding: 0;
  }
  .el-header, .el-footer {
    background-color:$navBg;
    color: $navFontColor;;
    line-height: 50px;
    box-shadow: 0 3px 8px 0 rgba(41, 48, 64, 0.2);
  }

  .el-main {
    padding: 0;
    margin: 0;
    height: calc(100% - 120px);
    display: flex;
    overflow: hidden;
  }

  .app-side-bar {
    width: 240px;
  }

  // .app-main {
  //   flex: 1;
  //   word-break: break-all;
  //   overflow: auto;
  // }
</style>
