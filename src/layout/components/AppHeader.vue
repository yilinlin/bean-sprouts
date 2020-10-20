<template>
  <div class="app-header">
    <div class="logo">
      <img class="header-icon" src="https://cecloud.com/upload/2020/07-20/15-11-2600021897472000.svg" alt="">
      <span v-if="showbread" class="bread">注册</span>
    </div>
    <div class="menu">
      <!-- <div class="btn">控制台</div> -->
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link user-info">
          {{ username }}
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">账号中心</el-dropdown-item>
          <el-dropdown-item command="b">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div v-if="identifyStatus && identifyStatus !== 5" class="identify" @click="toIdentify">未实名</div>
    </div>
  </div>
</template>

<script>
import { HOME_URL } from '../../utils/constant'
export default {
  name: 'AppHeader',
  computed: {
    username() {
      return this.$store.getters.username
    },
    identifyStatus() {
      return this.$store.getters.identifyStatus
    },
    showbread() {
      const path = this.$route.path
      return path.match('/register')
    }
  },
  methods: {
    handleCommand(command) {
      if (command === 'a') {
        this.$router.push({ path: '/manage/safety-setting' })
      }
      if (command === 'b') {
        this.$store.dispatch('logout')
        window.location.href = HOME_URL
      }
    },
    toIdentify() {
      this.$router.push({ path: '/manage/certification' })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/variables.scss";
  .app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    font-size: 14px;
    .logo {
      display: flex;
      align-content: center;
      .header-icon{
        width: 116px;
      }
      .bread {
        height: 16px;
        padding: 0 10px;
        margin-left: 10px;
        line-height: 16px;
        border-left: 1px solid #fff;
      }
    }
    .menu {
      display: flex;
      justify-content: center;
      align-content: center;
      line-height: 1.15;
      .btn {
        margin-right: 10px;
      }
      .user-info {
        cursor: pointer;
        color: #4A72E5;
      }
      .identify{
        cursor: pointer;
        margin-left: 5px;
        padding: 1px 5px;
        font-size: 10px;
        color: $white;
        background: #4A72E5;
        border-radius: 2px;
      }
    }
  }

</style>
